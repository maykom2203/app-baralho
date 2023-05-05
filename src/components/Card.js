import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import '../style/card.css';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardImage,
      cardRare, cardTrunfo } = this.props;
    return (
      <div className="card">
        <div className="cardExample">
          <h3 data-testid="name-card">
            {cardName}
          </h3>
        </div>
        <img
          src={ cardImage }
          alt={ cardName }
          className="imgPersonagem"
          data-testid="image-card"
        />
        <div className="cardExample">
          <h5>
            Posição:
          </h5>
          {cardDescription}

        </div>
        <div className="cardExample">
          <h5> Atack: </h5>
          {cardAttr1}

        </div>
        <div className="cardExample">
          <h5> Defesa: </h5>
          {cardAttr2}
        </div>
        <div className="cardExample">
          <h5> Raridade </h5>
          {cardRare}
        </div>
        <div className="cardExample">
          {cardTrunfo === true ? <p data-testid="trunfo-card"> Capitão </p> : null}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
export default Card;
