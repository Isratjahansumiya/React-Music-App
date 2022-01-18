import * as React from 'react';
import './SongDetail.css';

function SongDetail(props) {
    const {album,title,artist,preview}=props.song;
    console.log(props)
    return (
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
            </div>
                           
        </div>
    );
};

export default SongDetail;