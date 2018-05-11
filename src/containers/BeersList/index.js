import React, { Component, Fragment } from 'react';
import './BeersList.scss';
import Beer from '../../components/Beer';
import Alert from '../../components/Alert';
import Loader from '../../components/Loader';
import Button from '../../components/Button';

const punkApiUrl = 'https://api.punkapi.com/v2/beers'
const resultsPerPage = 10;

class BeersList extends Component {
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
        beers.map((beer) => {
          const beerDetails = {
            id: beer.id,
            image : beer.image_url,
            name : beer.name,
            abv : beer.abv,
            ibu: beer.ibu,
            ebc: beer.ebc
          }

          this.setState({
            beers: [
              ...this.state.beers,
              beerDetails
            ],
            isLoading: false
          })
        })

        this.setState({
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
        <h1>Brewdog Catalogue</h1>
        {
          this.state.hasError
          &&
          <Alert
            icon='fa-exclamation-circle'
            text='Results cannot be shown'
          />
        }
        {
          this.state.isLoading && <Loader />
        }
        <ul>
          {this.state.beers.map((beer) => {
            return (
              <Beer
                key={beer.id}
                id={beer.id}
                image={beer.image}
                name={beer.name}
                abv={beer.abv}
                ibu={beer.ibu}
                ebc={beer.ebc}
              />
            )
          })}
        </ul>
        {
          this.state.numberOfNewlyFetchedBeers === 10 && <Button loadMoreResults={this.loadMoreResults} />
        }
      </Fragment>
    )
  }
}

export default BeersList;
