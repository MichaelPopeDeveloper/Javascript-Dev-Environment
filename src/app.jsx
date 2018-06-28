import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';


function App({ message }) {
  return (
    <div>
      <h1>
        {message}
      </h1>
    </div>
  );
}

App.propTypes = {
  message: PropTypes.string.isRequired,
};

export default App;
