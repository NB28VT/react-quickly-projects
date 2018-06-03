// Can't use let inside
let clockStyle = {
  fontSize: '50px',
  color: 'red',
  textAlign: 'center',
  backgroundColor: 'black',
}

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.launchClock();
    this.state = {
      counter: 0,
      currentTime: (new Date()).toLocaleString()
    }
  }

  componentWillMount() {
    console.log("Uhhh yeah mounting");
  }

  componentDidMount() {
    console.log("uhhh yeah we mounted")
  }


  launchClock() {
    setInterval(() => {
      this.setState({
        currentTime: (new Date()).toLocaleString(),
        counter: ++this.state.counter

      })
    }, 1000)
  }

  render() {
    if (this.state.counter > 2) return <div></div>

    return <Logger time={this.state.currentTime} />
  }
}
