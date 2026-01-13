
import React from 'react';
import { Module, Area } from '../types';

interface ModuleCardProps {
  module: Module;
  selectedArea: Area;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, selectedArea }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
        <div className="flex justify-between items-center mb-2">
          <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold uppercase tracking-wider">
            Semana {module.week} - {module.day}
          </span>
          <span className="text-blue-100 text-sm italic">{module.topic}</span>
        </div>
        <h3 className="text-2xl font-bold">{module.title}</h3>
      </div>
      
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">1</span>
            Teoría Breve (15 min)
          </h4>
          <ul className="space-y-3">
            {module.theory.map((t, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                {t}
              </li>
            ))}
          </ul>

          <h4 className="text-lg font-bold text-slate-800 mt-8 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm">2</span>
            Demo Guiada
          </h4>
          <ol className="space-y-3">
            {module.demo.map((d, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                <span className="font-bold text-indigo-400">{i + 1}.</span>
                {d}
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
          <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm">3</span>
            Práctica Principal: {selectedArea}
          </h4>
          <p className="text-slate-700 leading-relaxed mb-6">
            {module.practice[selectedArea]}
          </p>

          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm mb-6">
            <h5 className="text-xs font-bold text-slate-400 uppercase mb-2">Desafío Avanzado (Opcional)</h5>
            <p className="text-sm text-slate-600 italic">{module.advancedPractice}</p>
          </div>

          <h4 className="text-sm font-bold text-slate-800 mb-2 uppercase tracking-tighter">Criterios de Evaluación</h4>
          <div className="flex flex-wrap gap-2">
            {module.rubric.map((r, i) => (
              <span key={i} className="px-3 py-1 bg-slate-200 text-slate-700 rounded-md text-[10px] font-bold">
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
