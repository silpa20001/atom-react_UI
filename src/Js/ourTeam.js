import React from 'react';
import "../Css/ourTeam.css";

const OurTeam = () => {
  return (
    <div id="team" className='team'>
      <div  className='team-heading'>
        <h1>Our Team</h1>
        <p>Here is our team who is responsible for this wonderful product</p>
      </div>
      <div className="team-container">
      <div container className="team-card">
         <div className="team-image">
          <img src="https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA?rs=1&pid=ImgDetMain" alt="Image 1" className="team-image" />
         </div>
          <div className="team-text">
            <h2>Sivaraman</h2>
            <p>Assistant Vice President</p>
          </div>
       </div>
      <div className="team-card">
          <div className="team-image">
           <img src="https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA?rs=1&pid=ImgDetMain" alt="Image 2" className="team-image" />
          </div> 
          <div className="team-text">
            <h2>Vijayan</h2>
            <p>Manager</p>
          </div>
  
      </div>
      <div className="team-card">
        <div className="team-image">
          <img src="https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA?rs=1&pid=ImgDetMain" alt="Image 3" className="team-image" />
          </div>
          <div className="team-text">
            <h2>Pavani</h2>
            <p>Associate Engineer</p>
          </div>
    
      </div>
      <div className="team-card">
        <div className="team-image">
          <img src="https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA?rs=1&pid=ImgDetMain" alt="Image 4" className="team-image" />
        </div>
        <div className="team-text">
            <h2>Silpa</h2>
            <p>Associate Engineer</p>
        </div>
       
      </div>
      </div>
      <div>
        <p>
        <div className="p-text">
                <p>You can also send us an email and we’ll get in touch shortly, 
                  or Call us info@support.com (or) +1 234 6780 900
                </p>

            </div>
        </p>
      </div>
    </div>
  );
}

export default OurTeam;
