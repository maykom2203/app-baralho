import React from 'react';
import './index.css';
import './style/app.css';
import Form from './components/Form';
import Card from './components/Card';
import CardEscudo from './components/CardAtraz';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      cardEscudo: '',
      isSaveButtonDisabled: true,
      cardBaralho: [],
      escudo: false,
    };
  }

  componentDidMount() {
    if (localStorage.getItem('carBaralho') !== null) {
      this.localUpdeit();
    }
  }

  componentDidUpdate() {
    const { cardBaralho, cardEscudo } = this.state;
    const mil = 1000;
    setTimeout(() => {
      localStorage.setItem('carBaralho', JSON.stringify(cardBaralho));
      localStorage.setItem('carEscudo', JSON.stringify(cardEscudo));
    }, mil);
  }

  localUpdeit = () => {
    this.setState(() => ({
      cardBaralho: JSON.parse(localStorage.getItem('carBaralho')),
      cardEscudo: JSON.parse(localStorage.getItem('carEscudo')),
    }));
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

  hadleDeletEscudo = (event) => {
    const { cardEscudo } = this.state;
    this.setState({
      cardEscudo: cardEscudo !== event,
      escudo: false,
    });
  }

  ValidForm = () => {
    const { cardName, cardImage, cardDescription,
      cardAttr1, cardAttr2 } = this.state;

    const max = 200;
    const somaMax = 500;
    const somaAttr = Number(cardAttr1) + Number(cardAttr2);

    if (cardName && cardImage && cardDescription) {
      if ((cardAttr1 > max || cardAttr1 < 0)
    || (cardAttr2 > max || cardAttr2 < 0)
    || (somaAttr > somaMax)) {
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
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      cardBaralho: [...prevState.cardBaralho, card],
    }), this.SuperTryunfo);
  }

  hadleCardImg = ({ target }) => {
    const { escudo } = this.state;
    const file = target.files[0];
    const fileread = new FileReader();
    fileread.onloadend = () => {
      if (escudo === false) {
        this.setState({
          cardEscudo: fileread.result,
          escudo: true,
        });
      } else {
        this.setState({
          cardImage: fileread.result,
        });
      }
    };
    fileread.readAsDataURL(file);
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
      cardAttr2, cardImage, cardRare, cardEscudo,
      cardTrunfo, isSaveButtonDisabled, cardBaralho, hasTrunfo } = this.state;
    return (
      <>
        <h1>Monte seu Card Favorito</h1>
        <div>
          <div className="home">
            <Form
              onInputChange={ this.handleChange }
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardImage={ cardImage }
              onInputImage={ this.hadleCardImg }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              onSaveButtonClick={ this.handleSubmit }
              isSaveButtonDisabled={ isSaveButtonDisabled }
            />
            <div className="cardEscudo">
              <CardEscudo
                cardEscudo={ cardEscudo }
              />

              <button
                type="button"
                className="button1"
                onClick={ () => this.hadleDeletEscudo(cardEscudo) }
              >
                Excluir Escudo
              </button>

            </div>

            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>
          <div className=" separaBagroud" />
          <div className="cardProntoMain">
            {cardBaralho.map((cad) => (
              <div key={ cad.cardName } className="cardBaralhoPronto">
                <Card
                  cardName={ cad.cardName }
                  cardDescription={ cad.cardDescription }
                  cardAttr1={ cad.cardAttr1 }
                  cardAttr2={ cad.cardAttr2 }
                  cardImage={ cad.cardImage }
                  cardRare={ cad.cardRare }
                  cardTrunfo={ cad.cardTrunfo }
                />
                <button
                  type="button"
                  className="button1"
                  onClick={ () => this.deletCard(cad.cardName) }
                >
                  Excluir Card
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
