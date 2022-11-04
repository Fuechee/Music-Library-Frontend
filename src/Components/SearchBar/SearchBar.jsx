import React, { useState } from "react";

const SearchBar = (props) => {

    const [searchField, setSearchField] = useState("")

    function handleChange(event){
        event.preventDefault()
        let filteredSongs = props.songs.filter((song) => {
            if(searchField === ""){
                return props.songs
            }
            else if(
                song.album.toUpperCase().includes(searchField.toUpperCase()) ||
                song.artist.toUpperCase().includes(searchField.toUpperCase()) ||
                song.genre.toUpperCase().includes(searchField.toUpperCase()) ||
                song.release_date.toUpperCase().includes(searchField.toUpperCase()) ||
                song.title.toUpperCase().includes(searchField.toUpperCase()) 
            ){
                return true
            }
        })
        props.setSongs(filteredSongs)
    }

    return (
        <form onSubmit={handleChange}>
            <h3>Search for Song</h3>
            <input type="text" placeholder='search song' value={searchField} onChange={event => setSearchField(event.target.value)}/>
            <button type="sumbit">Click to Search</button>
        </form>
     );
}
 
export default SearchBar;