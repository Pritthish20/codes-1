import React from "react";

import Entry from "./Entry";

function Card(emojipedia) {
  return (
    <Entry
      id={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

export default Card;
