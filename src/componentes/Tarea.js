import React from 'react';
import '../hojas-de-estilo/Tarea.css';
import { AiOutlineDelete } from 'react-icons/ai';

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  console.log(id, completada);

  return (
    <>
      <div
        className={
          completada ? 'contenedor-tarea completada' : 'contenedor-tarea'
        }
      >
        <div className="tarea-texto" onClick={() => completarTarea(id)}>
          {texto}
        </div>
        <div
          className="contenedor-tarea-icono"
          onClick={() => eliminarTarea(id, completada)}
        >
          <AiOutlineDelete className="tarea-icono" />
        </div>
      </div>
    </>
  );
}

export default Tarea;
