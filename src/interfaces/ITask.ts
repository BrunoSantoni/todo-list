export default interface ITask {
  id: number;
  titulo: string;
  descricao: string;
  concluido: boolean | 0 | 1;
}
