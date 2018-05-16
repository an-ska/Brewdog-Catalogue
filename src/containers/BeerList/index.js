import React, { Component, Fragment } from 'react';
import styles from './BeerList.scss';
import BeerCard from '../../components/BeerCard';
import Alert from '../../components/Alert';
import Loader from '../../components/Loader';
import Button from '../../components/Button';

const punkApiUrl = 'https://api.punkapi.com/v2/beers'
const resultsPerPage = 10;

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
    const apiUrl = `${punkApiUrl}?page=${this.state.pageToDisplay}&per_page=${resultsPerPage}`;

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
          numberOfNewlyFetchedBeers: beers.length
        })
      })

      .catch(e => {
        this.setState({
          hasError: true,
          isLoading: false,
        });
      })

    this.setState({
      pageToDisplay: this.state.pageToDisplay + 1,
    })
  }

  loadMoreResults = () => {
    this.getBeers()
  }

  render() {
    return (
      <Fragment>
        <h1 className={styles.title}>Brewdog Catalogue</h1>
        {
          this.state.hasError
          &&
          <Alert
            icon='fa-exclamation-circle'
            text='Results cannot be shown'
          />
        }
        <ul className={styles.container}>
          {this.state.beers.map((beer) => {
            return (
              <BeerCard
                id={beer.id}
                key={beer.id}
                image={beer.image_url}
                name={beer.name}
                abv={beer.abv}
                ibu={beer.ibu}
                ebc={beer.ebc}
                yeast={beer.ingredients.yeast}
                description={beer.description}
                food={beer.food_pairing}
              />
            )
          })}
        </ul>
        {
          this.state.isLoading
          &&
          <Loader />
        }
        {
          this.state.numberOfNewlyFetchedBeers === 10
          &&
          <Button
            handleClick={() => this.loadMoreResults()}
            text='Load more beers'
          />
        }
      </Fragment>
    )
  }
}

export default BeerList;
