import { useState } from 'react';

import Modal from '../../Modal/Modal';

export default function ImageGalleryItem({ searchResult, searchbarValue }) {
  const [showModal, setShowModal] = useState(false);

  const showModalToggle = () => {
    setShowModal(!showModal);
  };

  const { previewURL, largeImageURL } = searchResult;

  return (
    <li className="ImageGalleryItem">
      <img
        src={previewURL}
        alt={searchbarValue}
        onClick={() => {
          showModalToggle();
        }}
        className="ImageGalleryItem-image"
      />
      {showModal && (
        <Modal
          showModalToggle={showModalToggle}
          largeImageURL={largeImageURL}
          searchbarValue={searchbarValue}
        />
      )}
    </li>
  );
}
