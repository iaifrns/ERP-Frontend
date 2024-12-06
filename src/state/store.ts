import { configureStore } from "@reduxjs/toolkit";
import LangueageSlice from './slice/languageSlice'

const store = configureStore({
    reducer: {
        'Language' : LangueageSlice
    }
})

type RootState = ReturnType<typeof store.getState>

export { store };
export type { RootState };
