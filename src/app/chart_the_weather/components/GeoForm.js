import React, { useState, useEffect, useCallback } from 'react';
import Geocode from 'react-geocode';

Geocode.setApiKey('AIzaSyBIhVwxTief_N49XBPFWRl6CuI3WP4wIrg');

// all things with address + lat+long go into a component
export default function GeoForm({ setLatLng }) {
  const [value, setValue] = useState('Las Vegas');

  const getLatLng = useCallback((address) => {
    Geocode.fromAddress(address).then((response) => {
      const { lat, lng } = response.results[0].geometry.location;

      setLatLng({ lat, lng });
    });
  }, []);

  useEffect(() => {
    getLatLng(value);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    getLatLng(value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
