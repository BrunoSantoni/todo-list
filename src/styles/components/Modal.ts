import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles(() => ({
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
}));
