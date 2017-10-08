import {Observable} from "rxjs";
import {combineEpics} from "redux-observable";
import {FETCH_USER, fetchUserFulfilledAction} from "../actions";

const fetchUserEpic = (action$) => {
    return action$.ofType(FETCH_USER)
        .switchMap(({payload}) => {
            const apiRequestURL = `https://api.github.com/users/${payload}`;
            return Observable.ajax.getJSON(apiRequestURL)
                .map(user => {
                    return fetchUserFulfilledAction(user);
                });
        });
};

export const rootEpic = combineEpics(fetchUserEpic);