// import React from 'react';
// import { useParams } from 'react-router-dom';
// import './ServiceDetail.css'; // Ensure you have styles for this component
// import image from '../../Images/product_28.png'

// const ServiceDetail = () => {
//   const { serviceId } = useParams(); // Get the serviceId from the URL

//   // Assuming you have a static list of services defined in this component
//   const services = [
//     {
//       id: 'web-development',
//       name: 'Web Development',
//       image: image,
//       description: 'Building responsive and robust websites tailored to your needs.',
//       experience: '5+ Years',
//       projects: '120+ Projects',
//     },
//     {
//       id: 'mobile-development',
//       name: 'Mobile Development',
//       image: image,
//       description: 'Creating user-friendly mobile applications for iOS and Android.',
//       experience: '4+ Years',
//       projects: '80+ Projects',
//     },
//     {
//       id: 'ui-ux-design',
//       name: 'UI/UX Design',
//       image: image,
//       description: 'Designing intuitive interfaces and engaging user experiences.',
//       experience: '6+ Years',
//       projects: '150+ Projects',
//     },
//     {
//       id: 'digital-marketing',
//       name: 'Digital Marketing',
//       image: image,
//       description: 'Enhancing your online presence through strategic marketing.',
//       experience: '3+ Years',
//       projects: '90+ Projects',
//     },
//   ];

//   // Find the service that matches the ID in the URL
//   const service = services.find((s) => s.id === serviceId);

//   if (!service) {
//     return <h2>Service not found</h2>; // Handle case when service is not found
//   }

//   return (
//     <div className="service-detail">
//       <div className="service-left">
//         <div className="service-image-container">
//           <img src={service.image} alt={service.name} className="service-image" />
//         </div>
//         <div className="service-info">
//           <p className="service-experience">Experience: {service.experience}</p>
//           <p className="service-projects">Projects Completed: {service.projects}</p>
//         </div>
//       </div>
//       <div className="service-right">
//         <h1>{service.name}</h1>
//         <p>{service.description}</p>
//         <button className="learn-more-button">Learn More</button>
//       </div>
//     </div>
//   );
// };

// export default ServiceDetail;



import React from 'react';
import { useParams } from 'react-router-dom';
import 'animate.css';
import './ServiceDetail.css';
import image from '../../Images/product_28.png'; // Example image path

const ServiceDetail = () => {
  const { serviceId } = useParams(); // Get the serviceId from the URL

  const services = [
    {
      id: 'web-development',
      name: 'Web Development',
      image: image,
      description: 'Building responsive and robust websites tailored to your needs. Building responsive and robust websites tailored to your needs.',
      experience: '5+ Years',
      projects: '120+ Projects',
    },
    {
      id: 'mobile-development',
      name: 'Mobile Development',
      image: image,
      description: 'Creating user-friendly mobile applications for iOS and Android.Building responsive and robust websites tailored to your needs.',
      experience: '4+ Years',
      projects: '80+ Projects',
    },
    {
      id: 'ui-ux-design',
      name: 'UI/UX Design',
      image: image,
      description: 'Designing intuitive interfaces and engaging user experiences.Building responsive and robust websites tailored to your needs.',
      experience: '6+ Years',
      projects: '150+ Projects',
    },
    {
      id: 'digital-marketing',
      name: 'Digital Marketing',
      image: image,
      description: 'Enhancing your online presence through strategic marketing.',
      experience: '3+ Years',
      projects: '90+ Projects',
    },
  ];

  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return <h2>Service not found</h2>;
  }

  return (
    <div className="service-detail">
      {/* Left Section */}
      <div className="service-detail-left">
        {/* Upper part: Image and Course Name */}
        <div className="upper-left   animate__animated animate__bounceInLeft">
          <div className="service-image-container">
            <img src={service.image} alt={service.name} className="service-image" />
          </div>
          <div className="service-name-container">
            <h1 className="service-detail-name">{service.name}</h1>
            <a href="#" className="view-details">View Details</a>
          </div>
        </div>

        {/* Lower part: Experience and Completed Projects */}
        <div className="lower-left animate__animated animate__bounceInUp">
          <div className="box experience-box">
            <span className="box-icon">🏆</span>
            <p>{service.experience}</p>
            <span>Years Experience</span>
          </div>
          <div className="box projects-box">
            <span className="box-icon">📊</span>
            <p>{service.projects}</p>
            <span>Completed Projects</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="service-detail-right  animate__animated animate__jackInTheBox">
        <h2>Most Outstanding Project</h2>
        <p className="service-detail-description">{service.description}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit ultrices luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className="learn-more-button">Learn More</button>
      </div>
    </div>
  );
};

export default ServiceDetail;
