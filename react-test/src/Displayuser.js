import React from "react";

export default function Displayuser({ username }) {
  return <h6>this user name display: {username || "(no name yet)"}</h6>;
}
