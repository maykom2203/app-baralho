import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          nome da carta:
          <input type="text" data-testid="name-input" name="name" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input type="textarea" data-testid="description-input" name="descricao" />
        </label>
        <label htmlFor="attr1">
          Attr1:
          <input type="number" data-testid="attr1-input" name="attr1" />
        </label>
        <label htmlFor="attr2">
          Attr2:
          <input type="number" data-testid="attr2-input" name="attr2" />
        </label>
        <label htmlFor="attr3">
          Attr3:
          <input type="number" data-testid="attr3-input" name="attr3" />
        </label>
        <label htmlFor="image">
          Imagem:
          <input type="text" data-testid="image-input" name="image" />
        </label>
        <label htmlFor="Raridade">
          Raridade:
          <select data-testid="rare-input" name="Raridade">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
          <label htmlFor="Super-Trunfo">
            Super Trunfo:
            <input type="checkbox" data-testid="trunfo-input" name="Super-Trunfo" />
          </label>
          <button type="submit" data-testid="save-button">Salvar</button>

        </label>
      </form>

    );
  }
}
export default Form;
