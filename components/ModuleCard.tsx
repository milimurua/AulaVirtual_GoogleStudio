
import React from 'react';
import { PracticeModule } from '../types';

interface PracticeCardProps {
  module: PracticeModule;
}

const PracticeCard: React.FC<PracticeCardProps> = ({ module }) => {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden mb-8 transition-all hover:shadow-md">
      <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
        <h3 className="text-xl font-bold">{module.title}</h3>
        <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Módulo Práctico</span>
      </div>
      
      <div className="p-8 space-y-6">
        <div>
          <h4 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Objetivo</h4>
          <p className="text-slate-700 text-sm leading-relaxed">{module.objective}</p>
        </div>

        <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl">
          <h4 className="text-sm font-bold text-blue-800 uppercase tracking-widest mb-3 flex items-center gap-2">
            <span>🏋️</span> Ejercicio de Práctica (Común)
          </h4>
          <p className="text-slate-800 text-sm italic font-medium">"{module.commonExercise}"</p>
        </div>

        <div>
          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Documentación Complementaria</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {module.complementaryDocs.map((doc, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <h5 className="text-xs font-bold text-slate-800 mb-1">{doc.title}</h5>
                <p className="text-[11px] text-slate-500 leading-snug">{doc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeCard;
