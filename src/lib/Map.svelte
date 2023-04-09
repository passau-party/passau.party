<script lang="ts">
  import Map from 'ol/Map';
  import View from 'ol/View';
  import TileLayer from 'ol/layer/Tile';
  import { OSM } from 'ol/source';
  import XYZ from 'ol/source/XYZ';
  import { onMount } from 'svelte';
  import Geocoder from 'ol-geocoder';

  export let location: string;

  onMount(() => {
    const map: Map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
          }),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });

    const geocoder = new Geocoder();

    geocoder.geocode(location).then((error, response) => {
      const coordinates = response.coordinate;

      map.getView().setCenter(coordinates);
      map.getView().setZoom(12);
    });
  });
</script>

<div id="map" />
