import { Fragment, useState, useEffect } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

export function App() {
  const [searchbarValue, setSearchbarValue] = useState('');
  const [page, setPage] = useState(1);
  const [buttonNeedRender, setButtonNeedRender] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (searchbarValue !== '') {
      setStatus('loading');
      fetch(
        `https://pixabay.com/api/?q=${searchbarValue}&page=${page}&key=30336513-f1d3dcf5d3b6560ebccde30e0&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(response => {
          if (response.hits.length) {
            setSearchResults([...searchResults, ...response.hits]);
            setButtonNeedRender(true);
          } else {
            setButtonNeedRender(false);
            alert('no hits found');
          }
        })
        .finally(setStatus('completed'));
    }
  }, [searchbarValue, page]);

  const onSubmit = searchbarValue => {
    setSearchbarValue(searchbarValue);
    setSearchResults([]);
    setPage(1);
  };
  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <Fragment>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery
        searchbarValue={searchbarValue}
        searchResults={searchResults}
        status={status}
      />
      {buttonNeedRender && <Button loadMore={loadMore} />}
    </Fragment>
  );
}
