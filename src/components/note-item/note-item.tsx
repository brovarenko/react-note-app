import React from 'react';
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
}

const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
  const { name, createdAt, content, category, dates } = note;

  return (
    <div className={styles.note}>
      <div>{name}</div>
      <div>{createdAt}</div>
      <div>{category}</div>
      <div>{content}</div>
      <div>{dates.join(',')}</div>
    </div>
  );
};

export default NoteItem;
