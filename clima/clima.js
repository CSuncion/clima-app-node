const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c0bf7f9f9ed647837df9edba705c0af1&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}