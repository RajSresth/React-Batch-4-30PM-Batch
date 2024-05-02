import React, { Component } from 'react'

export default class ClassComponent1 extends Component {
    constructor(){
        super()
        console.log("Inside a Constuctor.....")
        this.state={
           fname:'Chombu'
        }
      }

      static getDerivedStateFromProps(props,state){
        console.log("Inside a  getDerivedStateFromProps.....")        
    
        return null
      }    
      componentDidMount(){
        console.log("Inside componentDidMount Method....")
        // fetch("http://fakestoreapi.com/products")
        // .then(res=>res.json())
        // .then(data=>console.log(data))
      }
      shouldComponentUpdate(currentProps,currentState){
        console.log("Inside shouldComponentUpdate Method")
        console.log("Current Prop",currentProps);
        console.log("Current State",currentState)
        return true
      }

      getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Inside getSnapshotBeforeUpdate... ")
        console.log("Previos Props" ,prevProps)
        console.log("Previos State",prevState)
        return prevState
      }
      
      componentDidUpdate(prevProp,prevState,snapShot){
        console.log("Inside Component Did Update Method....")
        console.log("prevProp",prevProp)
        console.log("prevState",prevState)
        console.log("snapShot",snapShot)
      }
      componentWillUnmount(){
        alert("Inside componentWillUnmount...")
      }
    
      render() {
          console.log("Inside a render Method.....")        
        
        
        return (
          <div>
            <h1>Hello React Developers...!</h1>
            <h2>First Name is: {this.state.fname}</h2>
            
            <button className='bg-purple-400 text-white py-1 px-4 rounded-md mt-2' onClick={()=>this.setState({fname:"Dinga"})}>Change Name</button>
          </div>
        )
      }
}




  


