import React, { useState } from 'react';

import clsx from 'clsx';

import {
  AppBar,
  Avatar,
  Drawer,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Tooltip,
} from '@material-ui/core';

import {
  Assignment as AssignmentIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@material-ui/icons';

import { styles } from '@styles/components/MobileMenu';

const MobileMenu: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const classes = styles();

  function handleDrawer() {
    setMobileMenuOpen(state => !state);
  }

  return (
    <>
      <AppBar
        position="fixed"
        color="secondary"
        className={clsx(classes.mobileMenu, {
          [classes.mobileMenuOpened]: mobileMenuOpen,
        })}
      >
        <Toolbar>
          <IconButton
            onClick={handleDrawer}
            color="inherit"
            aria-label="open drawer"
            edge="start"
          >
            <MenuIcon
              className={mobileMenuOpen && classes.mobileMenuIconClosed}
            />
          </IconButton>
          <Avatar color="#000" />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.mobileDrawer}
        classes={{
          paper: classes.mobileDrawerPaper,
        }}
        variant="temporary"
        anchor="left"
        open={mobileMenuOpen}
      >
        <Tooltip title="Fechar" className={classes.mobileDrawerHeader}>
          <IconButton onClick={handleDrawer}>
            <CloseIcon />
          </IconButton>
        </Tooltip>
        <Divider />
        <List>
          {['Tarefas'].map(text => (
            <ListItem button key={text}>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default MobileMenu;
