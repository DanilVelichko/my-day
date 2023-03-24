import { useMemo } from 'react';
import { Suspense, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Components
import Form from 'components/ContactComponents/Form/Form';
import Filter from 'components/ContactComponents/Filter/Filter';
// Redux
import { addFilter } from 'redux/filter/sliceFilter';
import { addContacts, deleteContact } from 'redux/contacts/operationsContacts';
import { selectContacts, selectFilter } from 'redux/selectors';
// Services
import { Container } from 'components/App.styled';
import  css  from './PhonebookPage.module.css';

const ContactsList = lazy(() => import('components/ContactComponents/ContactsList/ContactsList'));

const Phonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const formSubmitHandler = data => {
    const matchNameInput = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (matchNameInput) {
      alert(data.name + ' is already in contacts.');
    } else {
      dispatch(addContacts(data));
    }
  };

  const handleDataUpdate = input => {
    dispatch(addFilter(input.currentTarget.value));
  };

  const filteredContacts = useMemo(() => {
    if (filter !== '') {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase().trim())
      );
    } else {
      return contacts;
    }
  }, [contacts, filter]);

  const onDeleteBtn = id => {
    dispatch(deleteContact(id));
  };

  return (
    <Container>
        <h2 className={css.title}>My Contacts</h2>
      <div className={css.box}>
      <Form clickSubmit={formSubmitHandler} />

      <Filter onDataUpdate={handleDataUpdate} />

      <Suspense fallback={<div>Loading...</div>}>
        <ContactsList
          arrContacts={filteredContacts}
          onDeleteBtn={onDeleteBtn}
        />
        </Suspense>
        </div>
    </Container>
  );
};

export default Phonebook;
