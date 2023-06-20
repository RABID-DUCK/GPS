function getCoordinates(){
    const latitude = parseFloat(document.getElementById('latitude').value);
    const longitude = parseFloat(document.getElementById('longitude').value);
    const scale = parseInt(document.getElementById('scale').value) || 1;

    const X = Math.floor((longitude + 180) / 360 * (1 << 16));
    const Y = Math.floor(((1 - Math.log(Math.tan(latitude * Math.PI / 180) + 0.99 / Math.cos(latitude * Math.PI / 180)) / Math.PI) / 2 * (1 << 16)));
    // у меня проблема с этим Y я постоянно не попадал в значения. Если московский вводить то +- работает, но прям точно в цифру не могу
    
    let url = new URL(`https://core-carparks-renderer-lots.maps.yandex.net/maps-rdr-carparks/tiles?l=carparks&x=${X}&y=${Y}&z=16&scale=${scale}&lang=ru_RU&v=20230620-124421`);

    let res = document.getElementById('result');
    res.classList.remove('hide')

    res.innerHTML = `<b>X:</b> ${X}<br />
        <b>Y:</b> ${Y}<br />
        <b>Ссылка:</b> ${url}<br />`+
        `<img src="${url}">`
}
// 55.755819, 37.617644