
import React from 'react';
import { Module, Resource } from './types';

export const MODULES: Module[] = [
  {
    id: 'm1',
    week: 1,
    day: 'Martes',
    title: 'Fundamentos y Prompt Engineering',
    topic: 'Google AI Studio & Gemini',
    theory: [
      'Modelos Mentales: La IA como un pasante brillante pero sin contexto.',
      'Anatomía del Prompt Profesional: Rol, Contexto, Tarea, Restricciones y Formato.',
      'Técnicas: Chain of Thought (paso a paso) y Few-Shot (ejemplos).',
      'Configuraciones críticas: Temperatura (0.2 para reportes, 0.8 para creatividad).'
    ],
    demo: [
      'Interfaz de Google AI Studio: System Instructions vs User Prompt.',
      'Uso de "Stop Sequences" para control de salida.',
      'Configuración de "Safety Settings" para entorno corporativo.',
      'Prueba de modelos: Gemini 1.5 Flash vs Pro.'
    ],
    practice: {
      'Administración': 'Diseñar un evaluador de cumplimiento de políticas de viáticos en tickets de gastos.',
      'Comunicación': 'Crear un generador de "Tone of Voice" para adaptar comunicados técnicos a lenguaje socio-cooperativo.',
      'Gerencia': 'Estructurar un analizador de riesgos en propuestas comerciales externas.',
      'Servicios': 'Asistente de diagnóstico de anomalías en pozos basado en descripciones sensoriales del operario.'
    },
    advancedPractice: 'Crear un prompt que genere un archivo JSON estructurado para alimentar un dashboard de PowerBI/Sheets.',
    rubric: ['Claridad de Instrucciones', 'Uso de Delimitadores', 'Control de Formato']
  },
  {
    id: 'm2',
    week: 1,
    day: 'Jueves',
    title: 'RAG y Agentes Inteligentes',
    topic: 'Vertex AI Build -> Agents',
    theory: [
      'El problema de la alucinación y cómo RAG (Retrieval-Augmented Generation) lo soluciona.',
      'Fuentes de Conocimiento: Gestión de archivos en Google Cloud Storage.',
      'Configuración de Alcance: Forzar al modelo a decir "No lo sé" si no está en la fuente.',
      'Gobernanza de Datos: Privacidad en el entorno empresarial de Google.'
    ],
    demo: [
      'Vertex AI Agent Builder: Creación del Data Store.',
      'Importación de documentos (PDF/Docx) y validación de chunking.',
      'Configuración del Agente: Instrucciones de respuesta basadas en evidencia.',
      'Testing en el Preview Pane: Verificación de citas.'
    ],
    practice: {
      'Administración': 'Agente de consulta sobre el Convenio Colectivo de Trabajo y Normativa Interna.',
      'Comunicación': 'Repositorio inteligente de Gacetillas y Manuales de Crisis históricos.',
      'Gerencia': 'Consultor de Plan Estratégico ACOVI 2024-2027.',
      'Servicios': 'Manual interactivo de mantenimiento preventivo de maquinaria de riego.'
    },
    advancedPractice: 'Configurar el agente para que diferencie respuestas según el perfil del usuario (Operario vs Supervisor).',
    rubric: ['Calidad de la Fuente', 'Ausencia de Alucinaciones', 'Uso de Citas']
  },
  {
    id: 'm3',
    week: 3,
    day: 'Martes',
    title: 'NotebookLM y Análisis Profundo',
    topic: 'Síntesis y Formación Continua',
    theory: [
      'NotebookLM: Tu cuaderno inteligente con fuentes ancladas.',
      'De audio a insight: Procesamiento de grabaciones de reuniones (Meet/MP3).',
      'Creación de Guías de Estudio personalizadas para inducción de personal.',
      'Actividad Creativa: Generación de Podcast de resumen semanal (Audio Overview).'
    ],
    demo: [
      'Crear un Notebook y subir múltiples fuentes (Docs, PDFs, URLs).',
      'Generar el "Deep Dive Audio" para comunicar resultados de auditoría.',
      'Uso de la "Notebook Guide" para generar FAQs automáticamente.',
      'Anclaje de notas compartidas para colaboración entre áreas.'
    ],
    practice: {
      'Administración': 'Convertir 10 normativas contables complejas en una guía de bolsillo para nuevos ingresos.',
      'Comunicación': 'Analizar 5 entrevistas a socios para extraer sentimientos y temas recurrentes.',
      'Gerencia': 'Subir audios de reuniones de directorio y generar actas resumidas con responsables asignados.',
      'Servicios': 'Crear un programa de auto-capacitación sobre nuevas tecnologías de riego para el equipo de campo.'
    },
    advancedPractice: 'Generar un guion de video explicativo de 2 minutos sobre "Seguridad Hídrica" basado en el manual técnico.',
    rubric: ['Síntesis de Información', 'Calidad de Preguntas de Seguimiento', 'Utilidad del Formato de Salida']
  },
  {
    id: 'm4',
    week: 3,
    day: 'Jueves',
    title: 'Proyecto Integrador y Cierre',
    topic: 'Implementación Final',
    theory: [
      'Checklist de Puesta en Producción: Precisión, Seguridad y Ética.',
      'Mantenimiento de Agentes: Cuándo actualizar las fuentes de conocimiento.',
      'Ciclo de Feedback: Cómo el usuario reporta errores de la IA.',
      'Próximos pasos: Roadmap de IA en ACOVI.'
    ],
    demo: [
      'Revisión final de los agentes creados en la Semana 1 y 2.',
      'Simulación de "Stress Test" con preguntas complejas.',
      'Exportación y compartición del agente con el equipo de área.',
      'Cierre del curso y entrega de certificados digitales.'
    ],
    practice: {
      'Administración': 'Sistema integral de Auditoría de Gastos: Prompt + Agente RAG Normativo.',
      'Comunicación': 'Hub de Generación de Contenido: Prompt Estratégico + Notebook de Prensa.',
      'Gerencia': 'Dashboard de Decisiones: Análisis de datos con Gemini Pro + Agente de Planificación.',
      'Servicios': 'Asistente Técnico 360°: Agente RAG de Manuales + Guía NotebookLM de Campo.'
    },
    advancedPractice: 'Diseñar un plan de escalabilidad para que el proyecto sea usado por toda la cooperativa.',
    rubric: ['Integración de Herramientas', 'Viabilidad de Negocio', 'Cumplimiento Ético']
  }
];

export const RESOURCES: Resource[] = [
  { title: 'Manual_Operativo_Hídrico.pdf', type: 'pdf', description: 'Datos técnicos para Agentes de Servicios.' },
  { title: 'Presupuesto_Q3_Simulado.csv', type: 'sheet', description: 'Datos para análisis en AI Studio.' },
  { title: 'Politica_Privacidad_Datos.docx', type: 'doc', description: 'Lectura obligatoria sobre seguridad empresarial.' },
  { title: 'Entrevista_Mercado_Vino.mp3', type: 'audio', description: 'Audio para práctica de resumen con NotebookLM.' },
  { title: 'Plan_Estrategico_ACOVI.pdf', type: 'pdf', description: 'Documento base para RAG en Gerencia.' },
  { title: 'Guia_Prompt_Engineering_Avanzado.pdf', type: 'pdf', description: 'Cheat-sheet para prompts profesionales.' }
];

export const ANTI_PATTERNS = [
  { title: 'Vigorexia de Prompt', desc: 'Pedir 50 cosas en un solo párrafo. Solución: Dividir en pasos (Chain of Thought).' },
  { title: 'Falta de Ejemplo', desc: 'No dar ejemplos del formato deseado. Solución: Few-shot prompting (Dar 2 o 3 ejemplos).' },
  { title: 'Confianza Ciega', desc: 'No verificar cálculos o datos técnicos. Solución: Usar la IA para revisar y un humano para validar.' },
  { title: 'Prompt Genérico', desc: 'Usar "Ayúdame con esto". Solución: Asignar Rol, Contexto y Restricciones específicas.' },
  { title: 'Ignorar Citas', desc: 'En RAG, no pedir explícitamente la fuente. Solución: Ordenar que solo responda con base en el texto.' }
];
