import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import {FaDiscord, FaCode, FaStar} from 'react-icons/fa'
import {BsPlusSquare, BsFillImageFill} from 'react-icons/bs'
import {MdStoreMallDirectory} from 'react-icons/md'
import {GiFallingStar} from 'react-icons/gi'

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
        <div className={clsx('col col--4')}>
            <div className="text--center icons">
              <FaCode size={50}/>
            </div>
            <div className="text--center padding-horiz--md">
              <h3>Free to use</h3>
              <p>Keqing bot is free to use.</p>
            </div>
          </div>
          <div className={clsx('col col--4')}>
            <div className="text--center icons">
              <BsPlusSquare size={50}/>
            </div>
            <div className="text--center padding-horiz--md">
              <h3>Effort calculator</h3>
              <p>We will helps you calculates your card's effort.</p>
            </div>
          </div>
          <div className={clsx('col col--4')}>
            <div className="text--center icons">
              <BsFillImageFill size={50}/>
            </div>
            <div className="text--center padding-horiz--md">
              <h3>Frame Tester</h3>
              <p>We also provide built-in Frame tester.</p>
            </div>
          </div>
          <div className={clsx('col col--4')}>
            <div className="text--center icons">
              <FaStar size={50}/>
            </div>
            <div className="text--center padding-horiz--md">
              <h3>Not (Starboard)</h3>
              <p>You can logs your "Pog" drops using this bot.</p>
            </div>
          </div>
          <div className={clsx('col col--4')}>
            <div className="text--center icons">
              <MdStoreMallDirectory size={50}/>
            </div>
            <div className="text--center padding-horiz--md">
              <h3>Global Market</h3>
              <p>Tired of selling your cards? try this.</p>
            </div>
          </div>
          <div className={clsx('col col--4')}>
            <div className="text--center icons">
              <GiFallingStar size={50}/>
            </div>
            <div className="text--center padding-horiz--md">
              <h3>Wishlist Notifier</h3>
              <p>Notify you when someone's wishlist if dropped.</p>
            </div>
          </div>          
        </div>
      </div>
    </section>
  );
}
