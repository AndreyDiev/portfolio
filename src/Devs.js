import React, { Component } from 'react';
import './App.css';
import dev from './images/dev.jpg';
import dev2 from './images/dev2.jpg';

export default class Devs extends Component {
  render() {
    return (
      <div className='devs'>
        <h1 className='devs__title'>SteveSoftware</h1>
        <div className='devs__list'>
            <article className='developer'>
                <img className='developer__img' src={dev} alt="developer" />
                <h2 className='developer__title'>Первый</h2>
                <p className='developer__info'>тра тра тра татата лорем ипсум етолосором</p>
            </article>
            <article className='developer'>
                <img className='developer__img' src={dev2} alt="developer" />
                <h2 className='developer__title'>Второй</h2>
                <p className='developer__info'>тра тра тра татата лорем ипсум етолосором</p>
            </article>
            <article className='developer'>
                <img className='developer__img' src={dev} alt="developer" />
                <h2 className='developer__title'>Третий</h2>
                <p className='developer__info'>тра тра тра татата лорем ипсум етолосором</p>
            </article>
        </div>
      </div>
    )
  }
}
