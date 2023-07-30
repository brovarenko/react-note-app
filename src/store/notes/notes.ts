export const notesData = [
  {
    id: 1,
    name: 'Buy Groceries',
    createdAt: 'July 27, 2023',
    content: 'Buy fruits and vegetables',
    category: 'Task',
    dates: [],
    archived: false,
  },

  {
    id: 2,
    name: 'Idea for Blog',
    createdAt: 'July 27, 2023',
    content: 'Write about a travel experience',
    category: 'Idea',
    dates: [],
    archived: false,
  },
  {
    id: 3,
    name: 'Project',
    createdAt: 'July 26, 2023',
    content: 'Project discussion',
    category: 'Task',
    dates: [],
    archived: false,
  },
  {
    id: 4,
    name: 'Project',
    createdAt: 'July 27, 2023',
    content: 'Start a new project',
    category: 'Task',
    dates: [],
    archived: false,
  },
  {
    id: 5,
    name: 'Books',
    createdAt: 'July 27, 2023',
    content: 'Buy book',
    category: 'Random Thought',
    dates: [],
    archived: false,
  },
  {
    id: 6,
    name: 'Write Blog Post',
    createdAt: 'July 24, 2023',
    content: 'Topic: JavaScript Best Practices',
    category: 'Idea',
    dates: [],
    archived: false,
  },

  {
    id: 7,
    name: 'Project Meeting',
    createdAt: 'July 26, 2023',
    content: 'Discuss project strategy',
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
