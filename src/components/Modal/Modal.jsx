import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');
console.log(modalRoot);

export default function Modal({
  showModalToggle,
  largeImageURL,
  searchbarValue,
}) {
  const hanleKeyDown = event => {
    if (event.code === 'Escape') {
      showModalToggle();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', hanleKeyDown);
    return () => {
      document.removeEventListener('keydown', hanleKeyDown);
    };
    //eslint-disable-next-line
  }, []);

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
