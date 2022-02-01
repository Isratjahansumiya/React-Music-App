import * as React from 'react';
import { useState,useEffect } from 'react';
import SongDetail from '../SongDetail/SongDetail';
import './Songs.css';

function Songs() {
    const [songs,setSongs]=useState([]);
    const [value,setValue]=useState(null);
    const [onClickbtn,setOnClickbtn]=useState(false)

    useEffect(()=>{
        fetch(`https://api.lyrics.ovh/suggest/${value}`)
        .then(res=>res.json())
        .then(data=>setSongs(data.data))
    },[value])

    function searchText(val){
        setOnClickbtn(false);
        setValue(val.target.value);

    }

    return (
        <div>
            <h2>Listen Your Favorite Songs</h2>
            <input type="text" name="" placeholder="Enter artist or song name" onChange={searchText}/>
            <button onClick={()=>setOnClickbtn(true)} className="search_btn">Search</button>
            <div className="song-container">
                {
                    onClickbtn?
                    songs.map(song=><SongDetail song={song} key={song.id}></SongDetail>)
                    :null
                }
            </div>
        </div>
    );
};

export default Songs;



