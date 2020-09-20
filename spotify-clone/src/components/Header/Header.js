import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from "@material-ui/core";
import { useStateValue } from '../../StateProvider';

export default function Header({ spotify }) {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts"
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar
          src={user?.images[0]?.url}
          alt={user?.display_name}
          style={{ width: '30px', height: '30px' }}
        />
        <h4>{user?.display_name}</h4>
        <ExpandMoreIcon />
      </div>
    </div>
  );
}
