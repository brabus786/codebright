import React, {Component} from 'react';
import classes from './BlockComments.module.css';
import { Link } from "react-router-dom";

class BlockComments extends Component {
    componentDidMount() {
        console.log('BockComments mounted');
    }

    render() {
        return (
            <div className={classes.card}>
                <div className={classes.inset}>
                    <p className={classes.title_card}>
                        {this.props.title}
                    </p>
                    <p className={classes.short_review}>
                        {this.props.text}
                    </p>
                    <Link className={classes.read_more} to={this.props.link}>Read more</Link>
                </div>
            </div>

        );
    }
}
export default BlockComments;