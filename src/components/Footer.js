import React from 'react';
import { FaLinkedin, FaYoutubeSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
// import { FaYoutube } from 'react-icons/fa';


import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' ,marginTop:"25px"}}>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
    
        <a href="https://www.facebook.com/laksh.sharma.9216" target="blank"><FaFacebookSquare size="2em" color='#4267B2' /></a>
 
        <a href="https://www.instagram.com/ankit1rajput/" target="blank"><FaInstagramSquare size="2em" color='#cd486b'/></a>

        <a href="https://twitter.com/" target="blank"><FaTwitterSquare size="2em" color='#1DA1F2'/></a>

        <a href="https://youtube.com/" target="blank"><FaYoutubeSquare size="2em" color='#FF0000'/></a>

        <a href="https://linkedin.com/" target="blank"><FaLinkedin size="2em" color='#0072b1'/></a>

        </section>
      </MDBContainer>

      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright: 
        <a className='text-dark' href='https://mdbootstrap.com/'>
          Ar Photography Films
        </a>
      </div>
    </MDBFooter>
    
  );
  
}