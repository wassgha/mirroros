import React from 'react';
import '../styles/Recent.scss';
import { mdiEmail, mdiSpotify } from '@mdi/js';

import Layer from '../components/Layer';
import Card from '../components/Card';
import Swiper from '../components/Swiper';

const dummyCards = [
  {
    title: 'We’re meeting with the new customer',
    app: 'Email',
    icon: mdiEmail,
    children: (
      <span>
        <p>Hey Wassim,</p>
        <p>
          Just wanted to remind you that we’re meeting with the new customers
          today at 2pm in the lobby. I’ll meet you there.
        </p>
        <p>
          Please remember to bring the updated designs for the four new concepts
          that you were working on yesterday.
        </p>
        <p>
          Best regards,
          <br />
          John.
        </p>
      </span>
    )
  },
  {
    title: 'Now Playing',
    app: 'Spotify',
    icon: mdiSpotify,
    color: '#1DB954',
    children: <span>1</span>
  },
  {
    title: 'Now Playing',
    app: 'Spotify',
    icon: mdiSpotify,
    color: '#1DB954',
    children: <span>2</span>
  },
  {
    title: 'Now Playing',
    app: 'Spotify',
    icon: mdiSpotify,
    color: '#1DB954',
    children: <span>3</span>
  },
  {
    title: 'Now Playing',
    app: 'Spotify',
    icon: mdiSpotify,
    color: '#1DB954',
    children: <span>4</span>
  }
];

function Recent({ active }) {
  return (
    <Layer className="recent" active={active}>
      <Swiper>
        {dummyCards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </Swiper>
    </Layer>
  );
}

export default Recent;