import React, { Component } from 'react'
import './App.css';

export default class Question extends Component {
  render() {
    return (
      <div className='question'>
        <h2 className='question__title'>Почему именно мы?</h2>
        <ul className='question__list'>
            <li className='question__li'>первое</li>
            <li className='question__li'>второе</li>
            <li className='question__li'>третье</li>
        </ul>
      </div>
    )
  }
}
