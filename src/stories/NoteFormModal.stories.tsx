import { StoryObj, Meta } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { action } from '@storybook/addon-actions';
import NoteFormModal, { categories } from '../components/add-form/note-form';

const meta: Meta<typeof NoteFormModal> = {
  component: NoteFormModal,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof NoteFormModal>;

export const AddNote: Story = {
  args: {
    closeModal: () => {
      action('onClose');
    },
  },
};

export const EditNote: Story = {
  args: {
    note: {
      id: 1,
      name: 'Example Note',
      createdAt: '2023-08-04',
      content: 'This is an example note.',
      category: categories[0],
      dates: [],
      archived: false,
    },
    closeModal: () => {
      action('onClose');
    },
  },
};
