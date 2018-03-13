import React, { Component } from 'react';
import classes from './App.css'


class App extends Component {
  state={
    persons:
      [ {name:'Sil', age:'25'},
        {name:'Pat', age:'25'},
        {name:'Rick', age:'23'},
        {name:'Wouter', age:'26'}
      ]
    ,
    value:'hello'
  }

  onChangedHandler = (event)=>{
    this.setState({value:event.target.value})
  }

  ShowpersonsHandler = ()=>{
    let persons = this.state.persons
    persons.map(result=>console.log(result))
  }

  // indexHandler = (result, index)=>{
  //   console.log(result)
  //   const persons = [...this.state.persons]
  //   persons.splice(index,1)
  //   this.setState({persons:persons})
  // }

  // onClick={()=>this.indexHandler(result,index)} 

  nameChangedHandler = (event,index)=>{
    const person = {...this.state.persons[index]};
    person.name=event.target.value;
    console.log(this.state.persons)
    const persons = [...this.state.persons];
    persons[index] = person;
    console.log(index)
    
    this.setState({persons:persons})
  }


  render () {
    return (
      <div className={classes.ContainerDiv}>
        <p className={classes.PTAG}> {this.state.value} </p>
        <div>{this.state.persons.map((result, index)=>{
          return(
            <div key={result.name}>
              <div 
                className={classes.PTAG}>
                  {result.name} 
                  {result.age}
              </div>
              <input 
                value={result.name} 
                onChange={(event)=>this.nameChangedHandler(event,index)}/>
            </div>
          )
        })}</div>
        <input onChange={this.onChangedHandler} type="text" />
        <button onClick={this.ShowpersonsHandler}>click me</button>
      </div>
    );
  }
}

export default App;
