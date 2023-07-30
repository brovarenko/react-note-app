export function getCategoryIconUrl(category: any) {
  switch (category) {
    case 'Task':
      return 'images/task.png';
    case 'Random Thought':
      return 'images/random.png';
    case 'Idea':
      return 'images/idea.png';
    default:
      return '';
  }
}
