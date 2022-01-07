import React, { Fragment } from "react";
import ListItem from "./ListItem";

const List = () => {
  const datas = [
    {
      name: "Pista",
    },
    { name: "Jenő" },
  ];
  return (
    <Fragment>
      {datas.map((data) => (
        <ListItem key={data.name} data={data} />
      ))}
    </Fragment>
  );
};

export default List;
