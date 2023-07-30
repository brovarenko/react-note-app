import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { HiArchive } from 'react-icons/hi';
import { getCategoryIconUrl } from '../../helpers/get-category-url';
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
  onArchive: (note: Note) => void;
}

const NoteItem: React.FC<NoteItemProps> = ({
  note,
  onDelete,
  onEdit,
  onArchive,
}) => {
  const { name, createdAt, content, category, dates } = note;

  return (
    <div className={styles.note}>
      <div className={styles.name}>
        <img
          className={styles.icon}
          src={getCategoryIconUrl(note.category)}
          alt={note.category}
        ></img>
        <div>{name}</div>
      </div>
      <div>{createdAt}</div>
      <div>{category}</div>
      <div>{content}</div>
      <div>{dates.join(',')}</div>
      <div className={styles.btnGroup}>
        <button className={styles.btn} onClick={() => onEdit(note)}>
          <AiFillEdit />
        </button>
        <button className={styles.btn} onClick={() => onArchive(note)}>
          <HiArchive />
        </button>
        <button className={styles.btn} onClick={() => onDelete(note.id)}>
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
