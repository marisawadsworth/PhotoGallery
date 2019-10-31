import React from "react";

class Search extends React.Component{

    state = {
        //term = "",
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

// class Search extends React.Component {
//     state = { 
//         searchText: "", 
//     };

//     onFieldChange = e => {
//         this.setState({ [e.target.name]: e.target.value });
//       };

//       render() {
//         return (
//         <div>
//             <form onSubmit={this.state.value}> 
//                 <input type="search" id="query"  placeholder="Search Image..."/>
//             </form>
//         </div>
           
//         )}
// }

// const Search = props => (
//     <form>
//         <input type="search" id="query" placeholder="Search Image..."/>
//     </form>
// );


export default Search;
