'use strict';

function GoogleMapService() {

    var api = {};

    var map;

    var defaultLat = -31.588068;
    var defaultLng = 19.714068;

    function load(lat, lng) {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: lat, lng: lng},
          scrollwheel: false,
          zoom: 6
        });
    }

    api.load = function(lat, lng) {
        var useLat = lat || defaultLat;
        var useLng = lng || defaultLng;
        load(useLat, useLng);
    };

    return api;

}
