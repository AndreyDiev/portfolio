import React, { Component } from 'react';
import './App.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <a className='header__logo footer__logo' href='#'></a>
        <div className='footer__menu'>
            <a className='footer__link'>О нас</a>
            <a className='footer__link'>Наши проекты</a>
            <a className='footer__link'>Отзывы</a>
        </div>
        <div className='footer__empty-el'></div>
      </footer>
    )
  }
}
