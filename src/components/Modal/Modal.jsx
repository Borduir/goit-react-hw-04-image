import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({
  showModalToggle,
  largeImageURL,
  searchbarValue,
}) {
  useEffect(() => {
    window.addEventListener('keydown', hanleKeyDown);
    return () => {
      window.removeEventListener('keydown', hanleKeyDown);
    };
  }, []);

  const hanleKeyDown = event => {
    if (event.code === 'Escape') {
      showModalToggle();
    }
  };

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      showModalToggle();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal">
        <img src={largeImageURL} alt={searchbarValue} />
      </div>
    </div>,
    modalRoot
  );
}
