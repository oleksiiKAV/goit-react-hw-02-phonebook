import PropTypes from 'prop-types';
import { BtnStyled } from 'components/ContactForm/ContactForm.styled';
import { ItemStyled, ListStyled } from './ContactList.styled';

const ContactList = ({ contacts, removeContacts }) => {
  return (
    <ListStyled>
      {contacts.map(el => (
        <ItemStyled key={el.id}>
          {el.name}: {el.number}
          <BtnStyled onClick={() => removeContacts(el.id)}>Delete</BtnStyled>
        </ItemStyled>
      ))}
    </ListStyled>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  removeContacts: PropTypes.func,
};

export default ContactList;
