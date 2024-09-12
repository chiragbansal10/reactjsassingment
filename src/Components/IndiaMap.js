import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleOrdinal } from 'd3-scale';

const indiaTopoJson ={
  "type": "Topology",
  "objects": {
    "IND_adm1": {
      "type": "GeometryCollection",
      "geometries": [
        {
          "type": "Polygon",
          "arcs": [[0, 1, 2, 3, 4]],
          "properties": { "NAME_1": "Region 1" }
        },
        {
          "type": "Polygon",
          "arcs": [[5, 6, 7, 8]],
          "properties": { "NAME_1": "Region 2" }
        }
      ]
    }
  },
  "arcs": [
    [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4]], 
    [[5, 5], [6, 6], [7, 7], [8, 8]]
  ]
}



const colorScale = scaleOrdinal()
  .domain(['health', 'construction', 'homeService', 'petcare', 'entertainment', 'event'])
  .range(['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff']);


const data = {
  'Region 1': 'health',
  'Region 2': 'construction',
  
};

const IndiaMap = () => {
  return (
    <ComposableMap projection="geoMercator">
      <Geographies geography={indiaTopoJson}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const { NAME_1 } = geo.properties; 
            const sector = data[NAME_1]; 

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={sector ? colorScale(sector) : '#ccc'} 
                stroke="#FFFFFF"
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
  );
};

export default IndiaMap;
