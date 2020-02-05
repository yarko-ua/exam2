class CityPosition {
    constructor(lat, long, url, text) {
        this.lat = lat;
        this.long = long;
        this.marker = url;
        this.text = text;
    }

    get coordinates() {
        return [this.lat, this.long];
    }

    set coordinates(newcoordinates) {
        let arr = newcoordinates.split(',');
        this.lat = arr[0];
        this.long = arr[1];
    }
}

let IF = new CityPosition(48.922634, 24.711117, 'https://cdn1.iconfinder.com/data/icons/vegetables-1-flat/33/beetrot-512.png', 'Бурячки обєднаємось!!!');
console.log('iv:', IF.coordinates);


// Initialize and add the map
function initMap() {
    // The location of Uluru
    var city;
    let markerImg;
    let text;

    city = { lat: +IF.lat, lng: +IF.long };
    markerImg = IF.marker;
    text = IF.text;

    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
        zoom: 14, center: city,
        gestureHandling: 'greedy',
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ]
    });
    // The marker, positioned at Uluru 
    var marker = new google.maps.Marker({
        position: city, map: map,
        icon: { url: markerImg, scaledSize: new google.maps.Size(36, 36) }
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
    //infoWindow
    let infowindow = new google.maps.InfoWindow({
        content: text
    });
}


