import React, { Component } from 'react';
import View from '../views/SearchBar'

class SearchBar extends Component {
    state = { searchTerm: '' };

    onInputChange = (event) => {
        this.setState({ searchTerm: event.target.value});
    };
    
    formSubmission = (event) => {
        event.preventDefault();
        
        this.props.onFormSubmit(this.state.searchTerm);
    }

    
    render(props) {
        return (
            <View searchTerm={this.searchTerm} onInputChange={this.onInputChange} formSubmission={this.formSubmission}/>
        );
    }
}

export default SearchBar;
