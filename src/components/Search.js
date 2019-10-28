import React from "react";

// class Search extends React.Component {
//     state = { 
//         term: '' 
//     };


// render() {
//     return (
//         <form>
//             <input type="search" id="query" placeholder="Search Image..."/>
//         </form>
//     );
// }
// };

const Search = props => (
    <form onSubmit={props.fetchunsplashPhotos} >
        <input type="search" id="query" placeholder="Search Image..."/>
    </form>
);


export default Search;
