import React, { Component } from 'react'
import "./App.css"

export default class App extends Component {
  constructor(){
    super()
    this.state={
        userName:'Ram',
        age:23,
        city:'xyz'
    }
  }
  render() {
    return (
      <div>
        <h1>Hello React Developers...!</h1>
        <h2>User Name is: {this.state.userName}</h2>
        <h2>Age is: {this.state.age}</h2>
        <h2>City is: {this.state.city}</h2>
        <button className='bg-purple-400 text-white py-1 px-4 rounded-md mt-2' onClick={()=>this.setState({age:24,city:"Delhi"})}>Change City</button>
      </div>
    )
  }
}
