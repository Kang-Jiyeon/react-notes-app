import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";

function App() {
  const [notes, setNote] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "19/03/2022",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "19/03/2022",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "19/03/2022",
    },
  ]);
  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
