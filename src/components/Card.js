import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo } = this.props;

    return (
      <div className="card">

        <h3 data-testid="name-card">
          <h5> Nome: </h5>
          {cardName}
        </h3>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">
          <h5> Descrição: </h5>
          {cardDescription}
        </p>
        <p data-testid="attr1-card">
          <h5> Attr1: </h5>
          {cardAttr1}

        </p>
        <p data-testid="attr2-card">
          <h5> Attr2: </h5>
          {cardAttr2}
        </p>
        <p data-testid="attr3-card">
          <h5> Attr3: </h5>
          {cardAttr3}
        </p>
        <p data-testid="rare-card">
          <h5> Attr3: </h5>
          {cardRare}
        </p>
        {cardTrunfo === true ? <p data-testid="trunfo-card">Super Trunfo </p> : null}

      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
export default Card;
