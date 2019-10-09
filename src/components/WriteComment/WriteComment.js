import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import WriteCommentText from "./WriteCommentText/WriteCommentText";
import classes from './WriteCommentsStyle.module.css';
import arrow from './../../assets/img/VectorSmartObject14.png'
import BackToBlock from "../BackToBlock/BackToBlock";




class WriteComment extends Component {
    state = {
        comment: {
            title: "",
            text: "",
        }
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get("https://5cbef81d06a6810014c66193.mockapi.io/api/comments/" + id)
            .then(response => {
                this.setState({
                    comment: {
                        title: response.data.title,
                        text: response.data.body,
                    }
                });
            });
    }

    render() {
        return (
            <div className={'myContainer'}>
                <div className={classes.smal_container}>
                    <div className={classes.wrap}>
                        <Link className={classes.top_batton} to="/comments">
                            <img src={arrow} alt="arrow"/>
                            <span>Back to Comments</span>
                        </Link>
                    </div>
                    <h1 className={classes.titlePageComent}>{this.state.comment.title}</h1>
                    <WriteCommentText text={this.state.comment.text} />
                    <BackToBlock link="/comments" />
                </div>
            </div>
        );
    }


}

export default WriteComment;

