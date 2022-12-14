import React from 'react';
import './App.scss';
import {Menu} from '@mui/icons-material';
import {Dialog, Divider} from "@mui/material";
import Slide from '@mui/material/Slide';
import {TransitionProps} from "@mui/material/transitions";
import MenuDialogComponent from "./components/MenuDialogComponent/MenuDialogComponent";
import {RouterProvider} from "react-router";
import {routes} from "./routes";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const findLocation = (path: string) => {
    if (window.location.pathname === path) {
      return 'menu-item-desktop selected-item'
    }
    return 'menu-item-desktop'
  }

  return (
      <div className="App">
        <header className="App-header">
          <div className='header'>
            <div className='header-title-animated'><a href="/">Edvinas Alimas</a></div>
            <div className='header-icon' onClick={handleClickOpen}><Menu/></div>
          </div>
          <Divider style={{borderColor: 'white', borderBottomWidth: 'medium'}} className='header-divider'/>
          <div className='header-menu-desktop'>
            <a href='/'>
              <div className={findLocation('/')}>Home</div>
            </a>
            <a href='/about'>
              <div className={findLocation('/about')}>About</div>
            </a>
            <a href='/contact'>
              <div className={findLocation('/contact')}>Contact</div>
            </a>
            <a href='/portfolio'>
              <div className={findLocation('/portfolio')}>Portfolio</div>
            </a>
          </div>
        </header>
        <div>
          <RouterProvider router={routes}/>
        </div>
        <footer className="App-footer">
          <div><a href="mailto:edvinasalimas98@gmail.com">edvinasalimas98@gmail.com</a></div>
          <div>??2023 by Edvinas Alimas</div>
        </footer>
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
          <MenuDialogComponent closeDialog={handleClose}></MenuDialogComponent>
        </Dialog>
      </div>
  );
}
