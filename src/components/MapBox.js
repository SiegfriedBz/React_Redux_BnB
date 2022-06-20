import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Map, { Marker, Source, Layer } from 'react-map-gl';
import { v4 as uuidv4 } from 'uuid';
import "../styles/map.css"
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN =  process.env.REACT_APP_MAPBOX_API;

const MapBox = ({ flats }) => {

  const [viewPort, setViewPort] = useState({
    latitude: 47.3983,
    longitude: 8.5417,
    zoom: 8
  });

  const [flatMarkers, setFlatMarkers] = useState("")



  // useEffect(() => {
  //   let allFlatMarkers = []
  //   // Add blue Markers to all flats
  //   if(flats) {
  //     allFlatMarkers = flats.map(flat => {
  //       return {...flat, color:"blue"}
  //     })
  //   }
    // Add a yellow Marker to selected flat
  //   if(selectedFlat) {
  //     let yellowFlatMarker = {...selectedFlat, color:"yellow"}
  //     allFlatMarkers = allFlatMarkers.filter(marker => marker.id !== selectedFlat.id)
  //     allFlatMarkers = [...allFlatMarkers, yellowFlatMarker]
  //   }

  //   setFlatMarkers(allFlatMarkers)

  //   return () => {
  //     setFlatMarkers("")
  //   }

  // }, [flats, selectedFlat])



  return (
    <div className="map-container">
      <Map
        {...viewPort}
        onMove={prev => setViewPort(prev.viewPort)}
        onViewportChange={viewPort => setViewPort(viewPort)}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {/* {flats && flatMarkers && flatMarkers.map(marker =>
          <Marker
            key={marker.id}
            latitude={marker.lat}
            longitude={marker.long}
            >
            <Link
              to={`${marker.id}`}
              className={clsx({
                "btn btn-sm rounded-3 p-1": true,
                "btn-primary": marker.color === "blue",
                "btn-warning": marker.color === "yellow",
              })
              }>€{marker.price}
            </Link>
          </Marker>
          ) */}

        {/* } */}
        {/* {userMarker &&
          <Marker
            latitude={userMarker.lat}
            longitude={userMarker.long}
            >
              <button className="btn btn-sm rounded-3 p-1 btn-success">Me</button>
          </Marker>
        } */}
      </Map>
    </div>
  )
}

export default MapBox
