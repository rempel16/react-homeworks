import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      id: 1,
      text: "Question 1",
      options: ["Yes", "No"],
    },
    {
      id: 2,
      text: "Question 2",
      options: ["Yes", "No"],
    },
    {
      id: 3,
      text: "Question 3",
      options: ["Yes", "No"],
    },
    {
      id: 4,
      text: "Question 4",
      options: ["Yes", "No"],
    },
    {
      id: 5,
      text: "Question 5",
      options: ["Yes", "No"],
    },
  ],
  answers: {},
  result: null,
  submitted: false,
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { questionId, answer } = action.payload;
      const currentAnswers = state.answers[questionId] || [];

      if (currentAnswers.includes(answer)) {
        state.answers[questionId] = currentAnswers.filter((a) => a !== answer);
      } else {
        state.answers[questionId] = [...currentAnswers, answer];
      }
    },
    submitAnswers: (state) => {
      let yesCount = 0;
      Object.values(state.answers).forEach((answers) => {
        yesCount += answers.filter((a) => a === "Yes").length;
      });

      state.result =
        yesCount > state.questions.length / 2
          ? "Is simply dummy text of the printing and typesetting industry."
          : "Lorem Ipsum is simply dummy.";
      state.submitted = true;
    },
    resetQuestionnaire: (state) => {
      state.answers = {};
      state.result = null;
      state.submitted = false;
    },
  },
})

const selectAnswers = (state) => state.questionnaire.answers;

export const makeSelectQuestionAnswers = (questionId) =>
createSelector([selectAnswers], (answers) => answers[questionId] || [])

export const { answerQuestion, submitAnswers, resetQuestionnaire } = questionnaireSlice.actions
export default questionnaireSlice.reducer