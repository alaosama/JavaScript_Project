let map;

function initMap() {
    map = new google.Map(document.getElementById("map"), {
        center: { lat: 17.50, Ing: 78.88},
        zoom: 10,
    });

    new google.maps.Marker({
        center: { lat: 17.50, Ing: 78.88},
    })
}
