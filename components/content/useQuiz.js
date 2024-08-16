// useQuiz.js
import { reactive, toRefs } from "vue";

const state = reactive({
  questions: [],
  showResults: false,
  showExplanation: false,
  score: {
    correct: 0,
    total: 0,
    percentage: 0,
  },
});

export default () => {
  const { showResults, score, showExplanation } = toRefs(state);

  const addQuestion = (question, answers, serialNumber, explanation, answerKey) => {
    const existingQuestion = state.questions.find(q => q.serialNumber === serialNumber);
    if (existingQuestion) return existingQuestion;
    // const orderedAnswers = [...answers].sort(() => Math.random() - 0.5);
    const orderedAnswers = [...answers];
    // const correctAnswerIndex = orderedAnswers.findIndex(
    //   (answer) => answer === answers[0]
    // );
    function findIndexOfOne(answerKey) {
      // Find the index of the first occurrence of 1 in answerKey
      const index = answerKey.indexOf(1);
      return index;
    }
    const correctAnswerIndex = findIndexOfOne(answerKey);
    const q = {
      serialNumber,
      id: state.questions.length + 1,
      question,
      answers,
      orderedAnswers,
      correctAnswerIndex,
      selected: ref(-1),
      explanation,
    };

    state.questions.push(q);

    return q;
  };

  const calculateScore = () => {
    const correct = state.questions.filter(
      (question) => question.correctAnswerIndex === question.selected
    ).length;

    state.score = {
      correct,
      total: state.questions.length,
      percentage: (correct / state.questions.length) * 100,
    };
  };

  watch(() => state.showResults, calculateScore, state.showExplanation);

  return {
    addQuestion,
    showResults,
    score,
    showExplanation,
  };
};
