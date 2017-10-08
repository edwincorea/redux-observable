import React from "react";
import {connect} from "react-redux";

import {loadStories, clear} from "../actions/index";

export const Stories = (props) => {
    return (
        <div>   
            <button type="button" onClick={props.loadStories}>Load Top 3 Stories</button>
            <button type="button" onClick={props.clear}>Clear</button>
            <StoryList {...props} />
        </div>
    );
};

const StoryList = (props) => {
    if (props.items.length === 0) return null;
    return (
        <div>
            {props.items.map(item => <Story {...item} key={item.id} />)}
        </div>
    );
};

const Story = (props) => {
    return <p>{props.title}</p>;
};

const mapState = (state) => {
    return state;
};

const mapDispatch = (dispatch) => {
    return {
        loadStories: () => dispatch(loadStories()),
        clear: () => dispatch(clear())
    };
};

export default connect(mapState, mapDispatch)(Stories);