import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = ({ data }) => {
  return (
    <div>
      {data.map((object, index) => <Tile object={object} key={index} />)}
    </div>
  );
};
