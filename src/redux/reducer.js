import { TOGGLE_DARK, TOGGLE_LANG } from "./actionType";

const initialState = {
    dark: false,
    lang: "fr"
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_DARK:
            return {
                ...state,
                dark: !state.dark
            };
        case TOGGLE_LANG:
            return {
                ...state,
                lang: state.lang === "en" ? "fr" : "en"
            };
        default:
            return state;
    }
};

export default reducer;