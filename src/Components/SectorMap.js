import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';


const sectorData = {
  'Health Sector': '#FF6384',
  'Construction Sector': '#36A2EB',
  'Home Service Sector': '#FFCE56',
  'Petcare Sector': '#E63946',
  'Entertainment Sector': '#6B8E23',
  'Event Sector': '#9B9B9B',
};


const geoUrl = 'path_to_your_india_geojson_file.geojson';

const SectorMap = () => {
  const colorScale = scaleOrdinal()
    .domain(Object.keys(sectorData))
    .range(Object.values(sectorData));

  return (
    <div style={{ width: '100%', height: '600px' }}>
      <ComposableMap projection="geoMercator">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              
              const sector = 'Health Sector'; 
              const fill = colorScale(sector);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fill}
                  stroke="#FFFFFF"
                  strokeWidth={0.5}
                  style={{
                    hover: {
                      fill: '#F53',
                      outline: 'none',
                    },
                    pressed: {
                      fill: '#E42',
                      outline: 'none',
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default SectorMap;
