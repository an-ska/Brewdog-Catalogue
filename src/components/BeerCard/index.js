import React, { Component, Fragment } from 'react';
import styles from './BeerCard.scss';
import Button from '../Button';
import Modal from '../Modal';

class BeerCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    }
  }

  openModal = () => {
    this.setState({
      showModal: true
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <Fragment>
        <li id={this.props.id} className={styles.card}>
          <div className={styles.cardImage}>
            <img
              alt='Beer image'
              src={this.props.image}
              className={styles.image}
            />
          </div>
          <div className={styles.cardContent}>
            <h2 className={styles.title}>{this.props.name}</h2>
            <p><span className={styles.subtitle}>Alcohol By Volume:</span> {this.props.abv}</p>
            <p><span className={styles.subtitle}>International Bitterness Unit:</span> {this.props.ibu}</p>
            <p><span className={styles.subtitle}>European Brewery Convention:</span> {this.props.ebc}</p>
            <Button
              handleClick={() => this.openModal()}
              text='Get more info'
            />
          </div>
        </li>
        {
          this.state.showModal
          &&
          <Modal
            name={this.props.name}
            description={this.props.description}
            food={this.props.food}
            handleClick={() => this.closeModal()}
          />
        }
      </Fragment>
    )
  }
}

export default BeerCard;
