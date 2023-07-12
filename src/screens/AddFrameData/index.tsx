import React, { useEffect, useState } from "react";
import './style.css';
import axios from "axios";
import { apiURL } from "../../helpers/api";

interface Game {
    id: number;
    name: string;
    imgurl: string;
  }

export default function AddFrameData() {
    
    const [gameData, setGameData] = useState<Game[]>([]);

    useEffect(()=>{
        axios.get(`${apiURL}/games`).then((data) => setGameData(data.data));
    }, [])

    return (
        <div className="ContainerChooseGame">
            <div className="Title">
                <p>Choose a game</p>
            </div>
            <div className="Games">
               {gameData.map((game) => {
                return(
                    <div className="Game" key={game.id}>
                        <img className="GameImg" src={game.imgurl} alt={game.name}/>
                        <p>{game.name}</p>
                    </div>
                )
               })}
            </div>
        </div>
    )
}