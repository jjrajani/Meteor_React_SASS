const TOGGLE_HIDE_COMPLETED = 'TOGGLE_HIDE_COMPLETED';

export const toggleHideCompleted = () => dispatch => {
    dispatch({ type: TOGGLE_HIDE_COMPLETED });
};
