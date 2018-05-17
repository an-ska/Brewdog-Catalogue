import React, { Component, Fragment } from 'react';
import styles from './BeerCard.scss';
import Button from '../Button';
import DetailedBeerInformation from '../DetailedBeerInformation';

class BeerCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetailedBeerInformation: false
    }
  }

  openDetailedBeerInformation = () => {
    this.setState({
      showDetailedBeerInformation: true
    })
  }

  closeDetailedBeerInformation = () => {
    this.setState({
      showDetailedBeerInformation: false
    })
  }

  render() {
    return (
      <Fragment>
        <li id={this.props.id} className={styles.beerCardContainer}>
          <div className={styles.beerCardImage}>
            <img
              alt='Beer image'
              src={this.props.image}
              className={styles.beerImage}
            />
          </div>
          <div className={styles.beerCardContent}>
            <h2 className={styles.beerCardTitle}>{this.props.name}</h2>
            <p><span className={styles.beerCardSubtitle}>Alcohol By Volume:</span> {this.props.abv}</p>
            <p><span className={styles.beerCardSubtitle}>International Bitterness Unit:</span> {this.props.ibu}</p>
            <p><span className={styles.beerCardSubtitle}>European Brewery Convention:</span> {this.props.ebc}</p>
            <Button
              handleClick={() => this.openDetailedBeerInformation()}
              text='Get more info'
            />
          </div>
        </li>
        {
          this.state.showDetailedBeerInformation
          &&
          <DetailedBeerInformation
            name={this.props.name}
            description={this.props.description}
            dishes={this.props.dishes}
            handleClick={() => this.closeDetailedBeerInformation()}
          />
        }
      </Fragment>
    )
  }
}

export default BeerCard;
