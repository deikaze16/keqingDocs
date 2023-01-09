import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

export default function HomepageFeatures(): JSX.Element {

  let features = [
    {
      name: "Effort calculator",
      desc: "Keqing will help you calculate your card's effort.",
      image: "./img/features/home/effort.png"
    },
    {
      name:"Frame Tester",
      desc: "We also provide built-in Frame tester.",
      image: "./img/features/home/frame.png"
    },
    {
      name: "👑 Multiframe Tester",
      desc: "Multiframe tester is a thing.",
      image: "./img/features/home/multiframe.png"
    },
    {
      name: "👑 Morph Tester",
      desc: "Do you want to use frame tester with morph? We got you!",
      image: "./img/features/home/morph.png"
    },
    {
      name: "Card Tracer",
      desc: "Find specific cards with the range 1-500 print.",
      image: "./img/features/home/trace.png"
    },
    {
      name: "Not (Starboard)",
      desc: "You can log your \"Pog\" drops using this bot.",
      image: "./img/features/home/starboard.png"
    },
    {
      name: "Global Market",
      desc: "Tired of selling your cards? try this.",
      image: "./img/features/home/market.png"
    },
    {
      name: "Wishlist Notifier",
      desc: "Notifies you when someone's wishlist is dropped.",
      image: "./img/features/home/wlping.png"
    },
    {
      name: "Card codes generator",
      desc: "Tired of tagging multiple of cards? try this.",
      image: "./img/features/home/card codes.png"
    }, 
    {
      name: "Koibito finder",
      image: "./img/features/home/koibito.png",
      desc: "Helps you find id of current koibito"
    },
    {
      name: "Card owner finder",
      image: "./img/features/home/owner.png",
      desc: "Helps you find id of current owner"
    },
    {
      name: "Card Pricing",
      image: "./img/features/home/pricing.png",
      desc: "Keqing can help you price the card based on community guide"
    },
    {
      name: "Wishlist Leaderboard",
      image: "./img/features/home/topwl.png",
      desc: "Track the wishlist leaderboard"
    }
    
  ]
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((k, v) => {
            return(
            <div className={clsx('col col--4')}>
              <div className="card">
                <div className="text--center">
                  <img src={k.image} width="300"/>
                </div>
                <div className="text--center">
                  <h3>{k.name}</h3>
                  <p>{k.desc}</p>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
