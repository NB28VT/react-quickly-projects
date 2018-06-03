class Logger extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
  }

  componentWillMount() {
    console.log("Component will mount is triggered");
  }

  componentDidMount(e) {
    console.log("Component did mount is triggered");
    console.log("DOM Node:", ReactDOM.findDOMNode(this));
  }

  componentWillReceiveProps(newProps) {
    console.log("componentWillReceiveProps triggered!");
    console.log("New props:", newProps);
  }

  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate is triggered!");
    console.log("new props:", newProps);
    console.log("new state:", newState);
  }

  componentWillUpdate(newProps, newState) {
    console.log("componentWillUpdate is triggered!");
    console.log("new props:", newProps);
    console.log("new state:", newState);
  }

  componentDidUpdate(oldProps, oldState) {
    console.log("componentDidUpdate is triggered!");
    console.log("new props:", oldProps);
    console.log("new state:", oldState);
  }

  componentWillUnmount() {
    console.log("Component unmounted!");
  }

  render() {
    return React.createElement(
      "div",
      null,
      this.props.time
    );
  }
}