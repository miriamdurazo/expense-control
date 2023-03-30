import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo  from '../assets/images/logo.png';

export class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {this.setState({clicked: !this.state.clicked})};
  
  render() {
    return (
      <nav>
        <a href='canvaLogo' to='/'>
          <img id='logo' src={ logo } alt='expense control logo' />
        </a>
        
        {/* Menu */}
        <div>
          <ul id='navbar' className={this.state.clicked ? '#navbar active' : 'navbar'}>
            <NavLink href='home' to='/' className='navLink'>Home</NavLink>
            <NavLink href='expenseChart' to='#expenseChart' className='navLink'>Expense Chart</NavLink>
            <NavLink href='currency' to='#currecy' className='navLink'>Currency</NavLink>
            <NavLink href='contact' to='/contact' className='navLink'>Contact us</NavLink>
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