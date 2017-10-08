export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_FULFILLED = "FETCH_USER_FULFILLED";

export const fetchUserAction = (login) => {
    console.log(login);
    return {
        type: FETCH_USER,
        payload: login
    };
};

export const fetchUserFulfilledAction = (user) => {
    return {
        type: FETCH_USER_FULFILLED,
        payload: user
    };
};
