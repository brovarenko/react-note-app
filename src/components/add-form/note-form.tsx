import React, { useState } from 'react';
//import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../../hooks/use-app-dispatch.hook';
import { addNote } from '../../store/notes/reducer';
import { Note } from '../note-item/note-item';

import styles from './styles.module.css';

interface NoteFormModalProps {
  closeModal: () => void;
}

const categories = ['Task', 'Random Thought', 'Idea'];

const NoteFormModal: React.FC<NoteFormModalProps> = ({ closeModal }) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newNote: Note = {
      id: Date.now(),
      name,
      createdAt: new Date().toLocaleDateString('en-US'),
      content,
      category,
      dates: extractDatesFromContent(content),
      archived: false,
    };
    dispatch(addNote(newNote));
    closeModal();
  };

  // Helper function to extract dates from the content field
  const extractDatesFromContent = (text: string): string[] => {
    const datePattern = /\b\d{1,2}[./]\d{1,2}[./]\d{4}\b/g;
    return text.match(datePattern) || [];
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Create Note</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
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
          <button type='submit'>Create</button>
          <button type='button' onClick={closeModal}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default NoteFormModal;
