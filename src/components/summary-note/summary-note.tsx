import { useAppSelector } from '../../hooks/use-app-selector.hook';
import { selectNotes } from '../../store/notes/reducer';
import { Note } from '../note-item/note-item';
import styles from './styles.module.css';

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
    <div className={styles.summaryTable}>
      <div className={styles.summaryHeader}>
        <div>Note Category</div>
        <div>Active</div>
        <div>Archived</div>
      </div>

      {summaryData.map((data: any) => (
        <div className={styles.summaryRow} key={data[0]}>
          <div>{data[0]}</div>
          <div>{data[1].active}</div>
          <div>{data[1].archived}</div>
        </div>
      ))}
    </div>
  );
};

export default SummaryNote;
