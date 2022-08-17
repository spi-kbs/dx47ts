import React from "react";
import {Region} from "../types/Prefecture"


export const RegionListItem = ({
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
