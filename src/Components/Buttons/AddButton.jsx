import React, { useState } from "react";

const AddButton = (props) => {

    const [album, setAlbum] = useState("")
    const [artist, setArtist] = useState("")
    const [genre, setGenre] = useState("")
    const [release_date, setRelease_date] = useState("")
    const [title, setTitle] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        let newSong={
            album: album,
            artist: artist,
            genre: genre,
            release_date: release_date,
            title: title
        }
        props.createSong(newSong)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Album</label>
            <input type="text" value={album} onChange={(event) => setAlbum(event.target.value)}/>
            <label>Artist</label>
            <input type="text" value={artist} onChange={(event) => setArtist(event.target.value)}/>
            <label>Genre</label>
            <input type="text" value={genre} onChange={(event) => setGenre(event.target.value)}/>
            <label>Release Date</label>
            <input type="text" value={release_date} onChange={(event) => setRelease_date(event.target.value)}/>
            <label>Title</label>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
            <button type="submit">Add</button>
        </form>
     );
}
 
export default AddButton;