import React, { Fragment } from "react";
import ListItem from "./ListItem";

const List = (props) => {
  return (
    <Fragment>
      {props.items.map((item) => (
        <ListItem key={item.id} data={item} />
      ))}
    </Fragment>
  );
};

export default List;
