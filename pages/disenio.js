import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import 'bulma/css/bulma.css';
import Grid from '../components/Grid/Grid';
import Title from '../components/Title/Title';
import Footer from '../components/Footer/Footer';
import Hero_4 from '../components/Hero_4/Hero_4';
import CardInfoDisenio from '../components/CardInfoDisenio/CardInfoDisenio';

export default function Diseno() {
  return (
    <>
      <NavBar></NavBar>
      <Hero_4></Hero_4>
      <Title>Diseño</Title>
      <CardInfoDisenio />
      <Footer></Footer>
    </>
  );
}
