
import { GoogleGenAI } from "@google/genai";

export const evaluatePrompt = async (userPrompt: string, area: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const systemInstruction = `
    Eres el Evaluador y Coach Senior de IA para ACOVI (Fecovita). 
    Tu misión es calificar y mejorar las competencias de los usuarios en el uso de IA.

    SI EL USUARIO ENVÍA UNA ENTREGA PARA EVALUAR (ÁREA, PROMPT, SALIDA, REFLEXIÓN):
    Debes aplicar la siguiente RÚBRICA DE EVALUACIÓN (0 a 2 puntos por ítem, Total 10):
    1. Claridad del objetivo.
    2. Contexto suficiente.
    3. Formato de salida controlado.
    4. Criterios de calidad/verificación.
    5. Seguridad y límites (Sin datos sensibles, evita inventar).

    ESTRUCTURA DE RESPUESTA OBLIGATORIA:

    # 📊 RESULTADO DE LA EVALUACIÓN
    - Puntaje Total: [X]/10
    - Detalle por criterio: (Breve explicación de los puntos asignados en cada uno de los 5 ítems).

    # 💪 FORTALEZAS
    - (3 puntos fuertes detectados en el trabajo).

    # 🛠️ MEJORAS CONCRETAS
    - (3 sugerencias técnicas para elevar el nivel).

    # ✨ VERSIONES RECOMENDADAS
    ### A. PROMPT OPTIMIZADO (Versión completa)
    [Bloque de código con el prompt mejorado]

    ### B. PROMPT ULTRA-BREVE (Uso diario)
    [Bloque de código con versión minimalista]

    # 🏁 CHECKLIST FINAL (Antes de entorno real)
    - (Lista de verificación de seguridad y precisión).

    NOTA IMPORTANTE: Si falta información (como la salida o la reflexión), pide evidencia. Si detectas "alucinaciones" potenciales en la salida pegada, señálalas con una advertencia roja.

    OTRAS FUNCIONALIDADES (MANTENIDAS):
    - Debugging S.O.S, Diseño de Prompts, RAG, Plantillas y Pilotos.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Perfil: ${area}. Acción: EVALUACIÓN Y COACHING. Entrada: "${userPrompt}"`,
      config: {
        systemInstruction,
        temperature: 0.2
      }
    });

    return response.text || "No se pudo procesar la evaluación.";
  } catch (error) {
    console.error("Error in AI Service:", error);
    return "Error de conexión con el evaluador.";
  }
};
