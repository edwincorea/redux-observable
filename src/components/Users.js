import React from "react";
import {connect} from "react-redux";
import {User} from "./User";
import {fetchUserAction} from "../actions";

export const Users = (props) => {
    return (
        <div>
            <ul>
                {props.users.map(login => 
                    <li key={login}>
                        {login}
                        <button type="button" onClick={() => props.loadUser(login)}>Load user</button>
                    </li>
                )}
            </ul>
            {props.loading && <p>Please wait!</p>}
            {props.current && <User {...props.current} />}
        </div>
    );
};

const mapState = (state) => {
    return state;
};

const mapDispatch = (dispatch) => {
    return {
        loadUser: (login) => dispatch(fetchUserAction(login))
    };
};

export default connect(mapState, mapDispatch)(Users);