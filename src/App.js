import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='page-container'>
        <h3>404 NOT FOUND</h3>
        <div className="page-content">
          <div className="image-container">
            <img src="./Scarecrow.png" alt="Scarecrow" />
          </div>
          <h1 class="page-title">I have bad news for you</h1>
          <p class="page-description">
            The page you are looking for might be removed or is temporarily unavailable
          </p>
          <button>BACK TO HOMEPAGE</button>
        </div>
      </div>
    );
  }
};

export default App;