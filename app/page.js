import React from 'react';

function Page() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-4'>JSON</h1>
      <div className='bg-white shadow-md rounded px-8 py-6'>
        <p className='text-lg mb-4'>JSON (JavaScript Object Notation - Notación de Objetos de JavaScript) es un formato ligero de intercambio de datos. Leerlo y escribirlo es simple para humanos, mientras que para las máquinas es simple interpretarlo y generarlo. Está basado en un subconjunto del Lenguaje de Programación JavaScript, Standard ECMA-262 3rd Edition - Diciembre 1999. JSON es un formato de texto que es completamente independiente del lenguaje pero utiliza convenciones que son ampliamente conocidos por los programadores de la familia de lenguajes C, incluyendo C, C++, C#, Java, JavaScript, Perl, Python, y muchos otros. Estas propiedades hacen que JSON sea un lenguaje ideal para el intercambio de datos.</p>
        <div className='mb-4'>
          <p className='font-semibold'>JSON está constituído por dos estructuras:</p>
          <ul className='list-disc pl-8'>
            <li>Una colección de pares de nombre/valor. En varios lenguajes esto es conocido como un objeto, registro, estructura, diccionario, tabla hash, lista de claves o un arreglo asociativo.</li>
            <li>Una lista ordenada de valores. En la mayoría de los lenguajes, esto se implementa como arreglos, vectores, listas o secuencias.</li>
          </ul>
        </div>
        <p className='mb-4'>Estas son estructuras universales; virtualmente todos los lenguajes de programación las soportan de una forma u otra. Es razonable que un formato de intercambio de datos que es independiente del lenguaje de programación se base en estas estructuras.</p>
        <p>JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos que es fácil de leer y escribir para los humanos y fácil de analizar y generar para las máquinas. Se basa en un formato de texto plano y se utiliza comúnmente para transmitir datos estructurados a través de una conexión de red.</p>
        <img src="datoss.png" alt="Datos" className="mt-4 mx-auto" />
      </div>
    </div>
  );
}

export default Page;
