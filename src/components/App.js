import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

    state={images:[]};//deklaruje state will be table.

    onSearchSubmit = async (term) => {
                                                                
        const response = await unsplash.get('/search/photos', {
            params: {query: term}//find some items === term 
                                //(term) is props from child
        });                              /*it can be like this alsow: .then((response)=> { PROMIS!!!
                                                                            console.log(response.data.results);*/
            this.setState({images: response.data.results});       //Callback for API request
        }
    
    render() {
        return (
            <div className="ui container">
                <SearchBar onAppSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}
    
export default App;