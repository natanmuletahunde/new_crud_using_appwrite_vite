import React from "react";

function  NoteForm ({setNotes}){
     
  return (
    <form>
      <input type="text" name="body" placeholder="🤔 What's on the agenda?" />
    </form>
  );
};

export default NoteForm;
