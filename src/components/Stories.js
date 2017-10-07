import React from "react";
import {connect} from "react-redux";

export const Stories = (props) => {
    return <pre><code>{JSON.stringify(props, null, 2)}</code></pre>
};

const mapState = (state) => {
    return state;
};

export default connect(mapState)(Stories);