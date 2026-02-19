
import { StudyMaterial, PracticeModule, Quiz, Area } from './types';

export const STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: 'prompt',
    title: 'Módulo: Prompt Engineering',
    description: 'Guía fundamental para dominar el arte de las instrucciones claras y efectivas.',
    topics: ['Anatomía del Prompt (RCT)', 'Few-shot prompting', 'Chain of Thought', 'Uso de delimitadores'],
    links: [
      { title: 'Guía de Estrategias Pro', url: '#' },
      { title: 'Librería de Roles ACOVI', url: '#' }
    ]
  },
  {
    id: 'rag',
    title: 'Módulo: RAG (Generación Aumentada)',
    description: 'Aprende a conectar la IA con la base de conocimiento propia de la cooperativa.',
    topics: ['Base de conocimiento', 'Recuperación vs Generación', 'Indexación de archivos', 'Anclaje de datos'],
    links: [
      { title: 'Guía RAG: Conectando IA con ACOVI', url: 'https://drive.google.com/file/d/1nY04cTMRjpup-vgbF0HZDtxLbg878Z_5/view?usp=sharing' },
      { title: 'Preparación de Documentos', url: '#' }
    ]
  },
  {
    id: 'notebook',
    title: 'Módulo: NotebookLM',
    description: 'Gestión inteligente de fuentes y creación de resúmenes estratégicos.',
    topics: ['Carga de PDFs y Sitios', 'Generación de Notas', 'Audio Overviews (Podcasts)', 'Citas de fuentes'],
    links: [
      { title: 'Tutorial NotebookLM', url: '#' },
      { title: 'Flujos de Investigación', url: '#' }
    ]
  },
  {
    id: 'studio',
    title: 'Módulo: Google AI Studio',
    description: 'Entorno de prototipado rápido para modelos Gemini sin código.',
    topics: ['System Instructions', 'Parámetros (Temperatura, Top-P)', 'Safety Settings', 'Modo Chat vs Freeform'],
    links: [
      { title: 'Audio Tutorial: Intro a AI Studio', url: 'https://drive.google.com/file/d/1UYevo-M4rqyzrJ8uEPVLMEAkrYxxn1fh/view?usp=drive_link' },
      { title: 'Video Tutorial: Uso de la Plataforma', url: 'https://drive.google.com/file/d/1KnpCJMlvRkEoy_WN80yHUBXHLAKGNvkE/view?usp=drive_link' }
    ]
  }
];

export const PRACTICE_MODULES: PracticeModule[] = [
  {
    id: 'p1',
    title: 'Práctica 1: Prompt Engineering',
    objective: 'Diseñar instrucciones que eliminen la ambigüedad y maximicen la calidad de salida mediante estructuras RCT.',
    commonExercise: 'Diseñar un "Prompt Maestro" para redactar correos institucionales de ACOVI con un tono socio-cooperativo, incluyendo un ejemplo de "pocos pasos" (few-shot) para guiar el estilo.',
    complementaryDocs: [
      { title: 'Taxonomía de Verbos', description: 'Verbos de acción para instrucciones precisas.' },
      { title: 'Guía de Delimitadores', description: 'Cómo usar ### y """ para separar contexto.' }
    ]
  },
  {
    id: 'p2',
    title: 'Práctica 2: RAG (Conceptos)',
    objective: 'Comprender cómo anclar respuestas a documentos para evitar alucinaciones y asegurar veracidad.',
    commonExercise: 'Simular la configuración de una base de conocimiento: Toma un fragmento de la normativa de ACOVI y redacta un prompt que obligue a la IA a responder "Solo usando el texto adjunto" citando la fuente.',
    complementaryDocs: [
      { 
        title: 'Infografía: Potencia la IA con RAG', 
        description: 'Visualización sobre el problema de la IA sin contexto y los pasos de búsqueda, selección y generación (Ver: https://drive.google.com/file/d/1OL8Ch0hqEd7MtcjjGNBhG6HbTayCe7GI/view?usp=drive_link)' 
      },
      { title: 'Técnicas de Anclaje', description: 'Cómo evitar que la IA use conocimiento general.' },
      { title: 'Estructuración de Datos', description: 'Preparación de archivos para búsqueda.' }
    ]
  },
  {
    id: 'p3',
    title: 'Práctica 3: NotebookLM',
    objective: 'Transformar múltiples fuentes en conocimiento accionable y resúmenes de audio automáticos.',
    commonExercise: 'Cargar 3 informes de diferentes áreas de la cooperativa en NotebookLM y generar una "Guía de Estudio" que sintetice los desafíos transversales encontrados.',
    complementaryDocs: [
      { title: 'Uso de Audio Overviews', description: 'Guía para generar resúmenes en formato podcast.' },
      { title: 'Gestión de Citas', description: 'Cómo verificar el origen de cada respuesta.' }
    ]
  },
  {
    id: 'p4',
    title: 'Práctica 4: Google AI Studio',
    objective: 'Configurar modelos Gemini con parámetros técnicos para aplicaciones operativas específicas.',
    commonExercise: 'Configurar una "System Instruction" en AI Studio que actúe como un validador de seguridad, y comparar la precisión variando la temperatura de 0.1 a 0.8.',
    complementaryDocs: [
      { title: 'Manual de Parámetros', description: 'Explicación de Temperatura y Top-K.' },
      { title: 'Safety Settings Guide', description: 'Configuración de filtros de contenido.' }
    ]
  }
];

export const LAB_EXERCISES: Record<Area, { title: string; task: string }[]> = {
  'Administración': [
    { title: 'Auditoría Contable', task: 'Crea un prompt que compare una lista de gastos con el manual de viáticos y detecte anomalías.' },
    { title: 'Resumen de Facturas', task: 'Diseña una instrucción para extraer montos, fechas y proveedores de un bloque de texto desordenado.' }
  ],
  'Comunicación': [
    { title: 'Calendario Editorial', task: 'Genera un plan de contenidos de 15 días basado en los hitos históricos de ACOVI.' },
    { title: 'Guion de Podcast', task: 'Crea el script para un micro-podcast de 60 segundos sobre los beneficios del socio cooperativo.' }
  ],
  'Gerencia': [
    { title: 'Análisis FODA IA', task: 'Sube el plan estratégico a NotebookLM y genera un análisis de Fortalezas, Oportunidades, Debilidades y Amenazas.' },
    { title: 'Resumen Ejecutivo', task: 'Diseña un prompt que tome una minuta de reunión y genere 3 puntos de acción claros con responsables.' }
  ],
  'Servicios': [
    { title: 'Asistente Técnico de Campo', task: 'Configura un prompt RAG que responda dudas sobre mantenimiento de bombas de riego usando el manual técnico.' },
    { title: 'Checklist de Seguridad', task: 'Genera una lista de verificación de seguridad industrial basada en la descripción de una tarea de riesgo.' }
  ]
};

export const QUIZZES: Quiz[] = [
  {
    id: 'q1',
    title: 'Quiz 1: Prompt & RAG',
    externalUrl: 'https://gemini.google.com/share/266111b908e1?hl=es_419'
  },
  {
    id: 'q2',
    title: 'Quiz 2: NotebookLM',
    questions: [
      {
        question: '¿Cuál es la fuente de verdad que utiliza NotebookLM para responder?',
        options: ['Wikipedia', 'Los documentos que tú subes como fuentes', 'Google Search en tiempo real', 'Redes Sociales'],
        correctAnswer: 1
      },
      {
        question: '¿Qué función permite generar una conversación entre dos voces de IA analizando tus archivos?',
        options: ['Chatbot', 'Audio Overview', 'Source Citations', 'Notebook Guide'],
        correctAnswer: 1
      },
      {
        question: '¿NotebookLM permite citar la fuente exacta de donde obtuvo la respuesta?',
        options: ['No, solo da el texto', 'Sí, muestra fragmentos de la fuente original', 'Solo si el archivo es un PDF', 'Solo en la versión premium'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'q3',
    title: 'Quiz 3: Google AI Studio',
    externalUrl: 'https://gemini.google.com/share/f1d4ae2c60f9'
  }
];

export const ANTI_PATTERNS = [
  { title: 'Instrucciones Vagas', desc: 'No definir un rol o contexto claro.' },
  { title: 'Sin Delimitadores', desc: 'Mezclar el texto a procesar con las instrucciones.' },
  { title: 'Falta de Verificación', desc: 'Confiar ciegamente en datos numéricos sin revisión humana.' }
];
