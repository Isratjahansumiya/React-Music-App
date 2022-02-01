import * as React from 'react';
import { useState, useEffect } from 'react';

function Lyrics(props) {
    const {artist, title}=props;
    const [displayLyrics,setDisplayLyrics] =useState([]);
    const [error,setError]=useState(null);

    useEffect(()=>{
        const getLyric = async ()=>{
            const url=`https://api.lyrics.ovh/v1/${artist}/${title}`
            try {
              const res=await fetch(url);
              const data=await res.json();
              setDisplayLyrics([data.lyrics]);
              if(!res.ok){
                  throw Error('Sorry, Could not find the lyric of this song')
              }

            }
            catch (error) {
                setError(error.message)
            }

          }
          getLyric();

    },[artist,title])
    return (
        <div>
            {
                error && <div>{error}</div>
            }

            {
                displayLyrics.map(lyric=><div>{lyric}</div>)
            }

        </div>
    );
};

export default Lyrics;