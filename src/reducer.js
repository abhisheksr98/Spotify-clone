export const initialState ={
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: 'BQBwn5T0r-DrTX9zPpCHHtn27u2avHvwicuoB5AYT1g0QuZxeY…wKpm__QXrqy1hpaZjMxM1qguI5chlAcens7g_9E81LrBuirAI',
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case "SET_USER":
            return{
                ...state,
                user: action.user,
            };

        case "SET_TOKEN":
            return{
             ...state,
             token: action.token,
            };

        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists,
            };
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        default: return state;
    }
};

export default reducer;