import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contact.module.css'
import { Link } from 'react-scroll'
import SectionTitle from '../SectionTitle'


const Contact = () => {

    const socialLink = [
        {
            image: './images/facebook-icon.png',
            imageName: 'facebook'
        },
        {
            image: './images/youtube.png',
            imageName: 'youtube'
        },
        {
            image: './images/twitter.png',
            imageName: 'twitter'
        },
        {
            image: './images/instagram.png',
            imageName: 'instagram'
        }
    ]
    // Email JS Service Code Start 
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_15kwpb9', 'template_b6v9uyf', form.current, {
            publicKey: '-rF0G_EdUiPVX7ysa',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset ();
              alert ('Email Sent !')
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    // Email JS Service Code END
    return (
        <section className={styles.contact} id="contact">
            <SectionTitle
                title="Contact Me"
                discription="Please till out the form below in discuss any work apportunity"
            />
            <form className={styles.contactForm} ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder='Your Name' name="your_name" required />
                <input type="email" placeholder='Your Email' name="your_email" required />
                <textarea name='message' placeholder='Your Message' rows={6}></textarea>
                <button className={styles.contactBtn} type='submit' value='send'>Submit</button>
            </form>
            <div className={styles.socialIcon}>
                <ul className={styles.socialIconList}>
                    {
                        socialLink.map((item, index) => (
                            <li key={index}>
                                <Link href="#" className={styles.socialIconImg}><img src={item.image} alt={item.imageName} /></Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}
export default Contact