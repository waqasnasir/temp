import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface FAQPayload {
  id?: number;
  question: string;
  answer: string;
}

interface FAQState {
  faqs: FAQ[];
  loading: boolean
}

const initialState: FAQState = {
  faqs: [
    { id: 0, question: "hello, how are you", answer: "Hi I am fine" },
    { id: 1, question: "where are you from?", answer: "I am from Pakistan" },
  ],
  loading: false
};

// First, create the thunk
export const addQuestionAsync = createAsyncThunk(
  "faqs/addQuestionAsync",
  async (faq: FAQPayload, thunkAPI) => {
    await setTimeout(() => {}, 5000);
    return faq;
  }
);

export const faqSlice = createSlice({
  name: "faqs",
  initialState,
  reducers: {
    addQuestion: (state, action: PayloadAction<FAQPayload>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.faqs = [
        ...state.faqs,
        {
          id: state.faqs.length,
          ...action.payload,
        },
      ];
    },
    removeQuestion: (state, action: PayloadAction<number>) => {
      state.faqs = state.faqs.filter((faq) => action.payload !== faq.id);
    },
    removeQuestions: (state) => {
      state.faqs = [];
    },
    updateQuestion: (state, action: PayloadAction<FAQ>) => {
      state.faqs = state.faqs.map((f) =>
        f.id === action.payload.id ? { ...action.payload } : f
      );
    },
    sortQuestions: (state) => {
      state.faqs = state.faqs.sort((a, b) =>
        a.question.toLowerCase() > b.question.toLowerCase() ? 1 : -1
      );
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(
      addQuestionAsync.fulfilled,
      (state, action: PayloadAction<FAQPayload>) => {
        // Add user to the state array
        state.faqs = [
          ...state.faqs,
          {
            id: state.faqs.length,
            ...action.payload,
          },
        ];
        state.loading = false;
      }
    );
    builder.addCase(
      addQuestionAsync.pending,
      (state, action) => {
       state.loading = true;
      }
    );
  },
});
export const selectFaqs = (state: RootState) => state.faqs.faqs;

// Action creators are generated for each case reducer function
export const {
  addQuestion,
  removeQuestion,
  removeQuestions,
  sortQuestions,
  updateQuestion,
} = faqSlice.actions;

export default faqSlice.reducer;
