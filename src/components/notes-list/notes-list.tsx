import React from 'react';

import NoteItem from '../note-item/note-item';
import styles from './styles.module.css';

const notes = [
  {
    id: 1,
    name: 'Books',
    createdAt: 'July 27, 2023',
    content: 'Buy book',
    category: 'Task',
    dates: [],
    archived: false,
  },
  {
    id: 2,
    name: 'Books',
    createdAt: 'July 27, 2023',
    content: 'Buy book 04.04.2020',
    category: 'Idea',
    dates: ['04/04/2020'],
    archived: false,
  },
  {
    id: 3,
    name: 'Books',
    createdAt: 'July 26, 2023',
    content: 'Project discussion',
    category: 'Task',
    dates: [],
    archived: false,
  },
];

const NotesList: React.FC = () => {
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
    </div>
  );
};

export default NotesList;
