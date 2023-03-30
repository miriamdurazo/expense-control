import React from 'react';
import { Link } from 'react-router-dom';
import Darwin  from '../assets/images/Darwin_Michell.jpg';
import Giuliana from '../assets/images/Giuliana_Castillo.jpg';
import Miriam from '../assets/images/Miriam_Durazo.jpg';
import Vanessa from '../assets/images/Vanessa_Dantonio.jpg';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-row'>

          <div className='footer-col'>
            <h4 className='social-media'>Contact us<br/>via GitHub</h4>
            <div className='footer-github-links'>
              <a href='https://github.com/aramedis' rel='noreferrer' target='_blank'>
                <img id='darwin' src={ Darwin } alt='expense control logo' />
              </a>
              <a href='https://github.com/GiulianaBCastillo' rel='noreferrer' target='_blank'>
                <img id='giuliana' src={ Giuliana } alt='expense control logo' />
              </a>
              <a href='https://github.com/miriamdurazo' rel='noreferrer' target='_blank'>
                <img id='miriam' src={ Miriam } alt='expense control logo' />
              </a>
              <a href='https://github.com/VanessaDantonio' rel='noreferrer' target='_blank'>
                <img id='vanessa' src={ Vanessa } alt='expense control logo' />
              </a>
            </div>
          </div>
            
          <div className='footer-col'>
            <h4>Resources</h4>
            <a className='resources-link' href='https://www.canva.com/' alt='Canva' rel='noreferrer' target='_blank'>Canva</a>
            <a className='resources-link' href='https://canvasjs.com/' alt='CanvasJS' rel='noreferrer' target='_blank'>CanvasJS</a>
            <a className='resources-link' href='https://apilayer.com/marketplace/exchangerates_data-api' alt='APILayer' rel='noreferrer' target='_blank'>ExchangeRatesAPI</a>
            <a className='resources-link' href='https://tailwindcss.com/' alt='RapidAPI' rel='noreferrer' target='_blank'>TailwindCSS</a>
          </div>

          <div className='footer-col'>
            <h4>Company</h4>
            <Link to='/about' className='footer-navLink'>About us</Link>
          </div>

          <div className='footer-col'>
            <h4>Support</h4>
            <Link to='/contact' className='footer-navLink'>Contact</Link>
          </div>

        </div>
      </div>

      <hr />

      <div className='footer-bottom'>
        <div className='footer-copyright'>
          <p className='copyright'>
            &copy; { new Date().getFullYear() }. Expense Control. All Rights Reserved.
          </p>
          <p className='credits'>
            Designed and developed by <span>Darwin Michell</span>, <span>Giuliana Castillo</span>, <span>Miriam Durazo Barba</span> and <span>Vanessa D’Antonio</span>.
          </p>
        </div>
      </div>

    </div>
  );
}