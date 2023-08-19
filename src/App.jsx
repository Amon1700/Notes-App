import { useState } from "react";
import Header from "./assets/header";
import Footer from "./assets/footer";
import Note from "./assets/note";
import Createnote from "./assets/createnote";

function App() {
  const [notes, setnotes] = useState([])
  const [note, setnote] = useState({
    title: "",
    content: ""
  });
  function handlechange(event) {
    const { name, value } = event.target;
    setnote(prenote => {
      return {
        ...prenote,
        [name]: value
      }
    })
  }

  function addnote() {
    if (note.title.length !== 0 || note.content.length !== 0) {
      setnotes(prenotes => {
        return [...prenotes, note]
      })
    }
    setnote({
      title: "",
      content: ""
    })
  }

  function deletenote(id) {
    setnotes(prenotes => {
      return prenotes.filter((val, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <Createnote add={addnote} change={handlechange} value={note} />
      {notes.map((val, idx) => {
        return <Note key={idx} id={idx} title={val.title} content={val.content} delete={deletenote} />
      })}
      <Footer />
    </div>
  );
}

export default App;