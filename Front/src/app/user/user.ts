export interface User {
    id: number;
    nombre: string;
    correo: string;
    rol: string;
    departamentoId: number; // Assuming this matches a 'departamento' foreign key
  }