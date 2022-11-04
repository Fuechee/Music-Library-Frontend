import React, {useState, useEffect} from "react";
import axios from "axios";
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic";

function App() {
  const [songs, setSongs] = useState([]);
  useEffect(()=>{
    getAllSongs();
  }, []);
  async function getAllSongs(){
    try{
      let response = await axios.get('http://127.0.0.1:8000/api/music/');
      console.log(response.data);
      setSongs(response.data);
    }catch (ex){
      console.log('Error in getAllSongs API call')
    }
  }

  return (
    <div>
      <h1>Music Library</h1>
      <DisplayMusic songs={songs} getAllSongs={getAllSongs}/>
    </div>
  );
}

export default App;
