import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 200;

export const styles = makeStyles(theme => ({
  mobileMenu: {
    '& > div': {
      display: 'flex',
      justifyContent: 'space-between',
    },

    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  mobileMenuOpened: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },

  mobileDrawer: {
    width: drawerWidth,
    flexShrink: 0,
  },

  mobileDrawerPaper: {
    width: drawerWidth,
  },

  mobileDrawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar,
  },

  mobileMenuIconClosed: {
    display: 'none',
  },
}));
