import React, { useCallback, useState, useRef } from 'react';

import { useDispatch } from 'react-redux';

import Swal from 'sweetalert2';
import axios from 'axios';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from '@material-ui/core';

import ITask from '@interfaces/ITask';
import { addTask, updateTask } from '@redux/modules/task/actions';
import { styles } from '@styles/components/Modal';

interface IModalProps {
  isOpen: boolean;
  type: string;
  taskInfo?: ITask;
  handleClose(): void;
}

const Modal: React.FC<IModalProps> = ({
  isOpen,
  type,
  taskInfo,
  handleClose,
}) => {
  const [selectedOption, setSelectedOption] = useState(() => {
    if (taskInfo) {
      const taskProgress = taskInfo.concluido === 0 ? 'progress' : 'finished';

      return taskProgress;
    }

    return '';
  });

  const nameRef = useRef(null);
  const descriptionRef = useRef(null);

  const classes = styles();
  const dispatch = useDispatch();

  const handleAddTask = useCallback(async () => {
    const taskName = nameRef.current.value;
    const description = descriptionRef.current.value;

    try {
      const response = await axios.post(
        'https://tarefas.viniciuss.dev/api/tarefas',
        {
          titulo: taskName,
          descricao: description,
          concluido: 0,
        },
      );

      const newTask = response.data;

      dispatch(addTask({ newTask }));

      handleClose();

      Swal.fire('Sucesso', 'Tarefa cadastrada com sucesso', 'success');
    } catch (err) {
      handleClose();
      Swal.fire('Erro', 'Erro ao cadastrar a tarefa, tente novamente', 'error');
    }
  }, [dispatch, handleClose]);

  const handleUpdateTask = useCallback(async () => {
    const taskName = nameRef.current.value;
    const description = descriptionRef.current.value;
    const finished = selectedOption === 'progress' ? 0 : 1;

    try {
      const response = await axios.put(
        `https://tarefas.viniciuss.dev/api/tarefas/${taskInfo.id}`,
        {
          titulo: taskName,
          descricao: description,
          concluido: finished,
        },
      );

      const updatedTask: ITask = {
        id: taskInfo.id,
        concluido: finished,
        titulo: taskName,
        descricao: description,
      };

      dispatch(updateTask({ updatedTask }));

      handleClose();

      Swal.fire('Sucesso', response.data.mensagem, 'success');
    } catch (err) {
      handleClose();
      Swal.fire('Erro', 'Erro ao atualizar a tarefa, tente novamente', 'error');
    }
  }, [selectedOption, dispatch, handleClose]);

  function handleTask() {
    if (type === 'edit') {
      handleUpdateTask();
    } else {
      handleAddTask();
    }
  }

  return (
    <Dialog
      key={type}
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="form-title"
      className={classes.addTaskModal}
      classes={{
        paper: classes.addTaskModalPaper,
      }}
    >
      <DialogTitle id="form-title">
        {type === 'edit' ? 'Editar tarefa' : 'Criar tarefa'}
      </DialogTitle>
      <DialogContent>
        <TextField
          inputRef={nameRef}
          autoFocus
          defaultValue={type === 'edit' ? taskInfo.titulo : ''}
          variant="outlined"
          id="form-task-name"
          fullWidth
          label="Nome da tarefa"
        />

        <TextField
          inputRef={descriptionRef}
          defaultValue={type === 'edit' ? taskInfo.descricao : ''}
          variant="outlined"
          id="form-task-description"
          fullWidth
          label="Descrição da tarefa"
          className={classes.addTaskModalInput}
        />

        {type === 'edit' && (
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
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>

        <Button onClick={handleTask} color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
