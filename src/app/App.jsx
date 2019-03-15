import React from 'react';

import Header from './components/header/header.jsx';
import Listing from './containers/listingContainer.js';
import styles from './styles.module.scss';

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Listing />
    </div>
  );
}

export default App;
