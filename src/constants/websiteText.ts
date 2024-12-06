
const languageCode = {
  ENG: 'Eng',
  FREN: 'Fren'
}

const englishText = {
  /* this is the text for the not found page */
  LAN: languageCode.ENG,
  NOTFOUNDMESSAGE: "The page you were looking for is not found!",
  NOTFOUNDMESSAGEDESC:
    "You may have mistyped the address or the page may have moved",
  NOTFOUNDTEXTBUTTON: "Back to Home",
  LOGIN: {
    TITLE: "Sign in your account",
    DESC: "Welcome back! Login with your data that you entered during registration",
    LABEL1: "Email",
    LABEL2: "Password",
    CHECKBOXTEXT: "Remember my preference",
    SIGNUP: "Sign up",
    SIGNIN: "Sign Me In",
  },
  REGISTER: {
    TITLE: "Sign up your account",
    LABEL1: "Username",
    LABEL2: "Email",
    LABEL3: "Phone",
    LABEL4: "Password",
    BUTTONTEXT: "Sign me up",
    QUESTION: "Already have an account?",
    LOGIN: "Sign in",
  },
};

const frenchText = {
  /* this is the text for the not found page */
  LAN: languageCode.FREN,
  NOTFOUNDMESSAGE: "La page que vous recherchiez est introuvable !",
  NOTFOUNDMESSAGEDESC:
    "Il se peut que vous ayez mal tapé l'adresse ou que la page ait été déplacée.",
  NOTFOUNDTEXTBUTTON: "Retour à l'accueil",
  LOGIN: {
    TITLE: "Connectez-vous à votre compte",
    DESC: "Bon retour ! Connectez-vous avec les informations que vous avez fournies lors de votre inscription.",
    LABEL1: "Email",
    LABEL2: "Mot de passe",
    CHECKBOXTEXT: "Se souvenir de ma préférence",
    SIGNUP: "S'inscrire",
    SIGNIN: "Me connecter",
  },
  REGISTER: {
    TITLE: "Créez votre compte",
    LABEL1: "Nom d'utilisateur",
    LABEL2: "Email",
    LABEL3: "Téléphone",
    LABEL4: "Mot de passe",
    BUTTONTEXT: "Inscrivez-moi",
    QUESTION: "Vous avez déjà un compte ?",
    LOGIN: "Se connecter",
  },
};


export { englishText, frenchText, languageCode };
