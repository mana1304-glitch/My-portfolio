import React from 'react';
import './Contributions.css';
// import img_contribution_theme from '../../assets/about-logo.jpg';
import mycontri_data from '../../assets/my_Contribution_imgs';
import arrow_icon from '../../assets/right_arrow.png'


const Contribution = () => {
  return (
    <div id='contribution' className='Contribution'>
          <div className="mycontribution-title-1">
              <h2>My Contributions</h2>
              {/* <img src={img_contribution_theme} alt="" /> */}
          </div>
          
          <div className="my-Contribution-cont">
        {mycontri_data.map((contri, index) => {
                return <img id='contr-img-1' key={index} src={contri.c_img} alt=""  />
              })}
      </div>
      
      {/* <div className="mycontri-showmore">
        <p>Show More</p>
        <img id='arrow-icon-1' src={arrow_icon} alt="" />
      </div> */}

    </div>
  )
}

export default Contribution;
