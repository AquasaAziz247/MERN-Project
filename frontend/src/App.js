import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter if using React Router
import Header from './component/Header'; // Import Header component

const App = () => {
  return (
    <Router> {/* Wrap your application with BrowserRouter if using React Router */}
      <div className="app">
        <Header /> {/* Include the Header component */}
        {/* Other components and routes */}
      </div>
    </Router>
  );
};

export default App;
