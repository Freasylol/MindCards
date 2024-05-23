import React from 'react';
import { ContextMenu, MenuItem } from 'react-contextmenu';

const MyContextMenu = () => {
  return (
    <ContextMenu id="my-context-menu">
      <MenuItem>My Profile</MenuItem>
      <MenuItem>My favorite cardsets</MenuItem>
      <MenuItem>Item3</MenuItem>
    </ContextMenu>
  );
};

export default MyContextMenu;
