import React from 'react'
import profilePic from '../images/profilepicture.jpg'

export default function Intro() {
  return (
    <section className='intro' id='home'>
        <h1 class="section__title section__title--intro">
            Hi, I am <strong>Prashanth</strong>
        </h1>
        <p className='section__subtitle section__subtitle--intro'>
            front-end dev
        </p>
        <img src={profilePic} className='profile__pic' alt='Prashanth'/>
    </section>
  )
}
