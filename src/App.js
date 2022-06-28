import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
      isSaveButtonDisabled: true,
      cardBaralho: [],
    };
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
  }));
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
      cardTrunfo, isSaveButtonDisabled } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
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
      </div>
    );
  }
}

export default App;
