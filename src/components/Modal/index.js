import React, { Component } from 'react';
import styles from './Modal.scss';
import Alert from '../Alert';
import Loader from '../Loader';
import SimilarBeerCard from '../SimilarBeerCard';

const punkApiUrl = 'https://api.punkapi.com/v2/beers/random'

class Modal extends Component {
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
    const apiUrl = punkApiUrl;

    this.setState({
      isLoading: true
    })

    fetch(apiUrl)
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
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{this.props.name}</h2>
          <i className={`${styles.closeModal} fas fa-lg fa-times-circle`} onClick={this.props.handleClick}></i>
        </div>
        <div className={styles.modalContent}>
          <p className={styles.modalSubtitle}>Description:</p>
          <p className={styles.text}>{this.props.description}</p>
          <p className={styles.modalSubtitle}>Perfect to eat with:</p>
          <ul className={styles.modalList}>
            {
              this.props.food.map((food, index) => (
                  <li key={index}>{food}</li>
                )
              )
            }
          </ul>
        </div>
        <p className={styles.modalSubtitle}>Check also:</p>
        {
          this.state.hasError
          &&
          <Alert
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
            <SimilarBeerCard
              id={beer.id}
              key={beer.id}
              image={beer.image_url}
              name={beer.name}
              abv={beer.abv}
              ibu={beer.ibu}
              ebc={beer.ebc}
            />
          )
        )}
      </div>
    )
  }
}

export default Modal;
