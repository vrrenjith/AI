import React, { useState, useCallback } from 'react';
import { questionBank } from './data/questions';

// Utility to shuffle an array
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const App = () => {
  const [appState, setAppState] = useState('welcome');
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);

  const startQuiz = useCallback(() => {
    // 1. Shuffle the entire question bank
    const shuffledBank = shuffleArray(questionBank);
    // 2. Pick the first 10 questions
    const selectedQuestions = shuffledBank.slice(0, 10);
    // 3. Format them for the quiz (shuffle options)
    const formattedQuestions = selectedQuestions.map((q) => {
      const options = shuffleArray([q.correct, ...q.distractors]);
      return {
        id: q.id,
        text: q.text,
        options,
        correctAnswer: q.correct,
      };
    });

    setQuestions(formattedQuestions);
    setCurrentIndex(0);
    setUserAnswers({});
    setScore(0);
    setAppState('quiz');
  }, []);

  const handleOptionSelect = (option) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentIndex]: option,
    }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    questions.forEach((q, index) => {
      if (userAnswers[index] === q.correctAnswer) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
    setAppState('results');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-green-700 tracking-tight">
          Quiero Ser Mexicano
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Examen de Práctica para la Nacionalización Mexicana
        </p>
      </header>

      <main className="w-full max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden">
        {appState === 'welcome' && (
          <div className="p-8 sm:p-12 text-center">
            <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Listo para poner a prueba tus conocimientos?</h2>
            <p className="text-gray-600 mb-8">
              Se te presentarán 10 preguntas de opción múltiple al azar basadas en la guía oficial de estudio. 
              Debes seleccionar la mejor respuesta para cada pregunta. ¡Buena suerte!
            </p>
            <button
              onClick={startQuiz}
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
            >
              Comenzar Examen
            </button>
          </div>
        )}

        {appState === 'quiz' && questions.length > 0 && (
          <div className="p-6 sm:p-10">
            <div className="mb-6 flex justify-between items-center text-sm font-medium text-gray-500">
              <span>Pregunta {currentIndex + 1} de {questions.length}</span>
              <span>{Math.round(((currentIndex + 1) / questions.length) * 100)}% Completado</span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
              <div 
                className="bg-green-600 h-2.5 rounded-full transition-all duration-300 ease-in-out" 
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              ></div>
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-8 min-h-[4rem]">
              {questions[currentIndex].text}
            </h3>

            <div className="space-y-3 mb-10">
              {questions[currentIndex].options.map((option, idx) => {
                const isSelected = userAnswers[currentIndex] === option;
                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(option)}
                    className={`w-full text-left px-6 py-4 rounded-xl border-2 transition-all duration-200 ${
                      isSelected
                        ? 'border-green-500 bg-green-50 text-green-800 shadow-sm'
                        : 'border-gray-200 hover:border-green-300 hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center mr-4 ${
                        isSelected ? 'border-green-500 bg-green-500' : 'border-gray-300'
                      }`}>
                        {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                      <span className="text-lg">{option}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-between items-center pt-6 border-t border-gray-100">
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  currentIndex === 0
                    ? 'text-gray-400 bg-gray-100 cursor-not-allowed'
                    : 'text-gray-700 bg-gray-200 hover:bg-gray-300'
                }`}
              >
                Anterior
              </button>
              
              {currentIndex === questions.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  disabled={!userAnswers[currentIndex]}
                  className={`px-8 py-3 rounded-lg font-medium text-white transition-colors ${
                    !userAnswers[currentIndex]
                      ? 'bg-green-400 cursor-not-allowed'
                      : 'bg-green-600 hover:bg-green-700 shadow-md'
                  }`}
                >
                  Enviar Examen
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={!userAnswers[currentIndex]}
                  className={`px-8 py-3 rounded-lg font-medium text-white transition-colors ${
                    !userAnswers[currentIndex]
                      ? 'bg-green-400 cursor-not-allowed'
                      : 'bg-green-600 hover:bg-green-700 shadow-md'
                  }`}
                >
                  Siguiente
                </button>
              )}
            </div>
          </div>
        )}

        {appState === 'results' && (
          <div className="p-6 sm:p-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Resultados del Examen</h2>
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gray-50 border-4 border-green-100 mb-4 mt-4">
                <span className="text-4xl font-extrabold text-green-600">{score}</span>
                <span className="text-2xl text-gray-400">/10</span>
              </div>
              <p className="text-lg text-gray-600">
                {score >= 8 ? '¡Excelente trabajo! Estás muy bien preparado.' : 
                 score >= 5 ? 'Buen esfuerzo, ¡pero sigue estudiando!' : 
                 'Es posible que necesites repasar más la guía de estudio.'}
              </p>
            </div>

            <div className="space-y-8 mb-10">
              {questions.map((q, index) => {
                const userAnswer = userAnswers[index];
                const isCorrect = userAnswer === q.correctAnswer;

                return (
                  <div key={index} className={`p-6 rounded-xl border ${isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      {index + 1}. {q.text}
                    </h4>
                    
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="font-medium text-gray-700 w-28 shrink-0">Tu Respuesta:</span>
                        <span className={`flex items-center font-medium ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                          {userAnswer || 'Ninguna respuesta seleccionada'}
                          {isCorrect ? (
                            <svg className="w-5 h-5 ml-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 ml-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                        </span>
                      </div>
                      
                      {!isCorrect && (
                        <div className="flex items-start">
                          <span className="font-medium text-gray-700 w-28 shrink-0">Correcta:</span>
                          <span className="font-medium text-green-700 flex items-center">
                            {q.correctAnswer}
                            <svg className="w-5 h-5 ml-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <button
                onClick={startQuiz}
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
              >
                Volver a tomar el Examen
              </button>
            </div>
          </div>
        )}
      </main>
      
      <footer className="mt-12 text-center text-sm text-gray-500">
        <p>Basado en la guía de estudio "Quiero Ser Mexicano".</p>
      </footer>
    </div>
  );
};

export default App;
