import React, { useState } from 'react';
import './Sidebar.css';
import { SpotifyEmblem } from '../../icons/Icons';
import SidebarOption from '../SidebarOption/SidebarOption';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useStateValue } from '../../StateProvider';

export default function Sidebar({ spotify }) {
  const [selected, setSelected] = useState('');
  const [{ playlists, tab }, dispatch] = useStateValue();

  const handleSelect = (name) => {
    setSelected(name);
    dispatch({
      type: 'SET_TAB',
      tab: name
    });
  }

  const switchPlaylist = (url) => {
    setSelected('');
    spotify.getPlaylist(url)
      .then(res => {
        dispatch({
          type: "SET_PLAYLIST",
          playlist: res
        });

        dispatch({
          type: 'SET_INDEX',
          index: 0
        });

        dispatch({
          type: 'SET_TAB',
          tab: null
        });
      })
      .catch(err => alert(err.message));
  }

  return (
    <div className="sidebar">
      <SpotifyEmblem className="sidebar__logo" />
      <SidebarOption
        active={selected}
        Icon={tab === 'Home' ? HomeIcon : HomeOutlinedIcon }
        title="Home"
        handleClick={() => handleSelect('Home')}
      />
      <SidebarOption
        active={selected}
        Icon={SearchIcon}
        title="Search"
        handleClick={() => handleSelect('Search')}
      />
      <SidebarOption
        active={selected}
        Icon={tab === 'Your Library' ? LibraryMusicIcon : LibraryMusicOutlinedIcon}
        title="Your Library"
        handleClick={() => handleSelect('Your Library')}
      />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      <div className="sidebar__bottom">
        <div className="sidebar__playlist">
        {
          playlists?.items?.map((playlist, i) => (
            <SidebarOption
              key={i}
              title={playlist.name}
              playlist={playlist}
              handleClick={() => switchPlaylist(playlist.id)}
            />
          ))
        }
        </div>
      </div>
    </div>
  );
}
