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
        <li id={this.props.id}>
          <img alt='Beer image' src={this.props.image} />
          <p>{this.props.name}</p>
          <p>{this.props.abv}</p>
          <p>{this.props.ibu}</p>
          <p>{this.props.ebc}</p>
        </li>
        <Button
          handleClick={() => this.openModal()}
          text='More'
        />
        {
          this.state.showModal
          &&
          <Modal
            className='openModal' name={this.props.name} description={this.props.description} yeast={this.props.yeast} food={this.props.food} handleClick={() => this.closeModal()}
          />
        }
      </Fragment>
    )
  }
}

export default BeerCard;
