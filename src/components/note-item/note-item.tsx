import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { HiArchive } from 'react-icons/hi';
import { getCategoryIconUrl } from '../../helpers/get-category-url';

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
    <div className='grid grid-cols-7 m-3 w-full bg-gray-300'>
      <div className='flex m-3'>
        <img
          className='w-8 h-8 mr-2'
          src={getCategoryIconUrl(note.category)}
          alt={note.category}
        ></img>
        <div>{name}</div>
      </div>
      <div className='m-3'>{createdAt}</div>
      <div className='m-3'>{category}</div>
      <div className='m-3 col-span-2'>{content}</div>
      <div className='m-3'>{dates.join(',')}</div>
      <div className='m-3'>
        <button
          className='text-2xl hover:text-gray-500 m-1'
          onClick={() => onEdit(note)}
        >
          <AiFillEdit />
        </button>
        <button
          className='text-2xl hover:text-gray-500 m-1'
          onClick={() => onArchive(note)}
        >
          <HiArchive />
        </button>
        <button
          className='text-2xl hover:text-gray-500 m-1'
          onClick={() => onDelete(note.id)}
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
