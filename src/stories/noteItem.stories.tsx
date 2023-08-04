import React from 'react';
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import NoteItem from '../components/note-item/note-item';

export default {
  component: NoteItem,
} as Meta;

const note = {
  id: 1,
  name: 'Books',
  createdAt: 'July 27, 2023',
  content: 'Buy book',
  category: 'Task',
  dates: [],
  archived: false,
};

export const Default = () => (
  <NoteItem
    note={note}
    onDelete={action('onDelete')}
    onEdit={action('onEdit')}
    onArchive={action('onArchive')}
  />
);

export const Archived = () => (
  <NoteItem
    note={{ ...note, archived: true }}
    onDelete={action('onDelete')}
    onEdit={action('onEdit')}
    onArchive={action('onArchive')}
  />
);

export const WithDates = () => (
  <NoteItem
    note={{ ...note, dates: ['04/04/2020', '05/05/2021'] }}
    onDelete={action('onDelete')}
    onEdit={action('onEdit')}
    onArchive={action('onArchive')}
  />
);
