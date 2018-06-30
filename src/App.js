import React, { Component } from 'react';


import State from "./components/State"

class App extends Component {
  render() {
    return (
      <div className="App">
        <State initial={{loading: false, data: null}}>
          {({ state , setState }) => {
            return <div>{JSON.stringify(state)}
              <div onClick={() => setState({
                loading: true
              })}>Toggle Loading</div>
            </div>
          }}
        </State>


        <State initial={{ count : 0 }}>
          {({ state , setState }) => {
            return <div>{JSON.stringify(state)}
              <div onClick={() => setState({
                count: state.count + 1
              })}>Inc Count</div>
            </div>
          }}
        </State>

      </div>
    );
  }
}

export default App;
