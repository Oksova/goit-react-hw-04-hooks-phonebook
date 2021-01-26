import { useState } from 'react';
import shortid from 'shortid';
import s from './ContactsForm.module.css';
import PropTypes from 'prop-types';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleNameChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const onSubmitForm = e => {
    e.preventDefault();
    onSubmit(name, number);
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form className={s.form} onSubmit={onSubmitForm}>
      <label className={s.formLabel} htmlFor={nameInputId}>
        Name
        <input
          className={s.formInput}
          type="text"
          name="name"
          placeholder="John Doe"
          value={name}
          onChange={handleNameChange}
          id={nameInputId}
        ></input>
      </label>
      <label className={s.formLabel} htmlFor={numberInputId}>
        Number
        <input
          className={s.formInput}
          type="phone"
          name="number"
          placeholder="111-11-11"
          value={number}
          onChange={handleNameChange}
          id={numberInputId}
        ></input>
      </label>
      <button className={s.addBtn} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   nameInputId = shortid.generate();
//   numberInputId = shortid.generate();

//   handleNameChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   onSubmitForm = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);

//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };
//   render() {
//     return (
//       <form className={s.form} onSubmit={this.onSubmitForm}>
//         <label className={s.formLabel} htmlFor={this.nameInputId}>
//           Name
//           <input
//             className={s.formInput}
//             type="text"
//             name="name"
//             placeholder = "John Doe"
//             value={this.state.name}
//             onChange={this.handleNameChange}
//             id={this.nameInputId}
//           ></input>
//         </label>
//         <label className={s.formLabel} htmlFor={this.numberInputId}>
//           Number
//           <input
//             className={s.formInput}
//             type="phone"
//             name="number"
//             placeholder="111-11-11"
//             value={this.state.number}
//             onChange={this.handleNameChange}
//             id={this.numberInputId}
//           ></input>
//         </label>
//         <button className={s.addBtn} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }
// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// export default ContactForm;
