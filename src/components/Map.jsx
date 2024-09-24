/* eslint-disable no-unused-vars */
import { useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <h2>
        Position: {lat}, {lng}
      </h2>
      <button onClick={() => setSearchParams({ lat: 0, lng: 1 })}>Change position</button>
    </div>
  );
}

export default Map;
