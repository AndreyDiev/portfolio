import React, { Component } from 'react'
import './App.css';

export default class header extends Component {
  render() {
    return (
      <header className='header'>
        <a className='header__logo' href='#'></a>
        <div className='header__info'>
            <a className='header__link'>О нас</a>
            <a className='header__link'>Наши проекты</a>
            <a className='header__link'>Отзывы</a>
        </div>
      </header>
    )
  }
}
