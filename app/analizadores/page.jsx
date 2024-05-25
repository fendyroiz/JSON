'use client'
import React, { useState } from 'react';
import palabras from './alfabeto.js'; 

const Lector = () => {
  const [contenido, setContenido] = useState('');
  const [coincidencias, setCoincidencias] = useState([]);

  const leerArchivo = (e) => {
    const archivo = e.target.files[0];
    if (archivo === null || archivo === undefined) {
      return;
    }

    const lector = new FileReader();

    lector.onload = function (e) {
      const contenido = e.target.result;
      setContenido(contenido);
      const caracteresEnArchivo = contenido.split('');
      const coincidencias = [];

      caracteresEnArchivo.forEach((caracter) => {
        let id;
        // Busca el valor del caracter en el alfabeto y obtiene su número de identificación
        if (caracter === '\n') {
          id = palabras[97]; // [ENTER]
          coincidencias.push({ id, caracter: "[ENTER]" });
        } else if (caracter === '\t') {
          id = palabras[96]; // [TAB]
          coincidencias.push({ id, caracter: "[TAB]" });
        } else if (caracter === ' ') {
          id = palabras[98]; // Espacio
          coincidencias.push({ id, caracter: "[ESPACIO]" });
        } else {
          id = Object.keys(palabras).find(key => palabras[key] === caracter);
          coincidencias.push({ id, caracter });
        }
      });

      setCoincidencias(coincidencias);
    };

    lector.readAsText(archivo);
  };

  const limpiar = () => {
    setContenido('');
    setCoincidencias([]);
  };

  return (
    <div className="flex flex-col m-11">
      <div className="bg-[#fae0e4] p-4 md:p-10 rounded-2xl shadow-[#dd7596] shadow-2xl m-4 md:m-11">
        <h1 className="text-2xl md:text-4xl text-[#f487b6] font-serif text-center">
          En este apartado podrás examinar un archivo y observar su contenido caracter por caracter.
        </h1>
      </div>
      <div>
        <div className="mt-4 md:mt-8">
          <input type="file" id="file-input" onChange={leerArchivo} className="border p-1 rounded-md w-full" />
        </div>

        <div id="contenido-archivo" className="mt-4 md:mt-8">
          <h2>Salida por pantalla:</h2>
          <ul>
            {coincidencias.map((item, index) => (
              <li key={index}>
                {item.id} := {item.caracter}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 md:mt-8">
          <button onClick={limpiar} className="bg-[#ff0a54] text-white px-2 py-1 rounded-md font-serif">
            Limpiar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lector;
