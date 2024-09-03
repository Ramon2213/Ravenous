import React from "react";
import styles from "./App.css";

import BusinessList from "./components/BusinessList/BusinessList";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
    return (
        <div className='header' >
      <h1>Ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
};

export default App;
