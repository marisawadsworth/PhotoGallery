import React from "react";

class Search extends React.Component{

    state = {
        searchText: ""
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        
        this.setState({ [e.target.name]: e.target.value });
    }


    render(){
        return(
            <div className="ui container searchbar">

                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="ui input container">
                    <input type="text" placeholder="Search..." 
                    //value={this.state.term}
                    onChange={this.props.updateText} />
                    </div>
                </form>
                

            </div>
        );
    }
}


export default Search;