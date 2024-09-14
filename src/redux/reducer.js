import { TOGGLE_DARK, TOGGLE_LANG } from "./actionType";

const initialState = {
    dark: true,
    lang: "en"
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