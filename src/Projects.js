import React, { Component } from 'react';
import './App.css';

export default class Projects extends Component {
  render() {
    return (
      <div className='projects'>
        <h2 className='projects__title'>Наши лучшие работы</h2>
        <div className='projects__container'>
            <article className='project'>
                <a className='project__img' href='#'></a>
                <h3 className='project__title'>Такой-то сайт</h3>
                <p className='project__info'>Это мы вообще красавчики написали сайтецкий</p>
            </article>
            <article className='project'>
                <a className='project__img' href='#'></a>
                <h3 className='project__title'>Такой-то сайт</h3>
                <p className='project__info'>Это мы вообще красавчики написали сайтецкий</p>
            </article>
            <article className='project'>
                <a className='project__img' href='#'></a>
                <h3 className='project__title'>Такой-то сайт</h3>
                <p className='project__info'>Это мы вообще красавчики написали сайтецкий</p>
            </article>
        </div>
      </div>
    )
  }
}
