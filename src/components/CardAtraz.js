import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import '../style/cardAtraz.css';

class CardEscudo extends React.Component {
  render() {
    const { cardEscudo } = this.props;
    return (
      <div className="cardAtraz">

        <img
          src={ cardEscudo }
          alt="Imagem do time"
          className="imgEscudo"
        />

      </div>
    );
  }
}

CardEscudo.propTypes = {

  cardEscudo: PropTypes.string.isRequired,
};
export default CardEscudo;
