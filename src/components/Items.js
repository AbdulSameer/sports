import axios from "axios";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Items = () => {
    const navigate = useNavigate();
    const [players, setPlayers] = useState([]);
    const [search, setSearch] = useState('');
    const [spinner, setSpinner] = useState(true); // Initially set to true

    const navigateToPage = (player) => {
        if (player) {
            navigate('/PlayersInfo', { state: { player } });
        } else {
            console.error("Player information is missing.");
        }
    }

    const searchPlayer = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        const getPlayers = async () => {
            try {
                const res = await axios.get(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=Arsenal`);
                const items = res.data.player;
                setPlayers(items);
            } catch (err) {
                console.log(err);
            } finally {
                setSpinner(false); // Set spinner to false after fetching data
            }
        }
        getPlayers();
    }, []);

    return (
        <div>
            <div className="input-container">
                <input onChange={searchPlayer} type="text" className="input" placeholder="Search Player..."></input>
            </div>
            {spinner ? (
                <div className="spinner-container">
                    <div className="spinner"></div>
                </div>
            ) : (
                <div className="productsWrapper">
                    {players.filter((items) => {
                        if (search === '') {
                            return true;
                        } else {
                            return items.strPlayer.toLowerCase().includes(search.toLowerCase());
                        }
                    }).map((items) => (
                        <div className="card" key={items.idPlayer}>
                            <img src={items.strRender} alt={items.strPlayer} />
                            <h3 className="text">Player Name: {items.strPlayer}</h3>
                            <h3 className="text">Nationality: {items.strNationality}</h3>
                            <h3 className="text">Club: {items.strTeam}</h3>
                            <button className="btn" onClick={() => navigateToPage(items)}>Get Player Info</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Items;
