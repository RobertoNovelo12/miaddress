const $data = document.querySelector('.data')
const $ip  =document.getElementById('ipAddress')
async function Info(){
    try{
        const $JSON = await fetch('https://api.ipquery.io/?format=json')
        if(!$JSON.ok){
            throw new Error('No se ha podido cargar el json')
        }

        const data = await $JSON.json()
        $data.innerHTML = `
            <li>País: <p id="country">${data.location.country}</p></li>
            <li>Estado: <p id="state">${data.location.state}</p></li>
            <li>Ciudad: <p id="city">${data.location.city}</p></li>
            <li>Latitud: <p id="latitude">${data.location.latitude}</p></li>
            <li>Longitud: <p id="longitude">${data.location.longitude}</p></li>
            <li>Zona horaria: <p id="timezone">${data.location.timezone}</p></li>
            <li>Hora local: <p id="localtime">${data.location.localtime}</p></li>
        `, $ip.textContent = data.ip
    } catch(e){
        console.log('Se ha producido un error', e)
    }
}

Info()