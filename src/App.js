import React from 'react'

import Header from '../src/components/header/Header'
import LeftSide from '../src/components/l-sideBlock/LeftSide'
import Logo from '../src/components/logo/Logo'
import RightSide from '../src/components/r-sideBlock/RightSide'
import UserPage from '../src/components/pages/user/UserPage'
import Footer from '../src/components/footer/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <UserPage />
    </div>
  );
}

export default App;
