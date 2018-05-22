import React, { Component, Fragment } from 'react';
import styles from './BeerList.scss';
import BeerCard from '../../components/BeerCard';
import ErrorMessage from '../../components/ErrorMessage';
import Loader from '../../components/Loader';
import Button from '../../components/Button';

const punkApiUrl = 'https://api.punkapi.com/v2/beers'
const beersPerPage = 9;

class BeerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: [],
      isLoading: false,
      hasError: false,
      pageToDisplay: 1,
      numberOfNewlyFetchedBeers: 0
    }
  }

  componentDidMount() {
    this.getBeers();
  }

  getBeers() {
    const apiUrl = `${punkApiUrl}?page=${this.state.pageToDisplay}&per_page=${beersPerPage}`;

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
          isLoading: false,
          pageToDisplay: this.state.pageToDisplay + 1,
          numberOfNewlyFetchedBeers: beers.length
        })
      })

      .catch(e => {
        this.setState({
          hasError: true,
          isLoading: false,
        });
      })
  }

  render() {
    const { hasError, beers, isLoading, numberOfNewlyFetchedBeers } = this.state;
  
    return (
      <Fragment>
        <h1 className={styles.title}>Brewdog Catalogue</h1>
        {
          hasError
          &&
          <ErrorMessage
            icon='fa-exclamation-circle'
            text='Results cannot be shown'
          />
        }
        <ul className={styles.beerCardsContainer}>
          {
            beers.map((beer) => (
              <BeerCard
                id={beer.id}
                key={beer.id}
                image={beer.image_url}
                name={beer.name}
                abv={beer.abv}
                ibu={beer.ibu}
                ebc={beer.ebc}
                description={beer.description}
                dishes={beer.food_pairing}
              />
            ))
          }
        </ul>
        {
          isLoading
          &&
          <Loader />
        }
        {
          numberOfNewlyFetchedBeers === beersPerPage
          &&
          <Button
            handleClick={() => this.getBeers()}
            text='Load mooore beers'
          />
        }
      </Fragment>
    )
  }
}

export default BeerList;
