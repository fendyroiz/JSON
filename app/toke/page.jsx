'use client'
import React, { useState } from 'react';

function downloadFile(content, filename) {
  const blob = new Blob([content], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
}

const AnalizadorLex = () => {
  const [operador, setOperador] = useState('');
  const [texto, setTexto] = useState('');
  const [cont, setCont] = useState(0);
  const [resultadoVisible, setResultadoVisible] = useState(false);
  const [conteoTokens, setConteoTokens] = useState({});

  const Llaves = ["{", "}"];
  const corchetes = ["[", "]"];
  const puntos = ["."];
  const coma = [","];
  const reservadas = [
    "auto", "break", "case", "char", "const", "continue", "default",
    "do", "double", "else", "enum", "extern", "float", "for", "goto",
    "if", "int", "long", "register", "return", "short", "signed", "sizeof",
    "static", "struct", "switch", "typedef", "union", "unsigned", "void", "volatile", "while", "main", "printf", "scanf"
  ];

 
  const procesarContenido = (content) => {
    
    // Eliminar comentarios de bloque
    content = content.replace(/\/\*[\s\S]*?\*\//g, '');

    // Eliminar comentarios de línea
    content = content.replace(/\/\/.*$/gm, '');
    content = content.split('')
    

    let newContent = [];
    let conteoActualizado = { ...conteoTokens };
    let currentToken = '';

    for (const char of content) {
        
        if (/[\|\&\!\>\<\=\(\)\{\}\[\]\+\-\*\/\%\,\;]/.test(char)) {
            if (currentToken !== '') {
                
                clasificarToken(currentToken, newContent, conteoActualizado);
                currentToken = '';
            }

            
            clasificarOperador(char, newContent, conteoActualizado);
        } else if (/\s/.test(char)) {
            
            if (currentToken !== '') {
                clasificarToken(currentToken, newContent, conteoActualizado);
                currentToken = '';
            }
        } else {
            
            currentToken += char;

        }
    }

    // Clasificar el último token si existe
    if (currentToken !== '') {
        clasificarToken(currentToken, newContent, conteoActualizado);
    }

    newContent = newContent.join('\n');
    setOperador(newContent);
    setCont(newContent.split('').length);
    setResultadoVisible(true);
    setConteoTokens(conteoActualizado);

    downloadFile(newContent, 'nuevo_archivo.txt');
};

const clasificarOperador = (operador, newContent, conteoActualizado) => {
    if (Llaves.includes(operador)) {
        clasificarToken(operador, newContent, conteoActualizado, 'llaves');
    } else if (corchetes.includes(operador)) {
        clasificarToken(operador, newContent, conteoActualizado, 'corchetes');
    } else if (puntos.includes(operador)) {
        clasificarToken(operador, newContent, conteoActualizado, 'puntos');
    } else if (coma.includes(operador)) {
        clasificarToken(operador, newContent, conteoActualizado, 'coma');
    } else {
        clasificarToken(operador, newContent, conteoActualizado, 'alfabeto');
    }
};

// Modificar la función clasificarToken para recibir el tipo específico
const clasificarToken = (token, newContent, conteoActualizado, tipoToken) => {
  if (!token.startsWith('//') && !token.startsWith('/*')) {
      // Verificar si el token es un punto y clasificarlo como coma (C)
      if (token === '.') {
          tipoToken = 'C';
      } else if (reservadas.includes(token)) {
          tipoToken = 'PR';
      } else if (!tipoToken) {
          tipoToken = 'ID';
      }

      newContent.push(`${token} - ${tipoToken}`);
      conteoActualizado[tipoToken] = (conteoActualizado[tipoToken] || 0) + 1;
  }
}; 

  const leerArchivo = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        let content = e.target.result;
        procesarContenido(content);
      };
      reader.onerror = (e) => {
        console.error('Error al leer el archivo.', e);
      };
      reader.readAsText(file);
    }
  };

  const handleTextArea = (e) => {
    setTexto(e.target.value);
  };

  const handleAnalizarClick = () => {
    procesarContenido(texto);
  };

  const limpiar = () => {
    setResultadoVisible(false);
    setConteoTokens({});
  };

  return (
    <div style={{ textAlign: 'center' }}>
     <div className="bg-[#fae0e4] p-4 md:p-10 rounded-2xl shadow-[#dd7596] shadow-2xl m-4 md:m-11">
        <h1 className="text-2xl md:text-4xl text-[#f487b6] font-serif text-center">
          En este apartado podrás examinar un archivo JSON y contemprar sus tokens.
        </h1>
      </div>

      <div className="mt-4 md:mt-8">
        <textarea
          value={texto}
          onChange={handleTextArea}
          placeholder="Ingresa tu texto aquí"
          className="border p-1 rounded-md w-full"
          rows="5"
        />
      </div>
      <div className="mt-4 md:mt-8">
        <input type="file" id="file-input" onChange={leerArchivo} className="border p-1 rounded-md w-full" />
      </div>

      <div className="mt-4 md:mt-8 flex flex-col md:flex-row md:items-center md:justify-between">
      {resultadoVisible && (
  <div>

    <div>
      <strong>Conteo de Tokens:</strong>
      {(() => {
        const elementos = [];

        // Iterar sobre todas las claves del objeto conteoTokens
        for (const [tipoToken, count] of Object.entries(conteoTokens)) {
          elementos.push(
            <div key={tipoToken}>
              {tipoToken}: {count}
            </div>
          );
        }

        return elementos;
      })()}
    </div>
    <strong>Resultado:</strong>
    <pre>{operador}</pre>
    <strong>Total:</strong> {cont}
    
  </div>
)}



        <button onClick={handleAnalizarClick} className="bg-[#ff0a54] text-white px-2 py-1 rounded-md mt-2 md:mt-0 md:ml-2 font-serif w-full md:w-[11%]">
          Analizar Texto
        </button>
        <button onClick={limpiar} className="bg-[#ff0a54] text-white px-2 py-1 rounded-md mt-2 md:mt-0 md:ml-2 font-serif w-full md:w-[11%]">
          Limpiar
        </button>
      </div>
    </div>
  );
};

export default AnalizadorLex;


