
import React from 'react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
    { id: 'study', label: 'Material de Estudio', icon: '📚' },
    { id: 'practice', label: 'Práctica', icon: '🎯' },
    { id: 'lab', label: 'Laboratorio', icon: '🧪' },
    { id: 'quiz', label: 'Quiz', icon: '📝' },
    { id: 'security', label: 'Seguridad', icon: '🛡️' }
  ];

  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen p-6 flex flex-col fixed left-0 top-0 z-50 shadow-xl">
      <div className="mb-10 px-2">
        <h1 className="text-2xl font-bold text-blue-400 tracking-tighter">ACOVI IA</h1>
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Capacitación Corporativa</p>
      </div>
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full text-left px-4 py-3 rounded-2xl transition-all flex items-center gap-3 ${
              activeTab === item.id 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40' 
                : 'hover:bg-slate-800 text-slate-400'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-semibold text-sm">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="pt-6 border-t border-slate-800 mt-auto">
        <div className="bg-slate-800/50 p-4 rounded-2xl text-[9px] text-slate-500 text-center font-bold tracking-widest uppercase">
          Google AI Studio Training
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
