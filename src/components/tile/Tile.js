import React from "react";

export const Tile = (props) => {
  const values = Object.values(props.object);
  console.log(values);
  return (
    <div className="tile-container">
      {values.map((e) => {
        if (typeof e === "object") {
          return <p className="title">{JSON.stringify(e)}</p>;
        } else {
          return <p className="tile">{e}</p>;
        }
      })}
    </div>
  );
};
