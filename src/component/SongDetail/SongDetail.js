import * as React from 'react';
import { useState } from 'react';
import Lyrics from '../Lyrics/Lyrics';
import './SongDetail.css';

function SongDetail(props) {
    const {album,title,artist,preview}=props.song;
    const [lyricsBtn,setlyricsBtn]=useState(false);

    return (
        <div>
            <div className="container">
                <div className="half-width1">
                    <img src={album.cover} alt=""></img>
                </div>
                <div className="half-width2">
                    <h4>{title}</h4>
                    <h6>By {artist.name}</h6>
                    <audio controls>
                    <source src={preview} type="audio/mpeg"/>
                    </audio>
                    <br/>
                    <button onClick={()=>setlyricsBtn(true)}>Get Lyrics</button>
                </div>

            </div>

            {
                lyricsBtn?<div className='container'><Lyrics artist={artist.name} title={title}></Lyrics></div>
                :null
            }



        </div>
    );
};

export default SongDetail;