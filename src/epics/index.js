import {Observable} from "rxjs";
import {combineEpics} from "redux-observable";
import {clear, LOAD_STORIES} from "../actions/index";

// receives a stream of actions, 
// returns a stream of actions that we want redux observable to dispatch 
// into the redux store on our behalf
const loadStoriesEpic = (action$) => {
    // return action$
    //     .filter(action => action.type === LOAD_STORIES)
    //     .do(action => console.log(action))
    //     .ignoreElements();

    // filter only LOAD_STORIES actions, which after two seconds, trigger a clear action
    return action$.ofType(LOAD_STORIES)    
    .switchMap(() => {
        return Observable.of(clear()).delay(2000);
    });
};

// combineEpics allows to register multiple functions
export const rootEpic = combineEpics(loadStoriesEpic);