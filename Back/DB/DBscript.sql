 -- Creating 'departamento' table
CREATE TABLE departamento (
  id INT PRIMARY KEY,
  nombre VARCHAR2(255)
);

-- Creating 'usuario' table
CREATE TABLE usuario (
  id INT PRIMARY KEY,
  nombre VARCHAR2(255),
  correo VARCHAR2(255),
  rol VARCHAR2(255),
  departamentoId INT,
  CONSTRAINT fk_usuario_departamento FOREIGN KEY (departamentoId) REFERENCES departamento(id)
);

-- Creating 'folder' table
CREATE TABLE folder (
  id INT PRIMARY KEY,
  nombre VARCHAR2(255),
  fecha_creada DATE,
  fecha_modificada DATE,
  padre_id INT,
  departamento_id INT,
  CONSTRAINT fk_folder_padre FOREIGN KEY (padre_id) REFERENCES folder(id),
  CONSTRAINT fk_folder_departamento FOREIGN KEY (departamento_id) REFERENCES departamento(id)
);

-- Creating 'documento' table
CREATE TABLE documento (
  id INT PRIMARY KEY,
  id_folder INT,
  nombre VARCHAR2(255),
  tipo_documento VARCHAR2(255),
  fechaCreada DATE,
  version_id FLOAT,
  descripcion VARCHAR2(255),
  id_blob VARCHAR2(255),
  CONSTRAINT fk_documento_folder FOREIGN KEY (id_folder) REFERENCES folder(id)
);

-- Creating 'permisos_folder' table
CREATE TABLE permisos_folder (
  id INT PRIMARY KEY,
  id_folder INT,
  id_departamento INT,
  CONSTRAINT fk_permisos_folder FOREIGN KEY (id_folder) REFERENCES folder(id),
  CONSTRAINT fk_permisos_departamento FOREIGN KEY (id_departamento) REFERENCES departamento(id)
);
