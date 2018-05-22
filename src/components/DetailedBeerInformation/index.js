import React, { Component } from 'react';
import styles from './DetailedBeerInformation.scss';
import ErrorMessage from '../ErrorMessage';
import Loader from '../Loader';
import RandomBeer from '../RandomBeer';

const randomBeerResource = 'https://api.punkapi.com/v2/beers/random';

class DetailedBeerInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      hasError: false,
      beer: [],
    }
  }

  componentDidMount() {
    this.getBeer();
  }

  getBeer() {
    this.setState({
      isLoading: true
    })

    fetch(randomBeerResource)
      .then(response => response.json())
      .then(randomBeer => {
        this.setState({
          beer: [
            ...randomBeer
          ],
          isLoading: false
        })
      })

      .catch(e => {
        this.setState({
          hasError: true,
          isLoading: false
        })
      })
  }

  render() {
    const { hasError, isLoading, beer } = this.state;
    const { name, handleClick, description, dishes } = this.props;
  
    return (
      <div className={styles.detailedBeerContainer}>
        <div className={styles.detailedBeerHeader}>
          <h2 className={styles.detailedBeerTitle}>{name}</h2>
          <i className={`${styles.detailedBeerCloseButton} fas fa-lg fa-times-circle`} onClick={handleClick}></i>
        </div>
        <div className={styles.detailedBeerContent}>
          <p className={styles.detailedBeerSubtitle}>Description:</p>
          <p className={styles.text}>{description}</p>
          <p className={styles.detailedBeerSubtitle}>Perfect to eat with:</p>
          <ul className={styles.detailedBeerList}>
            {
              dishes.map((dish, index) => (
                <li key={index}>{dish}</li>
              ))
            }
          </ul>
        </div>
        <p className={styles.detailedBeerSubtitle}>Check also:</p>
        {
          hasError
          &&
          <ErrorMessage
            icon='fa-exclamation-circle'
            text='Results cannot be shown'
          />
        }
        {
          isLoading
          &&
          <Loader />
        }
        {
          beer.map((beer) => (
            <RandomBeer
              id={beer.id}
              key={beer.id}
              image={beer.image_url}
              name={beer.name}
              abv={beer.abv}
              ibu={beer.ibu}
              ebc={beer.ebc}
            />
          ))
        }
      </div>
    )
  }
}

export default DetailedBeerInformation;
