import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import styles from './styles.module.css';

export interface Note {
  id: number;
  name: string;
  createdAt: string;
  content: string;
  category: string;
  dates: string[];
  archived: boolean;
}

interface NoteItemProps {
  note: Note;
  onDelete: (id: number) => void;
  onEdit: (note: Note) => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ note, onDelete, onEdit }) => {
  const { name, createdAt, content, category, dates } = note;

  return (
    <div className={styles.note}>
      <div>{name}</div>
      <div>{createdAt}</div>
      <div>{category}</div>
      <div>{content}</div>
      <div>{dates.join(',')}</div>
      <div>
        <button onClick={() => onDelete(note.id)}>
          <AiFillDelete />
        </button>
        <button onClick={() => onEdit(note)}>
          <AiFillEdit />
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
