import { AppDispatch } from '@/store/configureStore';
import { useDispatch } from 'react-redux';
const useAppDispatch : () => AppDispatch = useDispatch;

export default useAppDispatch;