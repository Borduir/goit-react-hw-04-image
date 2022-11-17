import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';

export default function ImageGallery({
  searchbarValue,
  searchResults,
  status,
}) {
  const renderFetchedImages = (searchResults, searchbarValue) => {
    return searchResults.map(searchResult => (
      <ImageGalleryItem
        key={searchResult.id}
        searchResult={searchResult}
        searchbarValue={searchbarValue}
      />
    ));
  };
  return (
    <div>
      <ul className="ImageGallery">
        {renderFetchedImages(searchResults, searchbarValue)}
      </ul>
      {status === 'loading' && Loader()}
    </div>
  );
}
