
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import PracticeCard from './components/ModuleCard';
import { Area, Quiz, StudyMaterial, PracticeModule } from './types';
import { STUDY_MATERIALS, PRACTICE_MODULES, LAB_EXERCISES, QUIZZES, ANTI_PATTERNS } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedArea, setSelectedArea] = useState<Area>('Administración');
  
  // Quiz State
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const [quizResults, setQuizResults] = useState<{ score: number; finished: boolean } | null>(null);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  const areas: Area[] = ['Administración', 'Comunicación', 'Gerencia', 'Servicios'];

  const startQuiz = (quiz: Quiz) => {
    if (quiz.externalUrl) {
      window.open(quiz.externalUrl, '_blank');
      return;
    }
    setCurrentQuiz(quiz);
    setQuizResults(null);
    if (quiz.questions) {
      setUserAnswers(new Array(quiz.questions.length).fill(-1));
    }
    setActiveTab('quiz-view');
  };

  const handleQuizSubmit = () => {
    if (!currentQuiz || !currentQuiz.questions) return;
    let score = 0;
    currentQuiz.questions.forEach((q, i) => {
      if (userAnswers[i] === q.correctAnswer) score++;
    });
    setQuizResults({ score, finished: true });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="animate-fadeIn">
            <header className="mb-12">
              <h2 className="text-5xl font-extrabold text-slate-900 tracking-tight">Bienvenido a la Aula IA ACOVI</h2>
              <p className="text-xl text-slate-500 mt-4">Plataforma de capacitación estratégica para el ecosistema cooperativo.</p>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { id: 'prompt', title: 'Prompt Engineering', icon: '✍️', desc: 'Diseño de instrucciones.', tab: 'practice' },
                { id: 'rag', title: 'RAG', icon: '📚', desc: 'Anclaje de datos propios.', tab: 'practice' },
                { id: 'notebook', title: 'NotebookLM', icon: '📓', desc: 'Gestión de conocimiento.', tab: 'practice' },
                { id: 'studio', title: 'Google AI Studio', icon: '✨', desc: 'Prototipado Gemini.', tab: 'practice' },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setActiveTab(btn.tab)}
                  className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-200 text-left hover:shadow-xl hover:-translate-y-1 transition-all group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{btn.icon}</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{btn.title}</h3>
                  <p className="text-sm text-slate-500">{btn.desc}</p>
                </button>
              ))}
            </div>

            <div className="bg-slate-900 rounded-[40px] p-12 text-white relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-6">Configuración de Perfil</h3>
                  <p className="text-slate-400 text-lg mb-8 max-w-lg">Selecciona tu área para adaptar los ejercicios del Laboratorio a tus necesidades en ACOVI.</p>
                  <div className="flex flex-wrap gap-4">
                    {areas.map((area) => (
                      <button
                        key={area}
                        onClick={() => setSelectedArea(area)}
                        className={`px-8 py-3 rounded-2xl font-bold transition-all ${
                          selectedArea === area 
                            ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/40 scale-105' 
                            : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                        }`}
                      >
                        {area}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="hidden lg:block text-8xl opacity-10">🧠</div>
              </div>
            </div>
          </div>
        );

      case 'study':
        return (
          <div className="max-w-4xl mx-auto py-8 animate-fadeIn">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Material de Estudio por Módulos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {STUDY_MATERIALS.map((mat) => (
                <div key={mat.id} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{mat.title}</h3>
                  <p className="text-sm text-slate-500 mb-6">{mat.description}</p>
                  <div className="flex-1 space-y-2 mb-8">
                    {mat.topics.map((t, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        {t}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {mat.links.map((link, idx) => (
                      <a key={idx} href={link.url} className="block w-full py-2 text-center text-xs font-bold text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                        {link.title} ↗
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'practice':
        return (
          <div className="max-w-4xl mx-auto py-8 animate-fadeIn">
            <header className="mb-10">
              <h2 className="text-3xl font-bold text-slate-900">Módulos de Práctica</h2>
              <p className="text-slate-500 mt-2">Ejercicios fundamentales aplicables a toda la cooperativa.</p>
            </header>
            {PRACTICE_MODULES.map((m) => (
              <PracticeCard key={m.id} module={m} />
            ))}
          </div>
        );

      case 'lab':
        return (
          <div className="max-w-4xl mx-auto py-8 animate-fadeIn">
            <header className="mb-10">
              <h2 className="text-3xl font-bold text-slate-900">Laboratorio: Ejercicios Extras</h2>
              <p className="text-slate-500 mt-2">Prácticas especializadas para el área de <strong>{selectedArea}</strong>.</p>
            </header>
            <div className="grid grid-cols-1 gap-6">
              {LAB_EXERCISES[selectedArea].map((ex, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
                  <h4 className="font-bold text-slate-800 mb-3">{ex.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{ex.task}</p>
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <textarea 
                      className="w-full h-32 p-4 rounded-xl border border-slate-300 focus:ring-4 focus:ring-blue-100 outline-none bg-white text-sm"
                      placeholder="Escribe tu prompt aquí como ejercicio..."
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'quiz':
        return (
          <div className="max-w-4xl mx-auto py-8 animate-fadeIn">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Certificación: Quizzes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {QUIZZES.map((q) => (
                <div key={q.id} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center flex flex-col items-center">
                  <div className="text-5xl mb-6">📝</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-6">{q.title}</h3>
                  {q.externalUrl ? (
                    <a 
                      href={q.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors block text-center"
                    >
                      Iniciar Prueba ↗
                    </a>
                  ) : (
                    <button 
                      onClick={() => startQuiz(q)}
                      className="mt-auto w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
                    >
                      Iniciar Prueba
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 'quiz-view':
        if (!currentQuiz || !currentQuiz.questions) return null;
        return (
          <div className="max-w-2xl mx-auto py-8 animate-fadeIn">
            <button onClick={() => setActiveTab('quiz')} className="text-blue-600 font-bold mb-6 hover:underline flex items-center gap-2">
              <span>←</span> Volver a Quizzes
            </button>
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-slate-900 p-8 text-white text-center">
                <h3 className="text-2xl font-bold">{currentQuiz.title}</h3>
                <p className="text-slate-400 text-sm mt-1">Lee cada pregunta con atención.</p>
              </div>
              <div className="p-10 space-y-12">
                {currentQuiz.questions.map((q, idx) => (
                  <div key={idx} className="space-y-5">
                    <p className="font-bold text-lg text-slate-800">{idx + 1}. {q.question}</p>
                    <div className="space-y-3">
                      {q.options.map((opt, optIdx) => (
                        <button
                          key={optIdx}
                          disabled={quizResults?.finished}
                          onClick={() => {
                            const newAnswers = [...userAnswers];
                            newAnswers[idx] = optIdx;
                            setUserAnswers(newAnswers);
                          }}
                          className={`w-full text-left p-5 rounded-2xl border transition-all ${
                            userAnswers[idx] === optIdx 
                              ? 'bg-blue-50 border-blue-400 text-blue-800 font-bold shadow-sm' 
                              : 'bg-white border-slate-200 text-slate-600 hover:border-blue-200'
                          } ${
                            quizResults?.finished && optIdx === q.correctAnswer ? 'bg-emerald-50 border-emerald-500 text-emerald-800' : ''
                          } ${
                            quizResults?.finished && userAnswers[idx] === optIdx && optIdx !== q.correctAnswer ? 'bg-red-50 border-red-500 text-red-800' : ''
                          }`}
                        >
                          <div className="flex items-center gap-3">
                             <span className="text-xs opacity-50 font-mono">{String.fromCharCode(65 + optIdx)})</span>
                             <span>{opt}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                
                {quizResults?.finished ? (
                  <div className="bg-slate-900 text-white p-10 rounded-[32px] text-center shadow-xl">
                    <h4 className="text-2xl font-bold mb-3">Evaluación Finalizada</h4>
                    <div className="mb-6">
                      <p className="text-6xl font-black text-blue-400">{quizResults.score} / {currentQuiz.questions.length}</p>
                      <p className="text-slate-400 mt-2 font-medium">Preguntas correctas</p>
                    </div>
                    <button onClick={() => setActiveTab('quiz')} className="px-12 py-3 bg-blue-600 rounded-2xl font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all">Aceptar y Finalizar</button>
                  </div>
                ) : (
                  <button 
                    onClick={handleQuizSubmit}
                    className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 shadow-lg shadow-emerald-500/20 transition-all"
                  >
                    Finalizar y Ver Calificación
                  </button>
                )}
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="max-w-3xl mx-auto bg-white p-12 rounded-[40px] border border-slate-200 shadow-sm animate-fadeIn">
             <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
               <span className="text-4xl">🛡️</span> Seguridad de la Información
             </h2>
             <div className="space-y-8 text-slate-600">
               <section>
                 <h4 className="text-xl font-bold text-slate-800 mb-3">Normativa de Uso Seguro</h4>
                 <p className="leading-relaxed text-sm">
                   En ACOVI priorizamos la seguridad de nuestros socios. Al utilizar herramientas como Google AI Studio o NotebookLM, <strong>nunca compartas información confidencial</strong> como:
                 </p>
                 <ul className="list-disc ml-5 mt-4 space-y-2 text-sm text-slate-500">
                    <li>DNIs o datos personales de socios sin consentimiento.</li>
                    <li>Presupuestos financieros no aprobados.</li>
                    <li>Estrategias comerciales críticas no publicadas.</li>
                 </ul>
               </section>
               <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100">
                 <h4 className="text-lg font-bold text-amber-900 mb-2">Recomendación</h4>
                 <p className="text-sm text-amber-800 leading-relaxed font-medium">
                   Utiliza siempre técnicas de anonimización: reemplaza nombres reales por "Persona A" o montos específicos por "Monto X" al probar tus prompts.
                 </p>
               </div>
             </div>
          </div>
        );

      default:
        return <div className="p-10 text-center text-slate-400 italic">Módulo no encontrado.</div>;
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
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default App;
