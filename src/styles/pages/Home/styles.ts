import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 200;

export const styles = makeStyles(theme => ({
  addTaskModal: {
    '& h2': {
      fontWeight: '600',
    },

    '& button': {
      fontWeight: '600',
    },
  },

  addTaskModalPaper: {
    maxWidth: '315px',
    borderRadius: '10px',
  },

  addTaskModalInput: {
    marginTop: '30px',
  },

  editTaskSwitchButtonsContainer: {
    background: 'rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    padding: '10px 0',
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-around',
  },

  editTaskSwitchButtons: {
    textTransform: 'none',
    width: '120px',
    borderRadius: '5px',
    color: '#737373',
    fontWeight: 500,
  },

  editTaskSwitchButtonsActive: {
    textTransform: 'none',
    width: '120px',
    fontWeight: 700,
    borderRadius: '5px',
    background: '#fff',
  },

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

  wrapper: {
    display: 'flex',

    '& aside': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '12%',
      background: theme.palette.primary.main,
      padding: '30px',

      '& > div': {
        display: 'flex',
        alignItems: 'center',
      },

      '& button': {
        background: 'rgba(74, 190, 238, 0.5)',
        width: '130px',
        height: '39px',
        borderRadius: '11px',
        color: '#fff',
        textTransform: 'none',
        marginTop: '80px',

        '& svg': {
          fontSize: '18px',
          marginRight: '16px',
        },
      },
    },
  },

  userInfo: {
    color: '#fff',
    fontSize: '16px',
    marginLeft: '20px',

    '& span': {
      margin: 0,
      fontWeight: '500',
    },

    '& small': {
      display: 'block',
      fontWeight: '300',
    },
  },

  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },

  content: {
    fontFamily: 'Montserrat',
    '& h3': {
      fontSize: '30px',
      fontWeight: '600',
      margin: '30px 0 15px',
    },
  },

  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.1)',
    height: '52px',
    borderRadius: '10px',
    padding: '0 15px',
  },

  searchInput: {
    marginLeft: '8px',
    fontSize: '18px',
    flex: 1,
    '& input': {
      padding: '0',

      '&::placeholder': {
        color: '#000',
        opacity: 1,
      },
    },
  },

  cardContainer: {
    position: 'relative',
    background: '#386DB3',
    borderRadius: '10px',
    padding: '15px',
    color: '#fff',

    '& h6': {
      fontSize: '18px',
      fontWeight: '700',
      margin: '0',
    },

    '& p': {
      fontSize: '18px',
      fontWeight: '500',
      margin: '0',
    },

    '& span': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      maxWidth: '115px',
      height: '27px',
      background: '#fff',
      color: '#000',
      fontSize: '14px',
      fontWeight: '600',
      borderRadius: '5px',
      marginTop: '10px',

      '& svg': {
        fontSize: '18px',
        marginRight: '5px',
      },
    },

    '&:not(:first-of-type)': {
      marginTop: '25px',
    },
  },

  moreOptionsButton: {
    position: 'absolute',
    cursor: 'pointer',
    right: '5px',
    top: '12px',
  },

  editTodoMenuButton: {
    position: 'absolute',
  },

  newTaskButton: {
    display: 'flex',
    width: '150px',
    marginTop: '80px',
    marginLeft: 'auto',
    color: '#fff',
    padding: '15px',
    borderRadius: '10px',

    '& span': {
      fontSize: '14px',
      fontWeight: '600',
      textTransform: 'none',
    },

    '& svg': {
      marginRight: '8px',
    },
  },
}));
