const axios = require('axios');

const getLugarLatLng = async(dir) => {


    const encodeUrl = encodeURI(dir);

    console.log(encodeUrl);

    const instance = axios.create({
        baseURL: `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': 'd0bdda5407msh07137d32e6d715cp16e8e6jsn3b736768c427' }
    });

    const resp = await instance.get();

    if (resp.data.location.length === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }

    const data = resp.data.location;

    const direccion = data.name;

    const lat = data.lat;

    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}