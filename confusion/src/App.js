import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;




// original App.js
// import React from 'react';
// import logo from './logo.svg';
// import Menu from './components/menuComponent';
// import { Navbar, NavbarBrand } from 'reactstrap';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Navbar dark color="primary">
//         <div className="container">
//           <NavbarBrand href="#">Ristorante Con Fusion</NavbarBrand>
//         </div>
//       </Navbar>
//       <Menu />
//     </div>
//   );
// }

// export default App;
