// import React from 'react';
// import './Services.css';
// import image from '../Images/product_28.png';

// const Services = () => {
//   const services = [
//     { name: 'Web Development', image: image },
//     { name: 'Graphic Designing', image: image },
//     { name: 'Logo Design', image: image },
//     { name: 'Blog Writing', image: image },
//   ];
//  console.log(image);
//   return (
//     <div className="services-container">
//       <h1 className="services-title">Our Services</h1>
//       <div className="services-row">
//         {services.map((service, index) => (
//           <div className="service-box" key={index}>
//             <img src={service.image} alt={service.name} className="service-image" />
//             <h3 className="service-name">{service.name}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;


// import React from 'react';
// import './Services.css';
// import Service from './Service/Service';
// import image from '../Images/product_28.png';

// const Services = () => {
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

//   return (
//     <div className="services-container">
//       <h1 className="services-title">Our Services</h1>
//       <div className="services-row">
//         {services.map((service, index) => (
//           <Service
//             key={index}
//             id={service.id}
//             image={service.image}
//             description={service.description}
//             experience={service.experience}
//             projects={service.projects}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;



// Services.jsx

import React from 'react';
import './Services.css';
import Service from './Service/Service';
import image from '../Images/product_28.png';

const Services = () => {
  const services = [
    {
      id: 'web-development',
      name: 'Web Development',
      image: image,
      description: 'Building responsive and robust websites tailored to your needs.',
      experience: '5+ Years',
      projects: '120+ Projects',
    },
    {
      id: 'mobile-development',
      name: 'Mobile Development',
      image: image,
      description: 'Creating user-friendly mobile applications for iOS and Android.',
      experience: '4+ Years',
      projects: '80+ Projects',
    },
    {
      id: 'mobile-development',
      name: 'Mobile Development',
      image: image,
      description: 'Creating user-friendly mobile applications for iOS and Android.',
      experience: '4+ Years',
      projects: '80+ Projects',
    },
    {
      id: 'ui-ux-design',
      name: 'UI/UX Design',
      image: image,
      description: 'Designing intuitive interfaces and engaging user experiences.',
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

  return (
    <div className="services-container">
      {/* First row with three boxes */}
      <div className="service-row">
        {services.slice(0, 3).map((service) => (
          <Service
            key={service.id}
            id={service.id}
            image={service.image}
            name={service.name}
            className="service-box" // Assigning the service-box class
          />
        ))}
      </div>

      {/* Second row with two boxes, both full width */}
      <div className="service-row">
        {services.slice(3, 5).map((service) => (
          <Service
            key={service.id}
            id={service.id}
            image={service.image}
            name={service.name}
            className="service-box-full" // Assigning the service-box-full class
          />
        ))}
      </div>
    </div>
  );
};

export default Services;


