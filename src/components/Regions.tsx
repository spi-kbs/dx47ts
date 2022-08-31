import React, { useState } from 'react';
import {Region} from "../types/Prefecture"


export const RegionAccordion = ({
  name,
  area,
}: Region) => {
  const [openRegionNames, setOpenRegionNames] = useState<string[]>([]);
  const isOpen = openRegionNames.includes(name);


  if (isOpen) {
    return (
      <div>
        <button onClick={
          () => setOpenRegionNames(
            openRegionNames.filter(
              (openRegion) => openRegion !== name
              )
            )
        }>{name}({area.length})</button>
      </div>
    )
  } else {
    return (
      <div>
        <button onClick={() => setOpenRegionNames(openRegionNames.concat(name))}>
          {name}({area.length})
        </button>
        <Regions name={name} area={area} />
      </div>
    )
  }
};


export const Regions = ({
  name,
  area,
}: Region) => {
  return (
    <dt key={name}>
      <dt>{name}</dt>
      {area.map(({ name }) => (
        <dd>{name}</dd>
      ))}
    </dt>
  );
};
