import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import 'bulma/css/bulma.css';
import Grid from '../components/Grid/Grid';
import Title from '../components/Title/Title';
import Footer from '../components/Footer/Footer';
//import Hero_5 from '../components/Hero_5/Hero_5';

export default function Programacion() {
  return (
    <>
      <NavBar></NavBar>
      <Title>Programación</Title>
      <Grid></Grid>
      <Footer></Footer>
    </>
  );
}
