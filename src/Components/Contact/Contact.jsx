import React from 'react';
import './Contact.css';
import mail_icon from '../../assets/email.png';
import location_icon from '../../assets/location-1.png';
import phone_icon from '../../assets/phone.png';


const Contact = () => {

const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c9767744-ad88-4012-9ada-daaab9bb6e04");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
        //   console.log("Success", res);
        alert(res.message);
    }
  };

  return (
      <div id='contact' className='contact'>
          <div className='contact-title'>
              <h2>Contact me</h2>
</div>
          <div className="contact-sect">
              <div className='contact-left'>
                  <h2>Let's Talk</h2>
                  <p>you can contact me through my socials</p>
                  <div className='contact-details'>
                      <div className="contact-detail-1">
                          <img id='Cont-detail-icon' src={mail_icon} alt="" />
                          <p>manav1304@gmail.com</p>
                      </div>
                      <div className="contact-detail-1">
                          <img id='Cont-detail-icon' src={phone_icon} alt="" />
                          <p>+91 929383929</p>
                      </div>
                      <div className="contact-detail-1">
                          <img id='Cont-detail-icon' src={location_icon} alt="" />
                          <p>Mumbai</p>
                      </div>
                  </div>
              </div>
              <form onSubmit={onSubmit}  className="contact-right">
                  <label htmlFor="">Your name:</label>
                      <input type="text" placeholder='enter your name:' name='name' required/>
                      <label htmlFor="">your email</label>
                  <input type="text" placeholder='Email' name='email' required />
                  <label htmlFor="">Write your message</label>
                  <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
                  <button className='contact-submit' type='submit'>Submit Now</button>
                  
              </form>
      </div>
          
    </div>
  )
}

export default Contact
