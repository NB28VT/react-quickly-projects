// null is where attrs and properties go
class HelloWorld extends React.Component {
  render() {
    return React.createElement(
      "h1",
      null,
      "Hello " + this.props.frameWorkName + " world!"
    )
  }
}

ReactDOM.render(
  React.createElement(
    "div",
    null,
    React.createElement(HelloWorld, {frameWorkName: "Ember"}),
    React.createElement(HelloWorld, {frameWorkName: "Angular"}),
    React.createElement(HelloWorld, {frameWorkName: "Backbone"})
  ),



  // Second arg to render is the DOM element to mount the React element to
  document.getElementById("content")
)
