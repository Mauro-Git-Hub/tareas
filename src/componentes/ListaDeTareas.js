import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import '../hojas-de-estilo/ListaDeTareas.css';
import Tarea from './Tarea';

function ListaDeTareas() {
  const [tareas, setTarea] = useState([]);

  const agregarTarea = (tarea) => {
    console.log(tarea);
    if (tarea.texto.trim()) {
      /*tarea.texto=tarea.texto.trim();*/

      const tareasActualizadas = [...tareas, tarea];
      setTarea(tareasActualizadas);
    }
  };

  const eliminarTarea = (id, completada) => {
    console.log('Eliminando tarea');
    if (completada) {
      const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
      setTarea(tareasActualizadas);
    } else {
      console.log(
        'No se puede eliminar la tarea porque no se ha completado aun...'
      );
    }
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTarea(tareasActualizadas);
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tarea-formulario">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
          />
        ))}
      </div>
    </>
  );
}

export default ListaDeTareas;
