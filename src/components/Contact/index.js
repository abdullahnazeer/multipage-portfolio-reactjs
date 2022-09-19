import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

import ProfileImage from '../../assets/images/profilepicture.png'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 3000)
  // }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['G', 'e', 't', ' ', 'i', 'n', ' ', 't', 'o', 'u', 'c', 'h', '.']}
              idx={15}
            />
          </h1>
          <p>
            Feel free to reach out to me regarding any freelance work - web development &
            design, logo creation, poster & banner design, video editing, photo editing -
            I do everything!
          </p>
          <section class="section-contact">
            <div class="contact-card">
              <div class="card-image">
                <img src={ProfileImage} alt="Put image here" />
                {/* <h2>Abdullah Nazeer</h2>
                <h4>abdullahnazeer22@gmail.com</h4>
                <h4>+44 744 846 2726</h4> */}
              </div>
              <div class="card-text">
                <h3>Abdullah Nazeer</h3>
                <h3>Freelancer</h3>
                <h4><a href="mailto:abdullahnazeer22@gmail.com">abdullahnazeer22@gmail.com</a></h4>
                <h4><a href="tel:+447448462726">+44 744 846 2726</a></h4>
              </div>
            </div>
          </section>
        </div>
        <div class="stars">
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
