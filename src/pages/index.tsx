import React, { useCallback, useEffect, useState, useRef } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';

import {
  Button,
  Container,
  Grid,
  Hidden,
  InputBase,
  Typography,
} from '@material-ui/core';
import { Search as SearchIcon, Add as AddIcon } from '@material-ui/icons';
import { getTasks } from '@redux/modules/task/actions';
import { styles } from '@styles/pages/Home';
import { IApplicationState } from '../store';

import DesktopAside from '../components/DesktopAside';
import MobileMenu from '../components/MobileMenu';
import Modal from '../components/Modal';
import TaskCard from '../components/TaskCard';

import ITask from '../interfaces/ITask';

interface IHomeProps {
  allTasksList: ITask[];
}

const Home: React.FC<IHomeProps> = ({ allTasksList }) => {
  const dispatch = useDispatch();

  const classes = styles();

  const tasks = useSelector((state: IApplicationState) => state.task.tasks);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [taskInfo, setTaskInfo] = useState<ITask | undefined>();
  const [beingDisplayed, setBeingDisplayed] = useState(tasks);

  const searchRef = useRef(null);

  useEffect(() => {
    dispatch(
      getTasks({
        allTasksList,
      }),
    );
  }, [allTasksList, dispatch]);

  useEffect(() => {
    setBeingDisplayed(tasks);
  }, [tasks]);

  function handleModalOpen(type: string, taskInfoToEdit = undefined) {
    if (taskInfoToEdit) {
      setTaskInfo(taskInfoToEdit);
    }
    setModalType(type);
    setIsModalOpen(state => !state);
  }

  const handleTaskSearch = useCallback(() => {
    const keyword: string = searchRef.current.value;

    const parsedKeyword: string = keyword.toLowerCase().trim();

    const newlyDisplayed = tasks.filter((task: ITask) =>
      task.titulo.toLowerCase().includes(parsedKeyword),
    );
    setBeingDisplayed(newlyDisplayed);
  }, [tasks]);

  return (
    <Grid className={classes.wrapper} container>
      <Hidden only="xs">
        <DesktopAside />
      </Hidden>

      <Hidden smUp>
        <MobileMenu />
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
            <SearchIcon />
            <InputBase
              inputRef={searchRef}
              className={classes.searchInput}
              placeholder="Procurar tarefas"
              onChange={handleTaskSearch}
            />
          </div>

          <Typography variant="h3">Tarefas</Typography>

          {beingDisplayed.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              openEditModal={() => handleModalOpen('edit', task)}
            />
          ))}

          <Button
            color="primary"
            variant="contained"
            className={classes.newTaskButton}
            onClick={() => handleModalOpen('add')}
          >
            <AddIcon />
            Nova tarefa
          </Button>

          {isModalOpen && (
            <Modal
              isOpen={isModalOpen}
              taskInfo={taskInfo}
              type={modalType}
              handleClose={() => setIsModalOpen(state => !state)}
            />
          )}
        </Container>
      </Grid>
    </Grid>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get('https://tarefas.viniciuss.dev/api/tarefas');

  const allTasksList: ITask[] = response.data;

  return {
    props: {
      allTasksList,
    },
  };
};

export default Home;
