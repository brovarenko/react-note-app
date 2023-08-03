import React, { useState } from 'react';
import NoteFormModal from '../add-form/note-form';
import NoteItem, { Note } from '../note-item/note-item';
import { useAppSelector } from '../../hooks/use-app-selector.hook';
import { selectNotes } from '../../store/notes/reducer';
import { useAppDispatch } from '../../hooks/use-app-dispatch.hook';
import { deleteNote, archiveNote } from '../../store/notes/reducer';

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
    <div className='flex flex-col items-center m-20 w-70 bg-gray-200'>
      <button
        className='self-end m-5 px-3 py-2 bg-green-500 text-white rounded cursor-pointer hover:bg-green-600'
        onClick={handleToggleArchived}
      >
        {showArchived ? 'Show active notes' : 'Show archived notes'}
      </button>
      <div className='grid grid-cols-7 bg-green-300 w-full'>
        <div className='m-3'>Name</div>
        <div className='m-3'>Created</div>
        <div className='m-3'>Category</div>
        <div className='m-3 col-span-2'>Content</div>
        <div className='m-3'>Dates</div>
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
        <button
          className='self-end m-5 px-3 py-2 bg-green-500 text-white rounded cursor-pointer hover:bg-green-600'
          onClick={handleAddNote}
        >
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
