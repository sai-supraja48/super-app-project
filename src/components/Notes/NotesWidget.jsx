import { useEffect, useState } from "react";

function NotesWidget() {
  const [note, setNote] = useState("");

  useEffect(() => {
    const savedNote = localStorage.getItem("note");

    if (savedNote) {
      setNote(savedNote);
    }
  }, []);

  const handleChange = (e) => {
    setNote(e.target.value);
    localStorage.setItem("note", e.target.value);
  };

  const clearNotes = () => {
    const confirmClear = window.confirm(
      "Are you sure you want to clear all notes?"
    );

    if (confirmClear) {
      setNote("");
      localStorage.removeItem("note");
    }
  };

  return (
    <div className="card notes-card">

      <h2>All Notes</h2>

      <textarea
        value={note}
        onChange={handleChange}
        placeholder="Write your notes..."
      />

      <button
        className="notes-btn"
        onClick={clearNotes}
      >
        Clear Notes
      </button>

    </div>
  );
}

export default NotesWidget;