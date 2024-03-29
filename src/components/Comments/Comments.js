import React, {Component} from 'react';
import classes from './Comments.module.css';
import axios from 'axios';

import BackToBlock from "../BackToBlock/BackToBlock";
import BlockComments from "../BlockComments/BlockComments";



class Comments extends Component {
    state = {
        comments: []
    };
    componentDidMount() {
        console.log('Comments mounted');
        axios.get("https://5cbef81d06a6810014c66193.mockapi.io/api/comments")
            .then(response => {
                const comments = response.data.map(comment => {
                    return {
                        id: comment.id,
                        title: comment.title,
                        text: comment.body
                    };
                });

                this.setState({comments});
            });
    }

    render() {
        const comments = this.state.comments.map((comment, index) => {
            return (
                <BlockComments
                    key={comment.id}
                    title={comment.title}
                    text={comment.text}
                    link={"/comments/" + comment.id}
                />
            );
        }).reverse();

        return (
            <div className={classes.wrap}>
                {/*<TitlePage style={TitlePageComment} text={TextTitle.Comments}/>*/}
                <h1 className={classes.titleComentPage}>Comments</h1>
                <div className={classes.wrapComents}>{comments}</div>
                <BackToBlock link="/" />
            </div>
        );
    }
}

export default Comments;