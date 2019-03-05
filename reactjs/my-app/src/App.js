import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function ShowBanner(props){
  if(props.time > 45){
    return(
      <div className="rest_block">Отдых</div>
    )
  }else{
    return(
    <div className="work_block">Время работать над собой!</div>
    )
  }
}

class Clock extends React.Component { //новый экземпляр clock
  constructor(props){
    super(props);
    this.state = {date: new Date()} //инициализация даты
  }
  componentDidMount(){ //когда таймер появился на странице вызывыется метод  и наш таймер вызывает мтод tick кажду секунду
    this.timerid = setInterval(
      ()=> this.tick(),1000)
  }
  componentWillUnmount(){ //если наш таймер изчезнет со страницы то вызовется этот метод, который очистит интервал
    clearInterval(this.timerid)
  }
  tick(){  //полежение с датой обновляется
    this.setState({ //если положение изменилось он вызовет метот рендер для обновления элемента
      date: new Date()
    })
  }
  render(){  //происходит метод рендер и таймер пояявляется на странице
    return(
      
      <div>
        <ShowBanner time={this.state.date.getSeconds()}/>
        <h1>Текущее время {this.state.date.toLocaleTimeString()}</h1>
        </div>
    )
  }
}

export default Clock;
