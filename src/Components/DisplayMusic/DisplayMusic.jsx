import React from "react";


const DisplayMusic = (props) => {
    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th>Album</th>
                    <th>Artist</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody className="table-hover">
                {props.songs.map((song, index)=>{
                    return(
                        <tr key={index}>
                            <td>{song.album}</td>
                            <td>{song.artist}</td>
                            <td>{song.genre}</td>
                            <td>{song.release_date}</td>
                            <td>{song.title}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
     );
}
 
export default DisplayMusic;