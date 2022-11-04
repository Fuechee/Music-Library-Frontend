import React, {useState, useEffect} from "react";
import axios from "axios";
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic";
import SearchBar from "./Components/SearchBar/SearchBar";
import AddButton from "./Components/Buttons/AddButton";

function App() {
  const [songs, setSongs] = useState([]);
  useEffect(()=>{
    getAllSongs();
  }, [])

  async function getAllSongs(){
    try{
      let response = await axios.get('http://127.0.0.1:8000/api/music/');
      console.log(response.data);
      setSongs(response.data);
    }catch (ex){
      console.log('Error in getAllSongs API call')
    }
  }

  async function createSong(newSong){
    let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong)
    if(response.status === 201){
      await getAllSongs()
    }
  }

  return (
    <div>
      <h1>Music Library</h1>
      <SearchBar songs={songs} setSongs={setSongs}/>
      <DisplayMusic songs={songs} getAllSongs={getAllSongs}/>
      <h1>Add a Song</h1>
      <AddButton createSong={createSong}/>
    </div>
  );
}

export default App;
