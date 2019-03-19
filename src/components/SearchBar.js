import React from 'react';

class SearchBar extends React.Component {
                                                   
    state = {term: ''}//when state is changed, all cmp is render

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onAppSubmit(this.state.term);//call 'onSearchSubmit' from App cmp(forwarden in onAppSubmit props) 
    }                                           //with 'this.state.term' - current STATE.
                                           
    render() {                                         
        return (                                      
            <div className="ui segment">
                <form onSubmit={(this.onFormSubmit)} className="ui form">   {/* 'onSubmit' action starts 'onFormSubmit*/}
                    <div className="field">
                        <label>Search image</label>
                        <input 
                            type="text" 
                            value={this.state.term}                             //set value === STATE after render. we hold are value in React cmp not in DOM
                            onChange={(e) => this.setState({term: e.target.value})}//when onChange we get 'e' and set it to STATE
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;