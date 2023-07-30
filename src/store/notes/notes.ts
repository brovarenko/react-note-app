export const notesData = [
  {
    id: 1,
    name: 'Books',
    createdAt: 'July 27, 2023',
    content: 'Buy book',
    category: 'Task',
    dates: [],
    archived: true,
  },
  {
    id: 2,
    name: 'Books',
    createdAt: 'July 27, 2023',
    content: 'Buy book 04.04.2020',
    category: 'Idea',
    dates: ['04/04/2020'],
    archived: false,
  },
  {
    id: 3,
    name: 'Books',
    createdAt: 'July 26, 2023',
    content: 'Project discussion',
    category: 'Task',
    dates: [],
    archived: false,
  },
];

export interface Note {
  id: number;
  name: string;
  createdAt: string;
  content: string;
  category: string;
  dates: string[];
  archived: boolean;
}
