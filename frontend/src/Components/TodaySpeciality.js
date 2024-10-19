// import React, { useState } from 'react';
// import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
// import './TodaySpeciality.css';

// function TodaySpeciality({ specials }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex(currentIndex === 0 ? specials.length - 1 : currentIndex - 1);
//   };

//   const handleNext = () => {
//     setCurrentIndex(currentIndex === specials.length - 1 ? 0 : currentIndex + 1);
//   };

//   const { title, price, description, imgUrl } = specials[currentIndex];

//   return (
//     <div className="special-card">
//       <div className="special-text">
//         <h1>Today's special!</h1>
//         <p>{description}</p>
//       </div>
//       <div className="special-image">
//         <div className="arrow-container">
//           <AiOutlineLeft className="icon-arrow prev" onClick={handlePrev} />
//           <img src={imgUrl} alt={title} />
//           <AiOutlineRight className="icon-arrow next" onClick={handleNext} />
//         </div>
//         <div className="image-caption">
//           <p>{title}</p>
//           <p>₹ {price}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TodaySpeciality;

import React, { useState, useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import './TodaySpeciality.css';

function TodaySpeciality({ specials }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? specials.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === specials.length - 1 ? 0 : currentIndex + 1);
  };

  const { title, price, imgUrl } = specials[currentIndex];

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);

    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  return (
    <div className="special-card">
      {isMobile && <div className="extra-text">Today's Speciality</div>}
      {!isMobile && (
        <div className="special-text">
          <h1>Today's special!</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, aliquam autem. Aspernatur laborum vero mollitia rem maiores, et animi autem hic facilis voluptates accusantium ab totam repellat praesentium alias blanditiis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, aliquam autem. Aspernatur laborum vero mollitia rem maiores, et animi autem hic facilis voluptates accusantium ab totam repellat praesentium alias blanditiis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, aliquam autem. Aspernatur laborum vero mollitia rem maiores, et animi autem hic facilis voluptates accusantium ab totam repellat praesentium alias blanditiis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, aliquam autem.</p>
        </div>
      )}
      <div className="special-image">
        <div className="arrow-container">
          <AiOutlineLeft className="icon-arrow prev" onClick={handlePrev} />
          <img src={imgUrl} alt={title} />
          <AiOutlineRight className="icon-arrow next" onClick={handleNext} />
        </div>
        <div className="image-caption">
          <p>{title}</p>
          <p>₹ {price}</p>
        </div>
      </div>
    </div>
  );
}

export default TodaySpeciality;

