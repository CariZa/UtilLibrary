'use strict';

function GoogleMapKMLService() {

    var api = {};

    var map;

    function initialize(kmlFile, coords) {
      var coordsArray = coords.split(', ');
      var element = document.getElementById('map');
      var focus = new google.maps.LatLng(coords); //-29.84343537174352, 31.01047786751791);

      map = new google.maps.Map(element, {
        center: focus,
        mapTypeId: google.maps.MapTypeId.ROADMAP //TERRAIN
      });

      loadKmlLayer(kmlFile, map);

    }

    function loadKmlLayer(kmlFile, map) {
      var kmlLayer = new google.maps.KmlLayer({
        url :kmlFile,
        suppressInfoWindows: true,
        map: map
      });
      google.maps.event.addListenerOnce(map, 'zoom_changed', function() {
          map.setZoom(8);
      });
      //google.maps.event.addListener(kmlLayer, 'click', function(event) {
      //});
    }

    api.initialize = function(kmlFile, coords) {
        initialize(kmlFile, coords);
    };

    return api;

}
