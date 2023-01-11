import { configureStore } from '@reduxjs/toolkit'
import personaReducer from './personaSlice'
export default configureStore({
    reducer: {
        persona: personaReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})