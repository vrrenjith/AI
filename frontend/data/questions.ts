export interface QuestionData {
  id: string;
  text: string;
  correct: string;
  distractors: string[];
}

export const questionBank: QuestionData[] = [
  {
    id: "q1",
    text: "Primer presidente de México",
    correct: "Guadalupe Victoria",
    distractors: ["Benito Juárez", "Vicente Guerrero", "Porfirio Díaz"]
  },
  {
    id: "q2",
    text: "Nombre del mar donde se pueden observar focas y ballenas",
    correct: "Mar de Cortés",
    distractors: ["Golfo de México", "Mar Caribe", "Océano Pacífico"]
  },
  {
    id: "q3",
    text: "Año en que cayó el Ángel de la Independencia",
    correct: "1957",
    distractors: ["1985", "1910", "1968"]
  },
  {
    id: "q4",
    text: "Dios de la guerra de los mexicas",
    correct: "Huitzilopochtli",
    distractors: ["Quetzalcóatl", "Tláloc", "Tezcatlipoca"]
  },
  {
    id: "q5",
    text: "Las ruinas de Monte Albán se localizan en",
    correct: "Oaxaca",
    distractors: ["Chiapas", "Yucatán", "Quintana Roo"]
  },
  {
    id: "q6",
    text: "Ciudad que floreció en el Valle de México tras el abandono de Cuicuilco",
    correct: "Teotihuacán",
    distractors: ["La Venta", "San Lorenzo", "Xochicalco"]
  },
  {
    id: "q7",
    text: "La división básica de la sociedad nahua era",
    correct: "Pipiltin/Macehual",
    distractors: ["Calpulli/Tlamama", "Altépetl/Tlatoani", "Tepochcalli/Calmécac"]
  },
  {
    id: "q8",
    text: "Año en que Texas proclamó su independencia",
    correct: "1836",
    distractors: ["1834", "1840", "1848"]
  },
  {
    id: "q9",
    text: "Autor que escribió Los relámpagos de agosto",
    correct: "Jorge Ibargüengoitia",
    distractors: ["Octavio Paz", "Carlos Fuentes", "Juan Rulfo"]
  },
  {
    id: "q10",
    text: "El primer secretario de educación pública",
    correct: "José Vasconcelos",
    distractors: ["Justo Sierra", "Jaime Torres Bodet", "Aurelio Nuño"]
  },
  {
    id: "q11",
    text: "Poderes máximos según la constitución",
    correct: "Ejecutivo, Legislativo y Judicial",
    distractors: ["Federal, Estatal y Municipal", "Presidente, Congreso y Suprema Corte", "Senado, Cámara de Diputados y Presidente"]
  },
  {
    id: "q12",
    text: "Cultura indígena que aún habita en el norte",
    correct: "Tarahumara",
    distractors: ["Maya", "Zapoteca", "Olmeca"]
  },
  {
    id: "q13",
    text: "Presidente que nacionalizó la banca",
    correct: "José López Portillo",
    distractors: ["Lázaro Cárdenas", "Carlos Salinas de Gortari", "Miguel de la Madrid"]
  },
  {
    id: "q14",
    text: "Fecha en que se inauguró la primera línea del metro en la Ciudad de México",
    correct: "4 de septiembre de 1969",
    distractors: ["2 de octubre de 1968", "19 de septiembre de 1985", "1 de enero de 1970"]
  },
  {
    id: "q15",
    text: "Patrimonio Cultural Inmaterial de la Humanidad",
    correct: "Día de Muertos",
    distractors: ["Día de la Independencia", "Cinco de Mayo", "Guelaguetza"]
  },
  {
    id: "q16",
    text: "¿Cuál fue el primer Estado europeo que otorgó su reconocimiento a la existencia de México como país independiente?",
    correct: "Gran Bretaña",
    distractors: ["El Vaticano", "Francia", "Países Bajos"]
  },
  {
    id: "q17",
    text: "Levantamiento que dio el triunfo a Porfirio Díaz en 1876",
    correct: "Plan de Tuxtepec",
    distractors: ["Plan de San Luis", "Plan de la Noria", "Plan de Casa Mata"]
  },
  {
    id: "q18",
    text: "¿Durante el gobierno de qué presidente se fundó la Secretaría de Educación Pública?",
    correct: "Álvaro Obregón",
    distractors: ["Venustiano Carranza", "Plutarco Elías Calles", "Adolfo de la Huerta"]
  },
  {
    id: "q19",
    text: "Con tan solo dos obras publicadas, El llano en llamas y Pedro Páramo, se coloca como el escritor mexicano que inicia el alejamiento definitivo del 'nacionalismo cultural'",
    correct: "Juan Rulfo",
    distractors: ["Jaime Sabines", "Juan Soriano", "Juan José Arreola"]
  },
  {
    id: "q20",
    text: "Obra arquitectónica de Mario Pani, designada por la UNESCO como Patrimonio Mundial",
    correct: "Campus central de Ciudad Universitaria (UNAM)",
    distractors: ["Museo de Antropología de la Ciudad de México", "Bolsa de Valores", "Torre Latinoamericana"]
  },
  {
    id: "q21",
    text: "Figura del cine mexicano que encarnó al charro mexicano",
    correct: "Jorge Negrete",
    distractors: ["Pedro Infante", "Cantinflas", "Vicente Fernández"]
  },
  {
    id: "q22",
    text: "Político al que México dio asilo",
    correct: "León Trotsky",
    distractors: ["Fidel Castro", "Che Guevara", "Augusto Pinochet"]
  },
  {
    id: "q23",
    text: "Montaña más alta de México",
    correct: "Citlaltépetl (Pico de Orizaba)",
    distractors: ["Popocatépetl", "Iztaccíhuatl", "Nevado de Toluca"]
  },
  {
    id: "q24",
    text: "Estado del que son tradicionales los siete moles",
    correct: "Oaxaca",
    distractors: ["Puebla", "Michoacán", "Veracruz"]
  },
  {
    id: "q25",
    text: "Insectos comestibles en México",
    correct: "Escamoles, chapulines, gusano de maguey",
    distractors: ["Tarántulas, escorpiones, ciempiés", "Cigarras, escarabajos, hormigas", "Lombrices, babosas, caracoles"]
  },
  {
    id: "q26",
    text: "¿Cuál fue el objetivo del Plan de Casa Mata?",
    correct: "Restaurar el congreso en México y derrocar al emperador Agustín de Iturbide",
    distractors: ["Declarar la independencia de España", "Iniciar la Revolución Mexicana", "Nacionalizar la industria petrolera"]
  },
  {
    id: "q27",
    text: "Bebida que se obtiene del maguey",
    correct: "Pulque",
    distractors: ["Tequila", "Mezcal", "Tepache"]
  },
  {
    id: "q28",
    text: "Nombre real de Cantinflas",
    correct: "Mario Fortino Alfonso Moreno Reyes",
    distractors: ["Roberto Gómez Bolaños", "Germán Valdés", "Gaspar Henaine"]
  },
  {
    id: "q29",
    text: "¿Quién ganó el Premio Nobel de Química?",
    correct: "José Mario Molina Pasquel y Henríquez",
    distractors: ["Octavio Paz", "Alfonso García Robles", "Guillermo González Camarena"]
  },
  {
    id: "q30",
    text: "Primera Miss Universo mexicana",
    correct: "María Guadalupe Jones",
    distractors: ["Ximena Navarrete", "Andrea Meza", "Kristal Silva"]
  },
  {
    id: "q31",
    text: "Río más largo de México",
    correct: "Río Bravo",
    distractors: ["Río Colorado", "Río Usumacinta", "Río Grijalva"]
  },
  {
    id: "q32",
    text: "Arquitecto que ganó el Premio Pritzker",
    correct: "Luis Barragán",
    distractors: ["Teodoro González de León", "Pedro Ramírez Vázquez", "Mario Pani"]
  },
  {
    id: "q33",
    text: "¿Qué significa papalote en náhuatl?",
    correct: "Mariposa",
    distractors: ["Cometa", "Pájaro", "Viento"]
  },
  {
    id: "q34",
    text: "Nombre de un famoso corrido revolucionario",
    correct: "La Adelita",
    distractors: ["La Cucaracha", "Cielito Lindo", "El Rey"]
  },
  {
    id: "q35",
    text: "Nombre del árbol donde lloró Hernán Cortés en la Noche Triste",
    correct: "Ahuehuete",
    distractors: ["Ceiba", "Jacaranda", "Oyamel"]
  },
  {
    id: "q36",
    text: "¿Quién pintó los murales del Palacio Nacional?",
    correct: "Diego Rivera",
    distractors: ["David Alfaro Siqueiros", "José Clemente Orozco", "Rufino Tamayo"]
  },
  {
    id: "q37",
    text: "Símbolos patrios de México",
    correct: "La bandera, el escudo y el himno nacional",
    distractors: ["El águila, la serpiente y el nopal", "El sombrero, el mariachi y el tequila", "La constitución, el presidente y el congreso"]
  },
  {
    id: "q38",
    text: "Año en que se aprobó el sufragio femenino",
    correct: "1953",
    distractors: ["1917", "1947", "1968"]
  },
  {
    id: "q39",
    text: "Ciudad apodada la Perla del Bajío",
    correct: "León",
    distractors: ["Guanajuato", "Querétaro", "Celaya"]
  },
  {
    id: "q40",
    text: "Número de senadores en México",
    correct: "128",
    distractors: ["500", "300", "64"]
  },
  {
    id: "q41",
    text: "¿Cuál es el significado de Teotihuacán?",
    correct: "Ciudad de los dioses",
    distractors: ["Ciudad del sol", "Ciudad de los muertos", "Ciudad del agua"]
  },
  {
    id: "q42",
    text: "¿Quién fundó La Villa Rica de la Vera Cruz?",
    correct: "Hernán Cortés",
    distractors: ["Francisco Pizarro", "Pedro de Alvarado", "Cristóbal de Olid"]
  },
  {
    id: "q43",
    text: "Ciudad más importante del imperio Mexica",
    correct: "Tenochtitlán",
    distractors: ["Tula", "Chichén Itzá", "Palenque"]
  },
  {
    id: "q44",
    text: "Primer astronauta mexicano",
    correct: "Rodolfo Neri Vela",
    distractors: ["José Hernández", "Ellen Ochoa", "Carlos Noriega"]
  }
];