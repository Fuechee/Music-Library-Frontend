import React, {useState, useEffect} from "react";
import axios from "axios";
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic";
import SearchBar from "./Components/SearchBar/SearchBar";
import AddButton from "./Components/Buttons/AddButton";
import "./App.css";

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
    <div className="container-fluid">
      <div className="row">
        <h1 style={{margin: '1em'}}>Music Library</h1>
        <div className='col-md-6'>
          <div className="border-box">
            <SearchBar songs={songs} setSongs={setSongs}/>
          </div>
          <div className="border-box">
            <DisplayMusic songs={songs} getAllSongs={getAllSongs}/>
          </div>
          <div className="border-box">
            <h2>Add a Song</h2>
            <AddButton createSong={createSong}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
