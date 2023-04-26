import axios from 'axios';

const Api = {
    getTime: async (city) => {
        let key = 'a944288d6e9782a43bc995c1e11ae7a1';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}&units=metric&lang=pt_br`;
        const { main, name, sys, weather, wind } = (await axios.get(url)).data;
        return { main, name, sys, weather, wind };
    },
}

export default Api;
