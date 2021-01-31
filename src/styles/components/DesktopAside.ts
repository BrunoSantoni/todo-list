import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles(theme => ({
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

    [theme.breakpoints.down('sm')]: {
      marginLeft: '15px',
      '& span': {
        fontSize: '14px',
      },

      '& small': {
        fontSize: '12px',
      },
    },
  },
}));
