import React from "react"


class State extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      ...this.props.initial
    }

    this.setState = this.setState.bind(this)
  }
  render(){
    return this.props.children({
      state: this.state,
      setState: this.setState
    })
  }
}


export default State
