import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles(() => ({
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

  editButton: {
    position: 'absolute',
    cursor: 'pointer',
    right: '35px',
    top: '12px',
    transition: 'color 0.2s',

    '&:hover': {
      color: '#ccc',
    },
  },

  deleteButton: {
    position: 'absolute',
    cursor: 'pointer',
    right: '5px',
    top: '12px',
    transition: 'color 0.2s',

    '&:hover': {
      color: '#ccc',
    },
  },

  editTodoMenuButton: {
    position: 'absolute',
  },
}));
