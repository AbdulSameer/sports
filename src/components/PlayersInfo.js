import { useLocation } from "react-router-dom";

const PlayersInfo = () => {
    const location = useLocation();
    const player = location.state.player;

   

    return (
        <div>
            <h2>Player Information</h2>
            <div>
                <img src={player.strRender} alt="Player" />
                <h3>Player Name: {player.strPlayer}</h3>
                <h3>Nationality: {player.strNationality}</h3>
                <h3>Club: {player.strTeam}</h3>
            </div>
        </div>
    );
};

export default PlayersInfo;
