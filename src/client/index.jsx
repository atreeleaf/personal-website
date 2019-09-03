import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './Components/Wrapper.jsx'

class App extends Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div>
        <Wrapper/>
      </div>
    )
  }
}


ReactDOM.render(<App/>,document.getElementById('root'))