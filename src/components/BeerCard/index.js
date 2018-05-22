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

  toggleDetailedBeerInformation = () => {
    this.setState({
      showDetailedBeerInformation: !this.state.showDetailedBeerInformation
    })
  }

  render() {
    const {id, image, name, abv, ibu, ebc } = this.props;

    return (
      <Fragment>
        <li id={id} className={styles.beerCardContainer}>
          <div className={styles.beerCardImage}>
            <img
              alt='Beer image'
              src={image}
              className={styles.beerImage}
            />
          </div>
          <div className={styles.beerCardContent}>
            <h2 className={styles.beerCardTitle}>{name}</h2>
            <p><span className={styles.beerCardSubtitle}>Alcohol By Volume:</span> {abv}</p>
            <p><span className={styles.beerCardSubtitle}>International Bitterness Unit:</span> {ibu}</p>
            <p><span className={styles.beerCardSubtitle}>European Brewery Convention:</span> {ebc}</p>
            <Button
              handleClick={() => this.toggleDetailedBeerInformation()}
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
            handleClick={() => this.toggleDetailedBeerInformation()}
          />
        }
      </Fragment>
    )
  }
}

export default BeerCard;
