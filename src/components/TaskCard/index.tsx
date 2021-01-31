import React from 'react';
import { useDispatch } from 'react-redux';

import { Box } from '@material-ui/core';

import Swal from 'sweetalert2';
import axios from 'axios';

import {
  Check as CheckIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import ITask from '@interfaces/ITask';

import { deleteTask } from '@redux/modules/task/actions';

import { styles } from '@styles/components/TaskCard';

interface ITaskCardProps {
  task: ITask;
  openEditModal(): void;
}

const TaskCard: React.FC<ITaskCardProps> = ({ task, openEditModal }) => {
  const classes = styles();
  const dispatch = useDispatch();

  async function handleDeleteTask(taskId: number) {
    const response = await Swal.fire({
      title: 'Deseja deletar a tarefa?',
      text: 'Você não vai poder recuperá-la depois',
      icon: 'warning',
      iconColor: '#ff2a26',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Excluir',
      confirmButtonColor: '#ff2a26',
    });
    if (response.value) {
      try {
        const deleted = await axios.delete(
          `https://tarefas.viniciuss.dev/api/tarefas/${taskId}`,
        );

        dispatch(deleteTask({ taskId }));
        Swal.fire('Sucesso', deleted.data.mensagem, 'success');
      } catch (err) {
        Swal.fire(
          'Erro',
          'A tarefa não foi deletada, tente novamente!',
          'error',
        );
      }
    }
  }

  return (
    <Box key={task.id} className={classes.cardContainer}>
      <h6>{task.titulo}</h6>
      <p>{task.descricao}</p>

      {task.concluido ? (
        <span>
          <CheckIcon />
          Concluído
        </span>
      ) : (
        <span>Em Progresso</span>
      )}

      <EditIcon
        color="secondary"
        onClick={openEditModal}
        className={classes.editButton}
      />
      <DeleteIcon
        color="secondary"
        onClick={() => handleDeleteTask(task.id)}
        className={classes.deleteButton}
      />
    </Box>
  );
};

export default TaskCard;
