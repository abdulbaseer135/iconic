// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Service.css'; // Ensure you have styles for this component

// const Service = ({ id, image }) => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate(`/services/${id}`); // Navigate to the detail page
//   };

//   return (
//     <div className="service-box" onClick={handleClick}>
//       <img src={image} alt={id} className="service-image" />
//       <h3 className="service-name">{id.replace('-', ' ').toUpperCase()}</h3>
//     </div>
//   );
// };

// export default Service;



// import React from 'react';
// import './Service.css'; // Ensure you have a CSS file for individual service styles

// const Service = ({ id, image, name, className }) => {
//   return (
//     <div className={className}>
//       <img src={image} alt={name} className="service-image" />
//       <h2 className="service-name">{name}</h2>
//       {/* Optionally, you can add a description or other elements here */}
//     </div>
//   );
// };

// export default Service;




import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ id, image, name, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const serviceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (serviceRef.current) {
      observer.observe(serviceRef.current);
    }

    return () => {
      if (serviceRef.current) {
        observer.unobserve(serviceRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    navigate(`/services/${id}`);
  };

  return (
    <div
      ref={serviceRef}
      className={`${className} ${isVisible ? 'animate__animated animate__slideInUp' : ''} ${hovered ? 'animate__animated animate__pulse' : ''}`}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={image} alt={name} className="service-image" />
      <h2 className="service-name">{name}</h2>
    </div>
  );
};

export default Service;
