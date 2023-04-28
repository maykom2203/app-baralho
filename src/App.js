import React from 'react';
import './index.css';
import Form from './components/Form';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardBaralho: [],
    };
  }

  SuperTryunfo = () => {
    const { cardBaralho } = this.state;
    const filtroSuperTrunfo = cardBaralho.some((cardSup) => cardSup.cardTrunfo === true);
    this.setState({ hasTrunfo: filtroSuperTrunfo });
  }

  deletCard = (event) => {
    const { cardBaralho } = this.state;
    this.setState({ cardBaralho: cardBaralho.filter((card) => card.cardName !== event) },
      this.SuperTryunfo);
  }

ValidForm = () => {
  const { cardName, cardImage, cardDescription,
    cardAttr1, cardAttr2, cardAttr3 } = this.state;

  const max = 90;
  const somaMax = 210;
  const somaAttr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

  if (cardName && cardImage && cardDescription) {
    if ((cardAttr1 > max || cardAttr1 < 0)
    || (cardAttr2 > max || cardAttr2 < 0)
    || (cardAttr3 > max || cardAttr3 < 0) || (somaAttr > somaMax)) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  } else {
    this.setState({
      isSaveButtonDisabled: true,
    });
  }
}

handleSubmit = (event) => {
  event.preventDefault();
  const card = this.state;
  this.setState((prevState) => ({
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    cardBaralho: [...prevState.cardBaralho, card],
  }), this.SuperTryunfo);
}

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox'
      ? target.checked : target.value;
    this.setState({
      [name]: value }, this.ValidForm);
  }

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, isSaveButtonDisabled, cardBaralho, hasTrunfo } = this.state;
    return (
      <>
        <h1>Tryunfo</h1>
        <div className="home">
          <Form
            onInputChange={ this.handleChange }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            onSaveButtonClick={ this.handleSubmit }
            isSaveButtonDisabled={ isSaveButtonDisabled }

          />

          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }

          />
          <div>
            {cardBaralho.map((cad) => (
              <div key={ cad.cardName }>
                <Card
                  cardName={ cad.cardName }
                  cardDescription={ cad.cardDescription }
                  cardAttr1={ cad.cardAttr1 }
                  cardAttr2={ cad.cardAttr2 }
                  cardAttr3={ cad.cardAttr3 }
                  cardImage={ cad.cardImage }
                  cardRare={ cad.cardRare }
                  cardTrunfo={ cad.cardTrunfo }
                />
                <button
                  type="button"
                  data-testid="delete-button"
                  onClick={ () => this.deletCard(cad.cardName) }
                >
                  excluir
                </button>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
