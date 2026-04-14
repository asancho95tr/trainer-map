import { TarotCard } from '../models/tarot-card.interface';

export const TAROT_CARDS: TarotCard[] = [
    {
        id: 0,
        name: 'El Loco',
        image: 'THE FOOL.jpeg',
        meaning: 'Inicio, libertad',
        text: 'Representa nuevos comienzos, aventura y tomar riesgos con confianza.',
        reversed_text: 'Indica imprudencia, decisiones impulsivas o falta de dirección.'
    },
    {
        id: 1,
        name: 'El Mago',
        image: 'THE MAGICIAN.jpeg',
        meaning: 'Poder, acción',
        text: 'Habla de habilidad, creatividad y capacidad para manifestar tus objetivos.',
        reversed_text: 'Señala manipulación, engaño o uso incorrecto del talento.'
    },
    {
        id: 2,
        name: 'La Suma Sacerdotisa',
        image: 'THE HIGH PRIESTESS.jpeg',
        meaning: 'Intuición, misterio',
        text: 'Invita a escuchar tu intuición y conectar con el conocimiento interno.',
        reversed_text: 'Bloqueo emocional, secretos ocultos o desconexión interior.'
    },
    {
        id: 3,
        name: 'La Emperatriz',
        image: 'THE EMPRESS.jpeg',
        meaning: 'Fertilidad, creatividad',
        text: 'Simboliza abundancia, cuidado, creatividad y crecimiento.',
        reversed_text: 'Dependencia, bloqueo creativo o descuido personal.'
    },
    {
        id: 4,
        name: 'El Emperador',
        image: 'THE EMPEROR.jpeg',
        meaning: 'Autoridad, estructura',
        text: 'Representa estabilidad, liderazgo y control sobre la situación.',
        reversed_text: 'Rigidez, autoritarismo o falta de control.'
    },
    {
        id: 5,
        name: 'El Hierofante',
        image: 'THE HIEROPHANT.jpeg',
        meaning: 'Tradición, guía',
        text: 'Habla de enseñanza, valores tradicionales y aprendizaje espiritual.',
        reversed_text: 'Rebeldía, cuestionamiento de normas o creencias limitantes.'
    },
    {
        id: 6,
        name: 'Los Amantes',
        image: 'THE LOVERS.jpeg',
        meaning: 'Amor, elección',
        text: 'Representa relaciones, conexión emocional y decisiones importantes.',
        reversed_text: 'Desequilibrio, conflicto o malas decisiones afectivas.'
    },
    {
        id: 7,
        name: 'El Carro',
        image: 'THE CHARIOT.jpeg',
        meaning: 'Victoria, determinación',
        text: 'Indica avance, éxito y control gracias a la disciplina.',
        reversed_text: 'Falta de dirección, frustración o pérdida de control.'
    },
    {
        id: 8,
        name: 'La Justicia',
        image: 'JUSTICE.jpeg',
        meaning: 'Equilibrio, verdad',
        text: 'Habla de decisiones justas, responsabilidad y consecuencias.',
        reversed_text: 'Injusticia, falta de responsabilidad o decisiones erróneas.'
    },
    {
        id: 9,
        name: 'El Ermitaño',
        image: 'THE HERMIT.jpeg',
        meaning: 'Reflexión, introspección',
        text: 'Invita a la búsqueda interior y a la sabiduría personal.',
        reversed_text: 'Aislamiento excesivo o miedo a enfrentarse a uno mismo.'
    },
    {
        id: 10,
        name: 'La Rueda de la Fortuna',
        image: 'WHEEL OF FORTUNE.jpeg',
        meaning: 'Cambio, destino',
        text: 'Señala ciclos, giros del destino y nuevas oportunidades.',
        reversed_text: 'Resistencia al cambio o mala racha temporal.'
    },
    {
        id: 11,
        name: 'La Fuerza',
        image: 'STRENGTH.jpeg',
        meaning: 'Coraje, control',
        text: 'Representa fortaleza interior, paciencia y autocontrol.',
        reversed_text: 'Debilidad, inseguridad o falta de disciplina emocional.'
    },
    {
        id: 12,
        name: 'El Colgado',
        image: 'THE HANGED MAN.jpeg',
        meaning: 'Sacrificio, pausa',
        text: 'Indica la necesidad de ver las cosas desde otra perspectiva.',
        reversed_text: 'Estancamiento, resistencia o sacrificios inútiles.'
    },
    {
        id: 13,
        name: 'La Muerte',
        image: 'DEATH.jpeg',
        meaning: 'Transformación, final',
        text: 'Simboliza finales necesarios y transformación profunda.',
        reversed_text: 'Miedo al cambio o dificultad para soltar el pasado.'
    },
    {
        id: 14,
        name: 'La Templanza',
        image: 'TEMPERANCE.jpeg',
        meaning: 'Equilibrio, armonía',
        text: 'Habla de moderación, paciencia y estabilidad emocional.',
        reversed_text: 'Desequilibrio, exceso o falta de control.'
    },
    {
        id: 15,
        name: 'El Diablo',
        image: 'THE DEVIL.jpeg',
        meaning: 'Atadura, tentación',
        text: 'Representa adicciones, deseos materiales o dependencia.',
        reversed_text: 'Liberación, ruptura de ataduras o toma de conciencia.'
    },
    {
        id: 16,
        name: 'La Torre',
        image: 'THE TOWER.jpeg',
        meaning: 'Crisis, cambio',
        text: 'Indica ruptura repentina, caos necesario para reconstruir.',
        reversed_text: 'Resistencia al cambio o crisis evitada temporalmente.'
    },
    {
        id: 17,
        name: 'La Estrella',
        image: 'THE STAR.jpeg',
        meaning: 'Esperanza, inspiración',
        text: 'Simboliza fe, renovación y guía espiritual.',
        reversed_text: 'Desánimo, pérdida de fe o falta de motivación.'
    },
    {
        id: 18,
        name: 'La Luna',
        image: 'THE MOON.jpeg',
        meaning: 'Ilusión, subconsciente',
        text: 'Habla de confusión, intuición y emociones ocultas.',
        reversed_text: 'Claridad, revelación o superación de miedos.'
    },
    {
        id: 19,
        name: 'El Sol',
        image: 'THE SUN.jpeg',
        meaning: 'Éxito, vitalidad',
        text: 'Representa alegría, éxito y energía positiva.',
        reversed_text: 'Falta de claridad o retrasos en el éxito.'
    },
    {
        id: 20,
        name: 'El Juicio',
        image: 'JUDGEMENT.jpeg',
        meaning: 'Renacimiento, decisión',
        text: 'Indica despertar, renovación y decisiones importantes.',
        reversed_text: 'Dudas, falta de perdón o estancamiento.'
    },
    {
        id: 21,
        name: 'El Mundo',
        image: 'THE WORLD.jpeg',
        meaning: 'Logro, plenitud',
        text: 'Simboliza éxito, cierre de ciclo y realización.',
        reversed_text: 'Falta de cierre o metas incompletas.'
    }
];

export const POSITION_MEANINGS: Record<string, string> = {
    past: 'Lo que vienes arrastrando',
    present: 'Tu situación actual',
    future: 'Hacia dónde te diriges',
    advice: 'Lo que deberías hacer',
    outcome: 'Lo que puede ocurrir'
};