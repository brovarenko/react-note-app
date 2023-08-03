import React from 'react';
import NotesList from './components/notes-list/notes-list';
import SummaryNote from './components/summary-note/summary-note';

function App() {
  return (
    <div className='flex flex-col h-screen'>
      <NotesList />
      <SummaryNote />
    </div>
  );
}

export default App;
