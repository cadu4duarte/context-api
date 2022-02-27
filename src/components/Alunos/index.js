import { UserContext } from '../../contexts/user';
import { useContext } from 'react';
import Nome from '../Nome';

function Alunos() {
  const {alunos} = useContext(UserContext);

  return (
    <div>
      <h2>Component Alunos: Aluno online: {alunos}</h2>
      <Nome />
    </div>
  );
}

export default Alunos;
