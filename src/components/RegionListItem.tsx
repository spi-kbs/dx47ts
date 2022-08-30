import React, { useState } from 'react';
import {Region} from "../types/Prefecture"


export const RegionListItem = ({
  name,
  area,
}: Region) => {
  const [openRegionNames, setOpenRegionNames] = useState<string[]>([]);
  const isOpen = openRegionNames.includes(name);
  // const test = 1;


  if (isOpen) {
    return (
      <button onClick={
        () => setOpenRegionNames(
          openRegionNames.filter(
            (openRegion) => openRegion !== name
            )
          )
        }>{name}</button>
    )
  } else {
    return (
      <>
        <button onClick={() => setOpenRegionNames(openRegionNames.concat(name))}>
          {name}
        </button>
        <RegionListItem2 name={name} area={area} />
      </>
    )
  }
  // <dt key={name}>
  //   <dt>{name}</dt>
  //   {area.map(({ name }) => (
  //     <dd>{name}</dd>
  //   ))}
  // </dt>
};


export const RegionListItem2 = ({
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


export const RegionClosedListItem = ({
  name,
}: Pick<Region, "name">) => {
  return (
    <dt key={name}>
      <dt>{name}</dt>
      {/* {area.map(({ name }) => (
        <dd>{name}</dd>
      ))} */}
    </dt>
  );
};
