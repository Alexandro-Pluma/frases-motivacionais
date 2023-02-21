import React from 'react'

const frases = [
  "Nem todas as tempestades vêm para atrapalhar a sua vida. Algumas vêm para limpar seu caminho.",
  "A persistência realiza o impossível.",
  "Seus sonhos não precisam de plateia, eles só precisam de você.",
  "Motivação é a arte de fazer as pessoas fazerem o que você quer que elas façam porque elas o querem fazer.",
  "No meio da dificuldade encontra-se a oportunidade.",
  "Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.",
  "Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação.",
  "A verdadeira motivação vem de realização, desenvolvimento pessoal, satisfação no trabalho e reconhecimento.",
  "Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.",
  "O que me preocupa não é o grito dos maus. É o silêncio dos bons.",
  "Imagine uma nova história para sua vida e acredite nela."
]

class App extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      frase: 0,
    }

  }
  render () {
    return (
      <>
        <div>
          {frases[this.state.frase]}
        </div>
        <button onClick={() => this.setState({frase: Math.floor(Math.random() * frases.length)})}>
          Atualizar mensagem
        </button>
      </>
    )
  }

}

export default App
