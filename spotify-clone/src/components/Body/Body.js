import React from 'react';
import './Body.css';
import Header from '../Header/Header';
import { useStateValue } from '../../StateProvider';
import Browse from '../Browse/Browse';
import Playlist from '../Playlist/Playlist';
import Artist from '../Artist/Artist';

const getPage = (tab, spotify) => {
  switch(tab) {
    case 'Search':
      return <Browse spotify={spotify} />;

    case 'Artist':
      return <Artist spotify={spotify} />;

    default:
      return <Playlist />;
  }
}

export default function Body({ spotify }) {
  const [{ tab }, dispatch] = useStateValue();

  return (
    <div className='body'>
      <Header spotify={spotify} />
      {
        getPage(tab, spotify)
      }
    </div>
  );
}
