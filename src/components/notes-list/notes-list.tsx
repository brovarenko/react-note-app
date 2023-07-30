import React, { useState } from 'react';
import NoteFormModal from '../add-form/note-form';
import NoteItem, { Note } from '../note-item/note-item';
import { useAppSelector } from '../../hooks/use-app-selector.hook';
import { selectNotes } from '../../store/notes/reducer';
import { useAppDispatch } from '../../hooks/use-app-dispatch.hook';
import { deleteNote, archiveNote } from '../../store/notes/reducer';

import styles from './styles.module.css';

const NotesList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showArchived, setShowArchived] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const dispatch = useAppDispatch();
  const notes = useAppSelector(selectNotes);

  const handleAddNote = () => {
    setIsModalOpen(true);
  };

  const handleDeleteNote = (id: number) => {
    dispatch(deleteNote(id));
  };

  const handleEditNote = (note: Note) => {
    setSelectedNote(note);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNote(null);
  };

  const handleArchiveNote = (note: Note) => {
    dispatch(archiveNote(note));
  };

  const handleToggleArchived = () => {
    setShowArchived((prevShowArchived) => !prevShowArchived);
  };

  const filteredNotes = showArchived
    ? notes.filter((note) => note.archived)
    : notes.filter((note) => !note.archived);

  return (
    <div className={styles.notesList}>
      <button className={styles.btn} onClick={handleToggleArchived}>
        {showArchived ? 'Show active notes' : 'Show archived notes'}
      </button>
      <div className={styles.notesListHeader}>
        <div>Name</div>
        <div>Created</div>
        <div>Category</div>
        <div>Content</div>
        <div>Dates</div>
      </div>
      {filteredNotes.length !== 0
        ? filteredNotes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onDelete={handleDeleteNote}
              onEdit={handleEditNote}
              onArchive={handleArchiveNote}
            />
          ))
        : 'No Element'}
      {!showArchived && (
        <button className={styles.btn} onClick={handleAddNote}>
          Create Note
        </button>
      )}
      {isModalOpen && (
        <NoteFormModal note={selectedNote} closeModal={closeModal} />
      )}
    </div>
  );
};

export default NotesList;
