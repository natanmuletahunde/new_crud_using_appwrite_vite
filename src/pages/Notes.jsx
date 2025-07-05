import { useEffect, useState } from "react";
import db from "../appwrite/databases";
function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
     const response = await db.notes.list();
     setNotes(response.documents);
  };

  return (
    <div>
      {notes.map((note) => (
        <div key={note.$id}>{note.body}</div>
      ))}
    </div>
  );
}

export default Notes;
