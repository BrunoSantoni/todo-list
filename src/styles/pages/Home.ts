import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles(theme => ({
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
        transition: 'background 0.2s',

        '&:hover': {
          background: '#1fade8',
        },

        '& svg': {
          fontSize: '18px',
          marginRight: '16px',
        },
      },
    },
  },

  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },

  content: {
    paddingTop: '24px',
    paddingBottom: '24px',
    fontFamily: 'Montserrat',
    '& h3': {
      fontSize: '30px',
      fontWeight: '600',
      margin: '30px 0 15px',
    },

    [theme.breakpoints.down('xs')]: {
      paddingTop: '70px',
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
