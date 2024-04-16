import React from 'react';
import '../Css/CardComponent.css';

const CardComponent = () => {
  return (
    <div className="card-container">
      <div className="card"  style={{backgroundColor:"rgb(245, 246, 248)"}} >
        <div className="icon">⚙️</div>
        <h2>Thought Leadership</h2>
        <div className="scroll">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         
        </div>
      </div>
      <div className="card" style={{height:"305px", backgroundColor:"rgb(243, 240, 240)"}}>
        <div className="icon">⚡</div>
        <h2>Emerging Ideas</h2>
        <div className="scroll">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       
        </div>
      </div>
      <div className="card" style={{backgroundColor:'rgb(238, 236, 236)'}}>
        <div className="icon">🔬</div>
        <h2>Consumer Insights</h2>
        <div className="scroll">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        </div>
      </div>
      <div className="card" style={{backgroundColor:"rgb(250, 249, 249)"}}>
        <div className="icon">🚀</div>
        <h2>Business Goals</h2>
        <div className="scroll">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
