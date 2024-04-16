import React from 'react';
// import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import "../Css/ourServices.css";

const OurServices = () => {
    return (
        <div id="services" className='services'>
            <div className='services-heading'>
                <h1>Our Services</h1>
                <p>Explore our wide range of services</p>
            </div>
            <div className="services-container">
                <ServiceCard
                    imageSrc="https://th.bing.com/th/id/OIP.Xhm_cZRQ7-HbBUFOXkpHawHaE7?rs=1&pid=ImgDetMain"
                    title="Finance"
                    description="Efficiency through optimization"
                    link="/service1"
                />
                <ServiceCard
                    imageSrc="https://www.mesarya.university/wp-content/uploads/2020/05/1-5.jpg"
                    title="Delivery"
                    description="Efficiency through optimization"
                    link="/service2"
                />
                <ServiceCard
                    imageSrc="https://th.bing.com/th/id/OIP.zcUHgS8lP0Xmc1gA8jEJcwHaFb?rs=1&pid=ImgDetMain"
                    title="PMO"
                    description="Efficiency through optimization"
                    link="/service3"
                />
                <ServiceCard
                    imageSrc="https://th.bing.com/th/id/OIP.ZTNEhxNIe3iu-EXpHQ1dhwAAAA?rs=1&pid=ImgDetMain"
                    title="EY Documents"
                    description="Efficiency through optimization"
                    link="/service4"
                />
                <ServiceCard
                    imageSrc="https://th.bing.com/th/id/R.0217ad12835b6e91ca1b02804b33c1a4?rik=je9E2shqNBdRGQ&riu=http%3a%2f%2fwww.adlittle.com%2fsites%2fdefault%2ffiles%2fyour-success-busness-analyst.jpg&ehk=wXghxy3gi9xquWU%2b8AQ3wK9iPkXok3gByj8L8nMOi4s%3d&risl=&pid=ImgRaw&r=0"
                    title="OperationsReview"
                    description="Efficiency through optimization"
                    link="/service5"
                />
                <ServiceCard
                    imageSrc="https://assets.entrepreneur.com/content/3x2/2000/20150526212415-shutterstock-178724273.jpeg"
                    title="Meta Dashboard"
                    description="Efficiency through optimization"
                    link="/service6"
                />
            </div>
        </div>
    );
}

const ServiceCard = ({ imageSrc, title, description, link }) => {
    return (
        <div>
            <div className="service-card">
                <div className="service-image">
                    <img src={imageSrc} alt={title} />
                </div>
                <div className="service-details">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <a href={link}>READ MORE > </a>
                </div>
            </div>
           
        </div>
    );
   
}


export default OurServices;
