// document.ts
export interface Document {
  id: number;
  id_folder: number; // Assuming this matches a 'folder' foreign key
  nombre: string;
  tipo_documento: string;
  fechacreada: Date; // Use 'string' if the date isn't automatically converted
  version_id: number; // Or float, depending on how you manage versions
  descripcion: string;
  id_blob: string;
  fechamodificado: Date;
}