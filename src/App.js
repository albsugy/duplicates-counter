import React, { Component } from 'react';

// Styles
import { Container } from './styles/components'

// Page Components
import Title from './components/Title'
import Form from './components/Form'
import Code from './components/Code'
import Message from './components/Message'
import Count from './components/Count'
import Characters from './components/Characters'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      errMsg: '',
      characterCount: 0,
      characters: null
    }
  }
  countDuplicates = (text) => {
    let duplicatedCharacters  = [];
    const alphanumericRegex = RegExp(/^[a-z0-9]+$/i);
    
    if (alphanumericRegex.test(text)) {
      text.toLowerCase().split('').forEach( (char, index, charsArray) => {
        if (duplicatedCharacters.indexOf(char) < 0 && index !== charsArray.lastIndexOf(char) ) duplicatedCharacters.push(char)
      })
      this.setState({
        characterCount: duplicatedCharacters.length,
        characters: duplicatedCharacters
      })
      this.handleChangeErrMsg('')
    } else {
      this.setState({
        characterCount: 0,
        characters: null
      })
      this.setState({errMsg:'Please Enter valid alphanumeric characters.'})
    }
    
  }
  handleChangeErrMsg = (errMsg) => {
    this.setState({errMsg})
  }
  handleValueChange = (e) => {
    this.setState({text: e.target.value})
  }
  handleFormSubmit = (e) => {
    e.preventDefault()
    const { text } = this.state
    if (text === '') {
      this.handleChangeErrMsg('Enter some characters to check.')
    } else {
      this.countDuplicates(this.state.text)
    }
  }
  render() {
    const { text, characterCount, characters, errMsg } = this.state
    return (
        <Container>
          <Title />

          <Form
            text={text}
            onChange={this.handleValueChange}
            onSubmit={this.handleFormSubmit}
          />

          <Message msg={errMsg} />

          <Count count={characterCount} />

          <Characters characters={characters} />

          <Code />
        </Container>
    );
  }
}

export default App;
