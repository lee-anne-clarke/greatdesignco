import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { v4 as uuidv4 } from 'uuid';
import ContactModalContent from './ContactModalContent'


export default function ContactModal() {
  
  const [showModal, setShowModal] = useState(false);

  const handleOpenPortal = () => {
    setShowModal(true);
    document.body.classList.add('u-no-overflow')
    document.body.classList.remove('body-fadein')
  }
  
  const handleClosePortal = () => {
    setShowModal(false);
    document.body.classList.remove('u-no-overflow')
    document.body.classList.add('body-fadein')
  }

  return (
    <>
      <div className="nav-li nav-li--primary" key={uuidv4()}>
          <button className="btn btn--nav btn--nav-primary" onClick={handleOpenPortal}>
            Contact Us
          </button>
        </div>

      {showModal && createPortal(
        <ContactModalContent onClose={handleClosePortal} />,
        document.body
      )}
    </>

  );
}

