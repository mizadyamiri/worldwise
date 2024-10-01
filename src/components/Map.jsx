/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useCities } from '../contexts/CitiesContext';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import styles from './Map.module.css';

function Map() {
  const { cities } = useCities();
  console.log(cities);
  const [mapPosition, setMapPosition] = useState([50, 0]);

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat') || 0;
  const lng = searchParams.get('lng') || 0;

  return (
    <div className={styles.mapContainer} onClick={() => navigate('form')}>
      <MapContainer
        center={mapPosition}
        zoom={5}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        />
        {cities.map(city => (
          <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
