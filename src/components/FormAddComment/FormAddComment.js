import React, {Component} from 'react';
import axios from 'axios';
import classes from './FormAddComment.module.css';

class FormAddComment extends Component {
    state = {
        error: false,
        success: false,
        title: {
            value: "",
            status: null,
        },
        text: {
            value: "",
            status: null,
        },
    };

    handleChange = (event, field) => {
        const value = {};
        value[field] = {
            ...this.state[field]
        };
        value[field]['value'] = event.target.value;
        this.setState(value);
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.title.value !== "" && this.state.text.value !== "") {
            this.cleanInputs();
            this.setState({error: false});
            axios.post('https://5cbef81d06a6810014c66193.mockapi.io/api/comments', {
                created_at: Date.now(),
                title: this.state.title.value,
                body: this.state.text.value,
            })
                .then(response => {
                    console.log(response);
                });
        } else {
           this.setState({error: true});
        }
    };

    cleanInputs = () => {
        this.setState({title: {value:""}, text: {value:""}});
    };

    render() {
        const classList = [classes.formAddComments];
        if(this.state.error) classList.push(classes.Error);
        return (
            <form action="/" className={classList.join(" ")} onSubmit={this.handleSubmit}>
                <input aria-label="comment title" placeholder='Title' value={this.state.title.value} type="text" onChange={e => this.handleChange(e, 'title')}/>
                <textarea
                    aria-label="Text"
                    placeholder='Your comment'
                    onChange={e => this.handleChange(e, 'text')}
                    value={this.state.text.value}
                >

                </textarea>
                <button className={'greenButton'}>Send</button>
            </form>
        );
    }
}

export default FormAddComment;