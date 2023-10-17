import NoteCard from "../NoteCard/NoteCard";

export default function NoteList({ filteredNotes }) {
  return (
    <ul className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 p-0">
      {[...filteredNotes].reverse().map((note) => (
        <NoteCard
          key={note.id}
          text={note.text}
          title={note.title}
          id={note.id}
        />
      ))}
    </ul>
  );
}
