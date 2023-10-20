import { useDispatch, useSelector } from 'react-redux';
import { getFilter, setFilter } from '../../redux/filtersSlice';

export const Filter = () => {
const filter = useSelector(getFilter);
const dispatch = useDispatch();

  return (
    <div>
      Find contacts by name
      <input
        type="text"
        name={filter}
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
}

