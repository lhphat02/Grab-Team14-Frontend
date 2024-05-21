// @ts-nocheck 
// @ts-ignore 
import React from 'react';
import { PersonalInfo } from './nav/PersonalInfo/PersonalInfo';
import { SecuritySettings } from './nav/SecuritySettings/SecuritySettings';
import { UploadCV } from './nav/UploadCV/UploadCV';

interface ProfileFormNavProps {
  menu: string;
}

export const ProfileFormNav: React.FC<ProfileFormNavProps> = ({ menu }) => {
  let currentMenu;

  switch (menu) {
    case 'info': {
      currentMenu = <PersonalInfo />;
      break;
    }

    case 'security': {
      currentMenu = <SecuritySettings />;
      break;
    }

    case 'cv': {
      currentMenu = <UploadCV />;
      break;
    }

    default: {
      currentMenu = null;
    }
  }

  return currentMenu;
};
