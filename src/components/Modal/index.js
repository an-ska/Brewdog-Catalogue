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
      <div>
        <i className="fas fa-times-circle" onClick={this.props.handleClick}></i>
        {
          this.state.hasError
          &&
          <Alert
            icon='fa-exclamation-circle'
            text='Results cannot be shown'
          />
        }
        <p>{this.props.name}</p>
        <p>{this.props.description}</p>
        <ul>
          {
            this.props.food.map((food, index) => (
                <li key={index}>{food}</li>
              )
            )
          }
        </ul>
        <p>Check also:</p>
        {
          this.state.isLoading
          &&
          <Loader text='...loading' />
        }
        {
          this.state.beers.map((beer) => (
            <SimilarBeerCard
              id={beer.id}
              key={beer.id}
              image={beer.image_url}
              name={beer.name}
            />
          )
        )}
      </div>
    )
  }
}

export default Modal;
