import React, { Component } from 'react';
import styles from './DetailedBeerInformation.scss';
import ErrorMessage from '../ErrorMessage';
import Loader from '../Loader';
import RandomBeer from '../RandomBeer';

const randomBeerResource = 'https://api.punkapi.com/v2/beers/random'

class DetailedBeerInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: [],
      isLoading: false,
      hasError: false
    }
  }

  componentDidMount() {
    this.getBeers();
  }

  getBeers() {
    this.setState({
      isLoading: true
    })

    fetch(randomBeerResource)
      .then(response => response.json())
      .then(beers => {
        this.setState({
          beers: [
            ...this.state.beers,
            ...beers
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
    return (
      <div className={styles.detailedBeerContainer}>
        <div className={styles.detailedBeerHeader}>
          <h2 className={styles.detailedBeerTitle}>{this.props.name}</h2>
          <i className={`${styles.detailedBeerCloseButton} fas fa-lg fa-times-circle`} onClick={this.props.handleClick}></i>
        </div>
        <div className={styles.detailedBeerContent}>
          <p className={styles.detailedBeerSubtitle}>Description:</p>
          <p className={styles.text}>{this.props.description}</p>
          <p className={styles.detailedBeerSubtitle}>Perfect to eat with:</p>
          <ul className={styles.detailedBeerList}>
            {
              this.props.dishes.map((dish, index) => (
                <li key={index}>{dish}</li>
              ))
            }
          </ul>
        </div>
        <p className={styles.detailedBeerSubtitle}>Check also:</p>
        {
          this.state.hasError
          &&
          <ErrorMessage
            icon='fa-exclamation-circle'
            text='Results cannot be shown'
          />
        }
        {
          this.state.isLoading
          &&
          <Loader />
        }
        {
          this.state.beers.map((beer) => (
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
