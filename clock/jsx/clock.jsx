class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.launchClock();
    this.state = {
      currentTime: (new Date()).toLocaleString()
    }
  }

  launchClock() {
    setInterval(() => {
      console.log("Updating clock");
      this.setState({currentTime: (new Date()).toLocaleString()})
    }, 1000)
  }


  render() {
    return <div>{this.state.currentTime}</div>
  }
}

ReactDOM.render(<Clock/>, document.getElementById('content'));
