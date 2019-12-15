import React, { Component } from 'react';

import './App.css';

function ShowBanner(props){
  if(props.time > 45) {
    return (
      <div className="rest_block">ОТдых</div>
    )
  }else{
    return(
      <div className="work_block">Время работать над собой</div>
    )
  } 
}


class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()}
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    )
  }
  componentWillUnmount() {
    clearInterval(this.timerId)
  }
  //метод setState вызовит обновленный рендер 
  //соответственно изменится значение объекта state
  tick() {
    this.setState({
      date: new Date()
    })
  }
  render() {
    return (
      <div>
        <ShowBanner time={this.state.date.getSeconds()}/>
        <h1> Текущее время {this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

export default Clock;
