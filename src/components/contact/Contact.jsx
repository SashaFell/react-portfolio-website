import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlinePhone} from 'react-icons/ai'

import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_svxzmby', 'template_te5o8rm', form.current, 'QibS80Ycy-GbM-6NZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Hier können sie sich bei mir melden</h5>
      <h2>Kontakt</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>sasha.fellmann@bluewin.ch</h5>
            <a href="mailto:sasha.fellmann@bluewin.ch" target="_blank">Nachricht schicken</a>
          </article>
          <article className="contact__option">
            <AiOutlinePhone className='contact__option-icon' />
            <h4>Phone</h4>
            <h5>078 708 16 66</h5>
            <a href="https://api.whatsapp.com/send?phone+41787081666" target="_blank">Nachricht schicken</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Ihr voller Name' required />
          <input type="email" name='email' placeholder='Ihre Email' required />
          <textarea name="message" rows="10" placeholder='Ihre Nachricht' required ></textarea>
          <button type='submit' className='btn btn-primary'>Nachricht schicken</button>
        </form>
      </div>
    </section>
  )
}

export default Contact