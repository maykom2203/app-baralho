import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo } = this.props;
    const linha = '----------';

    return (
      <div>
        <h3 data-testid="name-card">
          {cardName}
        </h3>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">
          {cardDescription}
        </p>
        <p data-testid="attr1-card">
          {cardAttr1}
          <br />
          {linha}
        </p>
        <p data-testid="attr2-card">
          {cardAttr2}
          <br />
          {linha}
        </p>
        <p data-testid="attr3-card">
          {cardAttr3}
          <br />
          {linha}
        </p>
        <p data-testid="rare-card">
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
