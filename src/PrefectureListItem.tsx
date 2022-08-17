import React from "react";
import {Region} from "./interface/Prefecture"


export const PrefectureListItem = ({
  name,
  area,
}: Region) => {
  return (
    <dt key={name}>
      <dt>{name}</dt>
      {area.map(({ name, prefecture }) => (
        <dd>{name}</dd>
      ))}
    </dt>
  );
};



