export default (state = { hideCompleted: false }, action) => {
    switch (action.type) {
    case 'TOGGLE_HIDE_COMPLETED':
        return { hideCompleted: !state.hideCompleted };

    default:
        return state;
    }
};
