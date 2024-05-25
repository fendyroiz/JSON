import React from 'react';
import Image from 'next/image';

export const Page3 = () => {
  return (
    <div style={{ background: '#f0f0f0' }} className="w-full flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-5 text-slate-900">Práctica elaborada por:</h1>

        <div className="border-b-2 border-blue-100 mb-6"></div>

        <div className="mb-4">
          <label className="block text-slate-900 text-sm font-bold mb-2">Nombre:</label>
          <p className="text-gray-800">Fendy Adalahi Roiz Cosio</p>
        </div>

        <div className="mb-4">
          <label className="block text-slate-900 text-sm font-bold mb-2">Semestre:</label>
          <p className="text-gray-800">5SA</p>
        </div>

        <div className="mb-4">
          <label className="block text-slate-900text-sm font-bold mb-2">Carrera:</label>
          <p className="text-gray-800">Ing. Sistemas Computacionales</p>
        </div>

        <div className="mb-4">
          <label className="block text-slate-900 text-sm font-bold mb-2">Materia:</label>
          <p className="text-gray-800">Lenguajes y automatas</p>
        </div>

        <div className="mb-4">
          <label className="block text-slate-900 text-sm font-bold mb-2">No. control:</label>
          <p className="text-gray-800">20760365</p>
        </div>

        <div className="flex items-center justify-center mt-5">
          <Image src={'/jsss.jpeg'} width={100} height={100} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Page3;
