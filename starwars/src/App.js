import React from 'react';
import './App.css';

// import some reactstrap components for styling


// import custom components
import CardList from './components/CardList'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <header>
        <h1 className="Header">React Wars</h1>
        This is the Header. Logo, Menu, etc.
      </header>
      <CardList />
      <footer>
        This is the footer. Copyright XYZ.
      </footer>
    </div>
  );
}

export default App;
