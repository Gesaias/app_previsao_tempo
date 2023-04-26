import { useEffect, useState } from 'react';
import Api from '../Api';
import './Search.css';
import SearchMain from './SearchMain';
import CircularLoading from '../components/CircularLoading';
import Error from '../components/Error';
import SearchIcon from '../components/SearchIcon';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Search(props) {
    const [city, setCity] = useState('');
    const [content, setContent] = useState(<SearchIcon />);

    useEffect(() => {
        setContent(<SearchIcon />);
    }, []);

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            searchInput(event);
        }
    }

    function searchInput(e) {
        e.preventDefault();
        setCity('');
        noneTextOrSearchText('loading');

        let currentValue = document.querySelector('input[name=searchInput]').value;

        Api.getTime(currentValue).then(async (data) => {
            if (data.sys !== undefined && data.weather !== undefined) {
                setCity(data);

                const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0]["icon"]}.svg`;

                const element = <SearchMain icon={icon} sys={data.sys} weather={data.weather} main={data.main} name={data.name} wind={data.wind} />;

                setCity(element);
                noneTextOrSearchText('success');

                return;
            }
            noneTextOrSearchText('error');
            setCity('');
        }).catch(() => {
            setCity('');
            noneTextOrSearchText('error');
        });
    }

    function noneTextOrSearchText(status) {
        let inputValue = document.querySelector('input[name=searchInput]').value;

        if (inputValue !== '' && inputValue !== undefined) {
            if (status === 'error') {
                setContent(<Error />);
                return;
            } else if (status === 'loading') {
                setContent(<CircularLoading />);
                return;
            }

            setContent(<SearchIcon />);
            return;
        } else {
            setContent(<SearchIcon />);
            return;
        }
    }

    return (
        <div className='searchWraper'>
            <div className="search">
                <div className='emoji-container'><h1>☁️</h1></div>
                <h2>Digite a cidade que deseja saber a previsão...</h2>
                <form onSubmit={(e) => searchInput(e)} onKeyDown={handleKeyPress}>
                    <input type="text" name="searchInput" placeholder="Digite a Cidade..."></input>
                    <button type='submit'><AiOutlineSearch id='iconButton'/> Pesquisar</button>
                </form>
            </div>
            <div className='container-content'>
                {
                    (city !== '' && city !== undefined) ? city : content
                }
            </div>
        </div>
    );
}

