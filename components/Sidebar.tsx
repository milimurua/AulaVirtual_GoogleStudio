
import React from 'react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard Principal', icon: '🏠' },
    { id: 'curriculum', label: 'Cronograma y Módulos', icon: '📚' },
    { id: 'resources', label: 'Banco de Recursos', icon: '📂' },
    { id: 'lab', label: 'Laboratorio de Práctica', icon: '🧪' },
    { id: 'project', label: 'Proyecto Integrador', icon: '🏆' },
    { id: 'security', label: 'Seguridad y Privacidad', icon: '🛡️' }
  ];

  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen p-6 flex flex-col fixed left-0 top-0">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-blue-400">ACOVI AI</h1>
        <p className="text-xs text-slate-400">Campus Virtual de Innovación</p>
      </div>
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
              activeTab === item.id 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'hover:bg-slate-800 text-slate-300'
            }`}
          >
            <span>{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="pt-6 border-t border-slate-800 mt-auto">
        <div className="bg-slate-800 p-4 rounded-xl text-xs text-slate-400">
          Powered by <strong>Google Cloud</strong>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
