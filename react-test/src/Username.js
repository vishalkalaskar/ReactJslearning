// Username.js
import React, { useState } from "react";

export default function Username({setUsername,username}) {
  return (
    <input
      type="text"
      placeholder="Enter name"
      value={username} 
      onChange={(e) => setUsername(e.target.value)}
    />
  );
}
