
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ModuleCard from './components/ModuleCard';
import { Area } from './types';
import { MODULES, RESOURCES, ANTI_PATTERNS } from './constants';
import { evaluatePrompt } from './services/aiService';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedArea, setSelectedArea] = useState<Area>('Administración');
  const [promptInput, setPromptInput] = useState('');
  const [evaluation, setEvaluation] = useState('');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [labMode, setLabMode] = useState<'design' | 'rag' | 'quality' | 'template' | 'pilot' | 'debug' | 'coach'>('design');

  const areas: Area[] = ['Administración', 'Comunicación', 'Gerencia', 'Servicios'];

  const handleEvaluate = async () => {
    if (!promptInput.trim()) return;
    setIsEvaluating(true);
    const feedback = await evaluatePrompt(promptInput, selectedArea);
    setEvaluation(feedback);
    setIsEvaluating(false);
  };

  const labModes = [
    { id: 'design', label: '1. Diseño', icon: '✍️', desc: 'Crear Prompts.' },
    { id: 'rag', label: '2. Agentes', icon: '🤖', desc: 'Configurar RAG.' },
    { id: 'quality', label: '3. Auditoría', icon: '🔍', desc: 'Revisar Calidad.' },
    { id: 'template', label: '4. Plantillas', icon: '📋', desc: 'Automatizar.' },
    { id: 'pilot', label: '5. Piloto', icon: '🚀', desc: 'Lanzar Sistema.' },
    { id: 'debug', label: '6. S.O.S', icon: '🛟', desc: 'Solucionar.' },
    { id: 'coach', label: '7. Coach', icon: '🎓', desc: 'Evaluar Entrega.' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="animate-fadeIn">
            <header className="mb-10">
              <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Aula Virtual IA ACOVI-Fecovita</h2>
              <p className="text-lg text-slate-500 mt-2">Capacitación integral: desde el prompt básico hasta la certificación de tus entregables.</p>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
                <div className="text-3xl mb-3">🏗️</div>
                <h3 className="font-bold text-slate-800 text-sm mb-1">Vertex AI Agents</h3>
                <p className="text-[10px] text-slate-500">Inteligencia sobre documentos.</p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
                <div className="text-3xl mb-3">✨</div>
                <h3 className="font-bold text-slate-800 text-sm mb-1">Google AI Studio</h3>
                <p className="text-[10px] text-slate-500">Prototipado rápido.</p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
                <div className="text-3xl mb-3">📓</div>
                <h3 className="font-bold text-slate-800 text-sm mb-1">NotebookLM</h3>
                <p className="text-[10px] text-slate-500">Resúmenes y Podcast IA.</p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
                <div className="text-3xl mb-3">🎓</div>
                <h3 className="font-bold text-slate-800 text-sm mb-1">Certificación</h3>
                <p className="text-[10px] text-slate-500">Proyecto final por área.</p>
              </div>
            </div>

            <div className="bg-slate-900 rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Configura tu Entorno de Aprendizaje</h3>
                <p className="text-slate-400 mb-8 max-w-lg">Al seleccionar tu área, los ejercicios y el Coach de IA adaptarán sus respuestas a tus desafíos diarios.</p>
                <div className="flex flex-wrap gap-4">
                  {areas.map((area) => (
                    <button
                      key={area}
                      onClick={() => setSelectedArea(area)}
                      className={`px-8 py-3 rounded-2xl font-bold transition-all ${
                        selectedArea === area 
                          ? 'bg-blue-600 text-white shadow-xl shadow-blue-900/40 scale-105' 
                          : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'curriculum':
        return (
          <div className="max-w-4xl mx-auto py-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Cronograma Formativo</h2>
            {MODULES.map((m) => (
              <ModuleCard key={m.id} module={m} selectedArea={selectedArea} />
            ))}
          </div>
        );

      case 'resources':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-full">
               <h2 className="text-2xl font-bold mb-6">Materiales de Soporte</h2>
            </div>
            {RESOURCES.map((r, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-xl">
                  {r.type === 'pdf' && '📄'}
                  {r.type === 'doc' && '📝'}
                  {r.type === 'sheet' && '📊'}
                  {r.type === 'audio' && '🔊'}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800">{r.title}</h4>
                  <p className="text-xs text-slate-500">{r.description}</p>
                </div>
                <button className="px-4 py-2 text-blue-600 font-bold text-sm bg-blue-50 rounded-lg hover:bg-blue-100">Descargar</button>
              </div>
            ))}
            <div className="col-span-full mt-12 bg-amber-50 p-8 rounded-3xl border border-amber-200">
               <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                 ⚠️ Anti-patrones y Errores Comunes
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 {ANTI_PATTERNS.map((ap, i) => (
                   <div key={i} className="bg-white p-5 rounded-2xl border border-amber-100 shadow-sm">
                     <h5 className="font-bold text-amber-700 mb-2">{ap.title}</h5>
                     <p className="text-sm text-slate-600 leading-snug">{ap.desc}</p>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        );

      case 'lab':
        return (
          <div className="flex flex-col gap-8 h-[calc(100vh-140px)]">
            <div className="flex gap-4 overflow-x-auto pb-2 shrink-0 no-scrollbar">
              {labModes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => {
                    setLabMode(mode.id as any);
                    setEvaluation('');
                    setPromptInput('');
                  }}
                  className={`flex flex-col items-center justify-center px-4 py-3 rounded-2xl border transition-all min-w-[120px] ${
                    labMode === mode.id 
                      ? 'bg-blue-600 border-blue-600 text-white shadow-lg scale-105 z-10' 
                      : 'bg-white border-slate-200 text-slate-600 hover:border-blue-400'
                  }`}
                >
                  <span className="text-2xl mb-1">{mode.icon}</span>
                  <p className="font-bold text-[10px] uppercase tracking-tighter">{mode.label}</p>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1 overflow-hidden">
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    {labMode === 'coach' ? 'Evaluación Final' : 'Laboratorio de IA'}
                  </h3>
                  <p className="text-xs text-slate-500 italic">Área ACOVI: {selectedArea}</p>
                </div>
                <textarea 
                  className="flex-1 w-full p-6 rounded-2xl border border-slate-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all outline-none resize-none bg-slate-50 text-slate-800 font-medium text-sm"
                  placeholder={
                    labMode === 'coach' ? "MI PROMPT: ...\n\nSALIDA OBTENIDA: ...\n\nMI REFLEXIÓN: ..." :
                    labMode === 'debug' ? "CONTEXTO: ... \nPROMPT: ... \nSALIDA MALA: ..." :
                    labMode === 'pilot' ? "Diseña aquí el mini-sistema que quieres para tu área..." :
                    "Ingresa tu prompt o configuración para analizar..."
                  }
                  value={promptInput}
                  onChange={(e) => setPromptInput(e.target.value)}
                />
                <button 
                  onClick={handleEvaluate}
                  disabled={isEvaluating}
                  className={`mt-4 w-full py-4 rounded-2xl font-bold text-white transition-all shadow-lg flex items-center justify-center gap-2 ${
                    labMode === 'coach' ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200' :
                    labMode === 'debug' ? 'bg-red-600 hover:bg-red-700 shadow-red-200' : 
                    'bg-blue-600 hover:bg-blue-700 shadow-blue-200'
                  }`}
                >
                  {isEvaluating ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>{labMode === 'coach' ? 'Calificar Mi Entrega' : 'Ejecutar Consultoría'}</span>
                      <span>{labMode === 'coach' ? '🎓' : '⚡'}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="bg-slate-900 p-8 rounded-3xl text-white overflow-hidden flex flex-col shadow-2xl">
                <h3 className="text-xl font-bold mb-6 text-blue-400 shrink-0 flex items-center gap-2">
                  <span>💎</span> Feedback Personalizado
                </h3>
                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                  {evaluation ? (
                    <div className="prose prose-invert prose-blue max-w-none animate-fadeIn text-slate-300">
                      <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 space-y-4">
                        {evaluation.split('\n').map((line, i) => {
                          const trimmedLine = line.trim();
                          if (trimmedLine.startsWith('|')) {
                            return <div key={i} className="font-mono text-[10px] overflow-x-auto whitespace-pre py-2 border-b border-slate-700 text-blue-200">{line}</div>;
                          }
                          if (trimmedLine.startsWith('#')) {
                            const colorClass = trimmedLine.includes('📊') ? 'text-emerald-400' : 'text-blue-400';
                            return <h4 key={i} className={`text-lg font-bold mt-8 mb-2 border-l-4 border-current pl-3 uppercase tracking-tighter ${colorClass}`}>{trimmedLine.replace(/#/g, '').trim()}</h4>;
                          }
                          if (trimmedLine.startsWith('```')) return null;
                          if (trimmedLine === '') return null;
                          
                          const parts = trimmedLine.split(/(\[[A-Z_]+\])/);
                          return (
                            <p key={i} className="leading-relaxed mb-2 text-sm">
                              {parts.map((part, idx) => 
                                part.startsWith('[') && part.endsWith(']') 
                                  ? <span key={idx} className="bg-blue-500/30 text-blue-300 px-1 rounded font-bold">{part}</span>
                                  : part
                              )}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-slate-500 text-center px-10">
                      <div className="text-6xl mb-6 opacity-20">{labMode === 'coach' ? '📖' : '💡'}</div>
                      <p className="text-lg font-medium text-slate-400">Resultados del Análisis</p>
                      <p className="text-xs italic mt-2">
                        Utiliza este espacio para validar tus ideas antes de implementarlas en el entorno real de ACOVI.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case 'project':
        return (
          <div className="max-w-4xl mx-auto py-8">
            <header className="mb-10 text-center">
               <h2 className="text-4xl font-bold text-slate-900 mb-2">🏆 Proyecto Integrador</h2>
               <p className="text-slate-500">Diseña una solución real para tu área en la cooperativa.</p>
            </header>
            
            <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm">
               <div className="flex gap-4 items-center mb-8 border-b border-slate-100 pb-6">
                 <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl">🧩</div>
                 <div>
                   <h3 className="text-xl font-bold text-slate-800">Objetivo del Proyecto</h3>
                   <p className="text-sm text-slate-500">Integrar Prompt Engineering, RAG y NotebookLM.</p>
                 </div>
               </div>
               
               <div className="space-y-6">
                 <div className="p-6 bg-slate-50 rounded-2xl">
                    <h4 className="font-bold text-blue-600 mb-2 uppercase text-xs tracking-widest">Desafío para {selectedArea}</h4>
                    <p className="text-slate-700">
                      {selectedArea === 'Administración' && "Implementar un sistema de auditoría automatizada que analice recibos y los compare con la normativa interna subida a un Agente RAG."}
                      {selectedArea === 'Comunicación' && "Crear un 'Hub de Prensa Inteligente' que genere comunicados basados en audios de campo y los valide con el manual de identidad de ACOVI."}
                      {selectedArea === 'Gerencia' && "Diseñar un consultor estratégico que sintetice informes de mercado con datos propios de la cooperativa usando Vertex AI Agents."}
                      {selectedArea === 'Servicios' && "Desarrollar una 'Base de Conocimiento Hidráulico' donde los operarios consulten soluciones técnicas basadas en manuales históricos."}
                    </p>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="border border-slate-200 p-6 rounded-2xl">
                     <h5 className="font-bold mb-3 text-slate-800">Checklist de Entrega</h5>
                     <ul className="text-sm space-y-2 text-slate-500">
                       <li className="flex items-center gap-2">✅ Prompt optimizado</li>
                       <li className="flex items-center gap-2">✅ Configuración del Agente</li>
                       <li className="flex items-center gap-2">✅ Documentación de fuentes</li>
                       <li className="flex items-center gap-2">✅ Guía de uso para colegas</li>
                     </ul>
                   </div>
                   <div className="bg-blue-600 p-6 rounded-2xl text-white">
                     <h5 className="font-bold mb-2">¿Necesitas Ayuda?</h5>
                     <p className="text-xs text-blue-100 mb-4 leading-relaxed">Usa el modo "Pilot" en el Laboratorio para que el consultor te ayude a diseñar el flujo completo.</p>
                     <button onClick={() => setActiveTab('lab')} className="w-full py-2 bg-white text-blue-600 rounded-xl font-bold text-sm">Ir al Laboratorio</button>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="max-w-3xl mx-auto bg-white p-12 rounded-3xl border border-slate-200 shadow-sm">
             <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
               <span className="text-4xl">🛡️</span> Gobernanza y Seguridad
             </h2>
             <div className="space-y-8 text-slate-600">
               <section>
                 <h4 className="text-xl font-bold text-slate-800 mb-3">Privacidad Garantizada</h4>
                 <p className="leading-relaxed">
                   Estamos operando bajo el marco de <strong>Google Cloud Vertex AI</strong> Enterprise. Tus datos no se comparten fuera del proyecto de ACOVI y no se utilizan para entrenar modelos públicos.
                 </p>
               </section>
               <section className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                 <h4 className="text-lg font-bold text-blue-900 mb-2">💡 Buenas Prácticas</h4>
                 <ul className="text-sm space-y-2 text-blue-800 list-disc ml-5">
                   <li>Anonimiza DNIs y datos bancarios antes de subirlos a AI Studio.</li>
                   <li>Siempre pide a la IA que cite la fuente para evitar alucinaciones.</li>
                   <li>Verifica con un humano cualquier salida que implique toma de decisiones financieras.</li>
                 </ul>
               </section>
             </div>
          </div>
        );

      default:
        return <div className="p-10 text-center text-slate-400 italic">Módulo bajo desarrollo.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 ml-64 p-10">
        <div className="max-w-6xl mx-auto">
          {renderContent()}
        </div>
      </main>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #0f172a; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #475569; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default App;
