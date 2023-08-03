import { useAppSelector } from '../../hooks/use-app-selector.hook';
import { selectNotes } from '../../store/notes/reducer';
import { Note } from '../note-item/note-item';

const SummaryNote: React.FC = () => {
  const notes = useAppSelector(selectNotes);

  const updateSummaryData = (notes: Note[]) => {
    const summary: {
      [category: string]: { active: number; archived: number };
    } = {};

    notes.forEach((note) => {
      if (!summary.hasOwnProperty(note.category)) {
        summary[note.category] = { active: 0, archived: 0 };
      }
      if (note.archived) {
        summary[note.category].archived += 1;
      } else {
        summary[note.category].active += 1;
      }
    });
    return summary;
  };

  const summaryData = Object.entries(updateSummaryData(notes));

  return (
    <div className='flex flex-col items-center m-20 w-70 bg-gray-200'>
      <div className='grid grid-cols-3 bg-green-300 w-full'>
        <div className='m-3'>Note Category</div>
        <div className='m-3'>Active</div>
        <div className='m-3'>Archived</div>
      </div>

      {summaryData.map((data: any) => (
        <div className='grid grid-cols-3 bg-gray-300 w-full m-3' key={data[0]}>
          <div className='m-3'>{data[0]}</div>
          <div className='m-3'>{data[1].active}</div>
          <div className='m-3'>{data[1].archived}</div>
        </div>
      ))}
    </div>
  );
};

export default SummaryNote;
