import { Button } from "./Button";
import  {useState}  from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, addContacts } from '../redux/ContactsSlice';
export function  Form () {
  
  const [name,setName] = useState('');
  const [number,setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

const handleInput = evt => {
  setName (evt.target.value);
  }

const handleNumber = evt => {
  setNumber(evt.target.value);
  }
      
const handleSubmit = evt => {
        evt.preventDefault();
        const searchSameName = contacts.some
        ( cont => cont.name.toLowerCase() === name.toLowerCase() );
    
        if (searchSameName) {
          alert(`${name} is already in contacts`);
        } else if (name.length === 0) {
          alert("Fields must be filled!");
        } else {
dispatch(addContacts ({name, number}));
        }
        reset();
      };
    
      const reset = () => {
        setName('');
        setNumber('');
      };
        return (
        <form onSubmit={handleSubmit}>
        <label  style={{       
         display: 'flex',
          }}>
          Name
       <input
        
      type="text"
      name="name"
      value={name}
         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
      onChange = {handleInput}
/>
</label>

<label>
Number
<input
  type="tel"
  name="number"
  value={number}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  onChange = {handleNumber}
/>
<br/>
</label>
<Button/>
</form>
);
}
