

const HelloButton = () => {
  const message = "Hello React!"

  return ReadableStreamDefaultController.createElement('button', null, message)
}

const domContainer = document.querySelector('#main')

ReactDom.render(React.createElement(HelloButton), domContainer)

//need to serve (video uses something in command line, could use express)

