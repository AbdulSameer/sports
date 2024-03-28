import axios from "axios"
import {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom"


const Items = ()=>{
    const navigate = useNavigate()
    const [players, setPlayers] = useState([])
    const navigateToPage = (player)=>{
        if (player) {
            navigate('/PlayersInfo', { state: { player } });
        } else {
            console.error("Player information is missing.");
        }
    }

    useEffect(()=>{
        axios.get(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=Arsenal`)
        .then((res)=>{
            const items = res.data.player
            console.log(items)
            setPlayers(items)
        },[])
    })

    return(
        <div>
            <div className="productsWrapper">
                {
                    players.map((items)=>{
                        return <div className="card" >
                        <img src={items.strRender}/>
                        <h3 className="text" key={items.idPlayer}>Player Name: {items.strPlayer}</h3>
                        <h3 className="text" key={items.idPlayer}>Nationality: {items.strNationality}</h3>
                        <h3 className="text" key={items.idPlayer}>Club: {items.strTeam}</h3>
                        <button className="btn" key={items.idPlayer} onClick={() => navigateToPage(players)}>Get Player Info</button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Items