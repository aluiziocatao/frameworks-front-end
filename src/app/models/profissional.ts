import { Unidade } from './unidade';
import { Especialidade } from './especialidade';

export interface Profissional {
  id: number;
  email: string;
  nome: string;
  registroConselho: string
  telefone: string
  especialidade: Especialidade;
  unidade: Unidade;
}
