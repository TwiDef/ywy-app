import React from 'react';
import { iconComponent } from '../../../../constants';

const NavIcon = ({ iconName }) => {
  const IconComponent = iconComponent[iconName]
  return (
    <IconComponent />
  );
};

export default NavIcon;