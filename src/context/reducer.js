export const initialState = {
    appUser: {},
};

export const reducer = ( state, action ) => {
    switch(action.type) {

        case "user":
            return {
                ...state,
                appUser: action.payload,
            };

            default:
                return;

    }
};
