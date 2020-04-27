import React from 'react';
import axios from 'axios';
import './MovieForm.css';

class MovieForm extends React.Component {
constructor(props) {
super(props);
this.state = {
    id: '',
    title: '',
    poster: '',
    comment: '',
    }
this.onChange = this.onChange.bind(this);
this.submitForm = this.submitForm.bind(this);
}


onChange(e) {
    this.setState({
        [e.target.name]: e.target.value,
    });
    }

submitForm(e) {
    const url = ' https://post-a-form.herokuapp.com/api/movies/';
    e.preventDefault();
    axios.post(url, this.state)
    .then(res => res.data)
    .then(res => {
        alert(`Movie added with id ${res.id} !`);
    })
    .catch(e => {
        console.error(e);
        alert(`Error while attempting to add movie : ${e.message}`);
    });
    }


render() {
    return (
    <div className="FormMovie">
        <h3>Movie Review</h3>
    <form onSubmit={this.submitForm}>
        <fieldset>
            <legend>Movie Informations</legend>
            <div className="form-data">
                <label htmlFor="title">Movie selected: </label>
                    <input 
                        type="text"
                        id="id"
                        name="title"
                        onChange={this.onChange}
                        value={this.state.title}
                        placeholder='type in the title' /> 
            </div>
            <div className="form-data">
            <label htmlFor="poster">URL of movie's poster:</label> 
                    <input 
                        type='url'
                        name="poster"
                        onChange={this.onChange}
                        value={this.state.poster}
                        placeholder='type in the url' />
            </div>
            <div className="form-data">
                    <textarea 
                        style={{height: '100px', width: '300px'}}
                        type="text"
                        name="comment"
                        onChange={this.onChange}
                        value={this.state.comment}
                        placeholder='please write your comment here' />
            </div>
            <div className="form-data">
                    <input
                        type="submit"
                        value="submit" />
            </div>
        </fieldset>
    </form>
    </div>
    );   
}
}

export default MovieForm;
