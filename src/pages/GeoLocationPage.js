import React from 'react';
import { usePosition } from 'use-position';

import Loading from '../components/Loading';

const GeoLocation = props => {
  const { latitude, longitude, error } = usePosition();
  if (error !== null) {
    return <h1>{props.error}</h1>;
  } else if (latitude === undefined || longitude === undefined) {
    return <Loading message="Fetching GeoLocation" />;
  } else {
    return (
      <h1 style={{ fontWeight: '100' }}>
        {latitude}, {longitude}
      </h1>
    );
  }
};

export default GeoLocation;
