import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import NoteItem from '../components/note-item/note-item';

const meta: Meta<typeof NoteItem> = {
  component: NoteItem,
};

export default meta;
type Story = StoryObj<typeof NoteItem>;

const note = {
  id: 1,
  name: 'Books',
  createdAt: 'July 27, 2023',
  content: 'Buy book',
  category: 'Task',
  dates: [],
  archived: false,
};

export const Default: Story = {
  args: {
    note: note,
    onDelete: action('onDelete'),
    onEdit: action('onEdit'),
    onArchive: action('onArchive'),
  },
};

export const Archived: Story = {
  args: {
    note: { ...note, archived: true },
    onDelete: action('onDelete'),
    onEdit: action('onEdit'),
    onArchive: action('onArchive'),
  },
};

export const WithDates: Story = {
  args: {
    note: { ...note, dates: ['04/04/2020', '05/05/2021'] },
    onDelete: action('onDelete'),
    onEdit: action('onEdit'),
    onArchive: action('onArchive'),
  },
};
