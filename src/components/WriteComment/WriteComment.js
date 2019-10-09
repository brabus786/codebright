import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TitlePage from "../TitlePage/TitlePage";
import WriteCommentText from "./WriteCommentText/WriteCommentText";
import classes from './WriteCommentsStyle.module.css';
import arrow from './../../assets/img/VectorSmartObject14.png'
import BackToBlock from "../BackToBlock/BackToBlock";


const TitlePageComment = {
    color: 'black',
    maxWidth: '772px',
    margin: 'auto',
    fontSize: '48px',
    fontWeight: '700',
    lineHeight: '1.2',
    marginBottom: '60px',
    marginTop: '60px'
};


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
                            <img src={arrow}/>
                            <span>Back to Comments</span>
                        </Link>
                    </div>
                    <TitlePage style={TitlePageComment} text={this.state.comment.title}/>
                    <WriteCommentText text={this.state.comment.text} />
                    <BackToBlock link="/comments" />
                </div>
            </div>
        );
    }


}

export default WriteComment;

