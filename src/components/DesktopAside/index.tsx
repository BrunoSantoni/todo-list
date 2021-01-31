import React from 'react';

import { Avatar, Button, Grid, Typography } from '@material-ui/core';

import { Assignment as AssignmentIcon } from '@material-ui/icons';

import { styles } from '@styles/components/DesktopAside';

const DesktopAside: React.FC = () => {
  const classes = styles();

  return (
    <Grid component="aside" item xs={12} sm={3} lg={2}>
      <div>
        <Avatar alt="Foto de perfil" />
        <div className={classes.userInfo}>
          <Typography variant="body1" component="span">
            Bruno
          </Typography>
          <Typography variant="body2" component="small">
            Desenvolvedor
          </Typography>
        </div>
      </div>

      <Button>
        <AssignmentIcon />
        Tarefas
      </Button>
    </Grid>
  );
};

export default DesktopAside;
