import React, { useEffect, useCallback, useState, useRef } from 'react';
import Head from 'next/head';
import clsx from 'clsx';

import {
  Avatar,
  AppBar,
  Box,
  Drawer,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Hidden,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  InputBase,
  Container,
  Button,
  Typography,
  Tooltip,
  Toolbar,
  IconButton,
  Grid,
  TextField,
  Menu,
  MenuItem,
} from '@material-ui/core';

import { Alert } from '@material-ui/lab';

import {
  Check,
  Search,
  MoreVert,
  Add,
  Assignment,
  Menu as MenuIcon,
  Close,
} from '@material-ui/icons';
import axios from 'axios';
import { styles } from '../styles/pages/Home/styles';

interface RegisteredTasks {
  id: number;
  titulo: string;
  descricao: string;
  concluido: boolean;
}

const Home: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalFormOpen, setModalFormOpen] = useState(false);
  const [editTodoMenuOpen, setEditTodoMenuOpen] = useState(false);
  const [modalEditFormOpen, setModalEditFormOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [reload, setReload] = useState(false);

  const [registeredTasks, setRegisteredTasks] = useState<RegisteredTasks[]>([]);

  const nameRef = useRef(null);
  const descriptionRef = useRef(null);

  const editNameRef = useRef(null);
  const editDescriptionRef = useRef(null);

  const classes = styles();

  useEffect(() => {
    axios.get('https://tarefas.viniciuss.dev/api/tarefas').then(response => {
      setRegisteredTasks(response.data);
    });
  }, [reload]);

  function handleDrawer() {
    setMobileMenuOpen(state => !state);
  }

  function handleModal() {
    setModalFormOpen(state => !state);
  }

  function handleEditTodoOption() {
    setEditTodoMenuOpen(state => !state);
  }

  function handleEditModal() {
    setModalEditFormOpen(state => !state);
  }

  const handleAddTask = useCallback(async () => {
    const taskName = nameRef.current.value;
    const description = descriptionRef.current.value;

    const response = await axios.post(
      'https://tarefas.viniciuss.dev/api/tarefas',
      {
        titulo: taskName,
        descricao: description,
        concluido: 0,
      },
    );

    setRegisteredTasks(oldTasks => [...oldTasks, response.data]);
  }, []);

  const handleUpdateTask = useCallback(async (id: number) => {
    const taskName = editNameRef.current.value;
    const description = editDescriptionRef.current.value;
    const finished = selectedOption === 'progress' ? 0 : 1;

    const response = await axios.put(
      `https://tarefas.viniciuss.dev/api/tarefas/${id}`,
      {
        titulo: taskName,
        descricao: description,
        concluido: finished,
      },
    );

    setReload(true);

    return <Alert severity="success">{response.data.mensagem}</Alert>;
  }, []);

  // const handleDeleteTask = useCallback(async (id: number) => {
  //   registeredTasks.filter(task => task.id !== id);
  // });

  return (
    <Grid className={classes.wrapper} container>
      <Hidden only="xs">
        <Grid component="aside" item xs={12} sm={3} lg={2}>
          <div>
            <Avatar alt="Foto de perfil" />
            <div className={classes.userInfo}>
              <Typography variant="body1" component="span">
                Nome
              </Typography>
              <Typography variant="body2" component="small">
                Função
              </Typography>
            </div>
          </div>

          <Button>
            <Assignment />
            Tarefas
          </Button>
        </Grid>
      </Hidden>

      <Hidden smUp>
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
              <Close />
            </IconButton>
          </Tooltip>
          <Divider />
          <List>
            {['Tarefas'].map(text => (
              <ListItem button key={text}>
                <ListItemIcon>
                  <Assignment />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Hidden>

      <Grid item xs={12} sm={9} lg={10} className={classes.contentWrapper}>
        <Container
          component="section"
          maxWidth="sm"
          className={classes.content}
        >
          <Head>
            <title>Todo List</title>
            <link rel="icon" href="/favicon.ico" />

            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
          </Head>

          <div className={classes.searchContainer}>
            <Search />
            <InputBase
              className={classes.searchInput}
              placeholder="Procurar tarefas"
            />
          </div>

          <Typography variant="h3">Tarefas</Typography>

          {registeredTasks.map(task => (
            <Box key={task.id} className={classes.cardContainer}>
              <h6>{task.titulo}</h6>
              <p>{task.descricao}</p>

              {task.concluido ? (
                <span>
                  <Check />
                  Concluído
                </span>
              ) : (
                <span>Em Progresso</span>
              )}

              <Tooltip title="Ver mais" onClick={handleEditTodoOption}>
                <MoreVert
                  fontSize="large"
                  className={classes.moreOptionsButton}
                />
              </Tooltip>
              <Menu open={editTodoMenuOpen} onClose={handleEditTodoOption}>
                <MenuItem onClick={handleEditModal}>Editar</MenuItem>
              </Menu>
              <Dialog
                open={modalEditFormOpen}
                onClose={handleEditModal}
                aria-labelledby="form-title"
                className={classes.addTaskModal}
                classes={{
                  paper: classes.addTaskModalPaper,
                }}
              >
                <DialogTitle id="form-title">Editar tarefa</DialogTitle>
                <DialogContent>
                  <TextField
                    inputRef={editNameRef}
                    autoFocus
                    variant="outlined"
                    id="form-task-name"
                    fullWidth
                    label="Nome da tarefa"
                  />

                  <TextField
                    inputRef={editDescriptionRef}
                    variant="outlined"
                    id="form-task-description"
                    fullWidth
                    label="Descrição da tarefa"
                    className={classes.addTaskModalInput}
                  />

                  <div className={classes.editTaskSwitchButtonsContainer}>
                    <Button
                      onClick={() => setSelectedOption('progress')}
                      className={
                        selectedOption === 'progress'
                          ? classes.editTaskSwitchButtonsActive
                          : classes.editTaskSwitchButtons
                      }
                    >
                      Em progresso
                    </Button>

                    <Button
                      onClick={() => setSelectedOption('finished')}
                      className={
                        selectedOption === 'finished'
                          ? classes.editTaskSwitchButtonsActive
                          : classes.editTaskSwitchButtons
                      }
                    >
                      Concluído
                    </Button>
                  </div>
                </DialogContent>

                <DialogActions>
                  <Button onClick={handleEditModal} color="primary">
                    Cancelar
                  </Button>

                  <Button
                    onClick={() => handleUpdateTask(task.id)}
                    color="primary"
                  >
                    Salvar
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
          ))}

          <Button
            color="primary"
            variant="contained"
            className={classes.newTaskButton}
            onClick={handleModal}
          >
            <Add />
            Nova tarefa
          </Button>

          <Dialog
            open={modalFormOpen}
            onClose={handleModal}
            aria-labelledby="form-title"
            className={classes.addTaskModal}
            classes={{
              paper: classes.addTaskModalPaper,
            }}
          >
            <DialogTitle id="form-title">Criar tarefa</DialogTitle>
            <DialogContent>
              <TextField
                inputRef={nameRef}
                autoFocus
                variant="outlined"
                id="form-task-name"
                fullWidth
                label="Nome da tarefa"
              />

              <TextField
                inputRef={descriptionRef}
                variant="outlined"
                id="form-task-description"
                fullWidth
                label="Descrição da tarefa"
                className={classes.addTaskModalInput}
              />
            </DialogContent>

            <DialogActions>
              <Button onClick={handleModal} color="primary">
                Cancelar
              </Button>

              <Button onClick={handleAddTask} color="primary">
                Salvar
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Home;
