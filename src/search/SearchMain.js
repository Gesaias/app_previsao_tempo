import './SearchMain.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureFull } from '@fortawesome/free-solid-svg-icons';

export default function SearchMain(props) {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className='container'>
            <h1>{props.name} - {props.sys.country}</h1>
            <img src={props.icon} />
            <p><strong>{capitalizeFirstLetter(props.weather[0].description)}</strong></p>
            <h2 id="temp">Temperatura</h2>
            <div id='temp-celcius'>
                <p><FontAwesomeIcon icon={faTemperatureFull} bounce /><strong>{props.main.temp} °C</strong></p>
            </div>
            <p><strong>Mínima: </strong>{props.main.temp_min}° - <strong>Máxima: </strong>{props.main.temp_max}°</p>
            <p><strong>Humidade: </strong>{props.main.humidity}</p>
            <h2 id='wind'>Vento</h2>
            <p><strong>Velocidade: </strong>{props.wind.speed}</p>
        </div>
    );
}
