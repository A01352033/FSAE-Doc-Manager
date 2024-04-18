export interface Folder {
    id: number;
    nombre: string;
    fecha_creada: Date; // Use 'string' if the date isn't automatically converted
    fecha_modificada: Date; // Use 'string' if the date isn't automatically converted
    padre_id: number | null; // Could be nullable if it references a parent folder
    departamento_id: number; // Assuming this matches a 'departamento' foreign key
  }