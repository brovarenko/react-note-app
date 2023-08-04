import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/use-app-dispatch.hook';
import { addNote, editNote } from '../../store/notes/reducer';
import { Note } from '../../store/notes/notes';

interface NoteFormModalProps {
  note: Note | null;
  closeModal: () => void;
}

export const categories = ['Task', 'Random Thought', 'Idea'];

const NoteFormModal: React.FC<NoteFormModalProps> = ({ note, closeModal }) => {
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
      createdAt: note
        ? note.createdAt
        : new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
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
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white p-8 rounded-md shadow-md'>
        <h2 className='mt-0 font-bold'>{note ? 'Edit Note' : 'Add Note'}</h2>
        <form className='flex flex-col w-60' onSubmit={handleSubmit}>
          <label className='mb-4'>Name:</label>
          <input
            className='p-2 mb-5 border border-gray-300 rounded-md'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label className='mb-4 '>Content:</label>
          <textarea
            className='mb-5 border border-gray-300 rounded-md'
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <label className='mb-4'>Category:</label>
          <select
            className='py-2 mb-5 border border-gray-300 rounded-md'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button
            className='m-1 px-3 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600'
            type='submit'
          >
            {note ? 'Save' : 'Add'}
          </button>
          <button
            className='m-1 px-3 py-2 bg-gray-100 text-gray-600 rounded cursor-pointer hover:bg-red-600 hover:text-white'
            type='button'
            onClick={closeModal}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default NoteFormModal;
