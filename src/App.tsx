import React from 'react';
import NotesList from './components/notes-list/notes-list';
import './App.css';
import SummaryNote from './components/summary-note/summary-note';

function App() {
  return (
    <div className='App'>
      <NotesList />
      <SummaryNote />
    </div>
  );
}

export default App;
