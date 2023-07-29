import React, { useState } from 'react';
import NoteFormModal from '../add-form/note-form';
import NoteItem from '../note-item/note-item';
import { useAppSelector } from '../../hooks/use-app-selector.hook';
import { selectNotes } from '../../store/notes/reducer';
import styles from './styles.module.css';

const NotesList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const notes = useAppSelector(selectNotes);

  const handleAddNote = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.notesList}>
      <div className={styles.notesListHeader}>
        <div>Name</div>
        <div>Created</div>
        <div>Category</div>
        <div>Content</div>
        <div>Dates</div>
      </div>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
      <button onClick={handleAddNote}>Create Note</button>
      {isModalOpen && <NoteFormModal closeModal={closeModal} />}
    </div>
  );
};

export default NotesList;
