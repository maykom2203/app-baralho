import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import '../style/forms.css';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, onInputImage,
      cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;
    return (
      <div>
        <form className="form">
          <label htmlFor="imageTime" className=" button1 ">
            Imagem de Escudo:
            <input
              id="imageTime"
              accept="image/*"
              type="file"
              className="fileInput"
              name="escudoImage"
              onChange={ onInputImage }
            />
          </label>
          <label htmlFor="name" className="labelForm">
            nome da carta:
            <input
              type="text"
              className="field"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="descricao" className="labelForm">
            Descrição:
            <input
              type="textarea"
              className="field"
              data-testid="description-input"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr1" className="labelForm">
            Atack:
            <input
              type="number"
              className="field"
              data-testid="attr1-input"
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr2" className="labelForm">
            Defesa:
            <input
              type="number"
              className="field"
              data-testid="attr2-input"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="image" className=" button1 ">
            Imagem Personagem:
            <input
              id="image"
              accept="image/*"
              type="file"
              className="fileInput"
              name="cardImage"
              onChange={ onInputImage }
            />
          </label>
          <label htmlFor="Raridade" className="labelForm">
            Raridade:
            <select
              type="text"
              data-testid="rare-input"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
            <div className="btn">
              <label htmlFor="Super-Trunfo" className="superTrunfo">
                Capitão:
                {hasTrunfo ? 'Você já tem um Capitão no Baralho' : <input
                  type="checkbox"
                  data-testid="trunfo-input"
                  name="cardTrunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                  className="superTrunfo"
                />}
              </label>
              <button
                className="button3"
                type="submit"
                data-testid="save-button"
                disabled={ isSaveButtonDisabled }
                onClick={ onSaveButtonClick }
              >
                Salvar
              </button>

            </div>
          </label>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  onInputImage: PropTypes.func.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,

};
export default Form;
