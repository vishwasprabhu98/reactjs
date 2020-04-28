import React, { Component } from 'react';
import logo from './logo.svg';
import Menu from './components/menuComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import { DISHES } from './shared/dishes.js'

class App extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      dishes : DISHES
    };

  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="#">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes = {this.state.dishes}/>
      </div>
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
