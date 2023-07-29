import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/use-app-dispatch.hook';
import { addNote, editNote } from '../../store/notes/reducer';
import { Note } from '../note-item/note-item';

import styles from './styles.module.css';

interface NoteFormModalProps {
  note: Note | null;
  closeModal: () => void;
}

const categories = ['Task', 'Random Thought', 'Idea'];

const NoteFormModal: React.FC<NoteFormModalProps> = ({ note, closeModal }) => {
  console.log(note);
  const [name, setName] = useState(note ? note.name : '');
  const [content, setContent] = useState(note ? note.content : '');
  const [category, setCategory] = useState(
    note ? note.category : categories[0]
  );

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newNote: Note = {
      id: note ? note.id : Date.now(),
      name,
      createdAt: note ? note.createdAt : new Date().toLocaleDateString('en-US'),
      content,
      category,
      dates: extractDatesFromContent(content),
      archived: note ? note.archived : false,
    };
    if (note) {
      dispatch(editNote(newNote));
    } else {
      dispatch(addNote(newNote));
    }
    closeModal();
  };

  const extractDatesFromContent = (text: string): string[] => {
    const datePattern = /\b\d{1,2}[./]\d{1,2}[./]\d{4}\b/g;
    return text.match(datePattern) || [];
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>{note ? 'Edit Note' : 'Add Note'}</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <label>Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button type='submit'>{note ? 'Save' : 'Add'}</button>
          <button type='button' onClick={closeModal}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default NoteFormModal;
