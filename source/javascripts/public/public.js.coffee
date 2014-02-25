$ ->
  google.maps.visualRefresh = true
  map = null
  initialize = ->
    myLatlng = new google.maps.LatLng(39.9833, -82.9833);
    mapOptions =
      zoom: 13
      center: new google.maps.LatLng(39.9833, -82.9833)

    map = new google.maps.Map(document.getElementById("footer_map"), mapOptions)

    marker = new google.maps.Marker(
      position: myLatlng,
      map: map,
      title: 'Capstory HQ'
    )

  google.maps.event.addDomListener window, "load", initialize


  $(".show_map").click (e) ->
    e.preventDefault()
    $("#footer_map").height("400px")
    google.maps.event.trigger(map,'resize')
    location.href = "#footer_map"

