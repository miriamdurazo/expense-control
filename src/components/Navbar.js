import React, { Component } from 'react';
import logo  from '../assets/images/logo.png';

export class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {this.setState({clicked: !this.state.clicked})};
  
  render() {
    return (
      <nav>
        <a href="canvaLogo" to='#page-top'>
          <img id='logo' src={ logo } alt='expense control logo' />
        </a>
        
        {/* Menu */}
        <div>
          <ul id="navbar" className={this.state.clicked ? '#navbar active' : 'navbar'}>
            <a href="home" to="#page-top" className='navLink'>Home</a>
            <a href="expenseChart" to="#expenseChart" className='navLink'>Expense Chart</a>
            <a href="currency" to="#currecy" className='navLink'>Currency</a>
            <a href="contact" to="#contact" className='navLink'>Contact us</a>
          </ul>
        </div>
        
        {/* Mobile */}
        <div id='mobile' onClick = { this.handleClick }>
          <i id='bars' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>     
      </nav>
    );
  }
}