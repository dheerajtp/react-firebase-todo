import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Button } from "@material-ui/core";
import { db } from "./firebase_config";
export default function Todo({ todo, inprogress, id }) {
  const toggleInprogress = () => {
    db.collection("todo").doc(id).update({
      inprogress: !inprogress,
    });
  };

  const deleteTodo = () => {
    db.collection("todo").doc(id).delete();
  };
  return (
    <div style={{ display: "flex" }}>
      <ListItem>
        <ListItemText
          primary={todo}
          secondary={inprogress ? "In Progress  🏊" : "Completed  🏄"}
        />
      </ListItem>
      <Button onClick={toggleInprogress}>
        {inprogress ? "Done 🚀" : "UnDone  🚁"}
      </Button>
      <Button onClick={deleteTodo}>x</Button>
    </div>
  );
}
