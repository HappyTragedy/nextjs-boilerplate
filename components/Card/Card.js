import React, { useState } from 'react';
import styles from './Card.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Lightbox from '../Lightbox/Lightbox';

const Card = () => {
  const [stateModal, setStateModal] = useState(false);

  const changeStateModal = () => {
    if (stateModal) {
      setStateModal(false);
    } else if (!stateModal) {
      setStateModal(true);
    }
  };

  return (
    <div
      className={`card ${styles['container']}`}
      onClick={() => changeStateModal()}
    >
      <Lightbox changeStateModal={changeStateModal} stateModal={stateModal} />
      <div>
        <figure className={`${styles['figurecontainer']}`}>
          <Image
            src="/assets/hero.png"
            alt="Placeholder image"
            width={1200}
            height={900}
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <span className={`tag ${styles['tagg']}`}>Programación</span>
            <p className={`title is-4 ${styles['title']}`}>John Smith</p>
          </div>
        </div>
        <Link href="/singlepage">
          <a className={`button ${styles['boton']}`}> VER </a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
