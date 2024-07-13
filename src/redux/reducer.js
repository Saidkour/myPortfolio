import { TOGGLE_DARK } from "./actionType";

const initialState = {
    dark: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_DARK:
            return {
                ...state,
                dark: !state.dark
            };
        default:
            return state;
    }
};

export default reducer;