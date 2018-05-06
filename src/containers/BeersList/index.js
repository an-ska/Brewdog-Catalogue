import React, { Component, Fragment } from 'react';
import './BeersList.scss';
import Beer from '../../components/Beer';

class BeersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: []
    }
  }

  componentDidMount() {
    this.getBeers();
  }

  getBeers() {
    const apiUrl = 'https://api.punkapi.com/v2/beers?page=1&per_page=10';
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
            ]
          })
        })
      })
  }

  render() {
    return (
      <Fragment>
        <h1>Brewdog Catalogue</h1>
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
      </Fragment>
    )
  }
}

export default BeersList;
