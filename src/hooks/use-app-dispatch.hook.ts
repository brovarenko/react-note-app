import { AppDispatch } from '../store/store';
import { useDispatch } from 'react-redux';

const useAppDispatch: () => AppDispatch = () => useDispatch<AppDispatch>();

export { useAppDispatch };
