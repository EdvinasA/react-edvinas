import React from 'react';
import './MenuDialogComponent.scss';
import {Close} from '@mui/icons-material';

interface MenuDialogComponentProps {
  closeDialog: () => void;
}

export default function MenuDialogComponent(props: MenuDialogComponentProps) {

  return (
      <div className='menu-dialog'>
        <div className='menu-item-with-close'>
          <a href='/'>
            <div className='menu-item-home-button' onClick={props.closeDialog}>
              Home
            </div>
          </a>
          <div className='menu-item-close-button' onClick={props.closeDialog}><Close/></div>
        </div>
        <a href='/about'>
          <div className='menu-item' onClick={props.closeDialog}>About</div>
        </a>
        <a href='/contact'>
          <div className='menu-item' onClick={props.closeDialog}>Contact</div>
        </a>
        <a href='/portfolio'>
          <div className='menu-item' onClick={props.closeDialog}>Portfolio</div>
        </a>
      </div>
  );
}
