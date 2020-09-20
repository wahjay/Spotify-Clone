import React from 'react';
import './SidebarOption.css';

export default function SidebarOption({ title, Icon, active, handleClick }) {
  return (
    <div
      className={`sidebarOption ${ active && active === title && 'sidebarOption__active'}`}
      onClick={handleClick}
    >
      { Icon && <Icon className="sidebarOption__icon"/> }
      { Icon ? <h4>{title}</h4> : <div><p>{title}</p></div> }
    </div>
  );
}
