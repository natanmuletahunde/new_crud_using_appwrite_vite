import { useEffect, useState } from "react";
import db from "../appwrite/databases";
import NoteForm from "../components/NoteForm";
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
      <NoteForm setNotes={setNotes} />
        <div>
        {notes.map((note) => (
        <div key={note.$id}>{note.body}</div>
      ))}
        </div>
     
    </div>
  );
}

export default Notes;
