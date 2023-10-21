import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import styles from '../ContactList/ContactList.module.css';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div>
      {name + ':' + number}
      {
        <button
          className={styles.TaskList_button}
          type="button"
          name="delete"
          onClick={handleDelete}
        >
          Delete
        </button>
      }
    </div>
  );
};
