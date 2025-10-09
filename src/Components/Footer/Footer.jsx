import React from 'react'
import './Footer.css';


const Footer = () => {

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
    <div id='footer' className='Footer'>
          <div className="footer-top">
              <div className="footer-top-left">
                  <img src="" alt="" />
                  <p>I am a Software Engineer from mumbai</p>
              </div>
                <form onSubmit={onSubmit} className='footer-top-right'>
                    
                  
                    <div className="footer-subs-input">
                        <input  type="email" placeholder='Enter your Email' name='email' required />
                  </div>
                    {/* <div className='footer-subs'>Subscribe</div> */}
                    <button className='footer-subs' type='submit'>Subscribe</button>
</form>
          </div> <hr />
          <div className='footer-bottom'>
              <p>© 2025 Manav Jadhav. All Rights reserved.</p>
              {/* <div className='footer-bottom-right'>
                  <p></p>
                  <p></p>
                  <p></p>
              </div> */}
          </div>
    </div>
  )
}

export default Footer;
