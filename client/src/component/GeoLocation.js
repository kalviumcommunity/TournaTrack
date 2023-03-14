import React, { useState, useEffect } from 'react';

function GeoLocation() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(position.coords);
    });
  }, []);

  return (
    <div>
      {location ? (
        <div>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </div>
      ) : (
        <div>Loading location...</div>
      )}
    </div>
  );
}

export default GeoLocation;
