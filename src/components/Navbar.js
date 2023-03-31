import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo  from '../assets/images/logo.png';

export class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {this.setState({clicked: !this.state.clicked})};
  
  render() {
    return (
      <nav>
        <div className='flex'>
        <a href='canvaLogo' to='/'>
          <img id='logo' src={ logo } alt='expense control logo' />
        </a>
        <h1 className='text-2xl pt-1'>Expense Control</h1>
        </div>
        
        {/* Menu */}
        <div>
          <ul id='navbar' className={this.state.clicked ? '#navbar active' : 'navbar'}>
            <Link href='home' to='/' className='navLink'>Home</Link>
            <Link href='expenseChart' to='#expenseChart' className='navLink'>Expense Chart</Link>
            <Link href='currency' to='#currency' className='navLink'>Currency</Link>
            <Link href='contact' to='/contact' className='navLink'>Contact us</Link>
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