import { configureStore } from '@reduxjs/toolkit';
import faqSlice from './features/faq/faqSlice';




export const store = configureStore({
  reducer: {
    faqs: faqSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch