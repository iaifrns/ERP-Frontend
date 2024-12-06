import { englishText, frenchText } from "@/constants/websiteText";
import { createSlice } from "@reduxjs/toolkit";

interface loginTextType {
  TITLE: string;
  DESC: string;
  LABEL1: string;
  LABEL2: string;
  CHECKBOXTEXT: string;
  SIGNUP: string;
  SIGNIN: string;
}

interface registerTextType {
  TITLE: string;
  LABEL1: string;
  LABEL2: string;
  LABEL3: string;
  LABEL4: string;
  BUTTONTEXT: string;
  QUESTION: string;
  LOGIN: string;
}

interface InitialStateType {
  LAN: string;
  NOTFOUNDMESSAGE: string;
  NOTFOUNDMESSAGEDESC: string;
  NOTFOUNDTEXTBUTTON: string;
  LOGIN: loginTextType;
  REGISTER: registerTextType;
}

let initialState: InitialStateType = frenchText;

const Language = createSlice({
  name: "language",
  initialState: initialState,
  reducers: {
    EnglishText: (state) => {
      Object.assign(state,englishText)
    },
    FrenchText: (state) => {
      Object.assign(state, frenchText)
    },
  },
});

export const { EnglishText, FrenchText } = Language.actions;

export default Language.reducer;
