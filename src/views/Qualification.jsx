// dependencies
import React, {Component, Fragment} from "react";
import {ProgressBar} from "react-materialize";

class Qualification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        }
    }
    render() {
        return (
            <Fragment>
                {
                    this.state.loading &&
                        <ProgressBar />
                }
            </Fragment>
        );
    }
}

export default Qualification;