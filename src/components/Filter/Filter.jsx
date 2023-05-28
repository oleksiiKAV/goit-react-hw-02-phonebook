import PropTypes from 'prop-types';
import {
  InputStyled,
  CaptionFStyled,
} from 'components/ContactForm/ContactForm.styled';

const Filter = ({ filterContacts, filter }) => {
  return (
    <>
      <CaptionFStyled>Find contacts by name</CaptionFStyled>
      <InputStyled onChange={filterContacts} value={filter} type="text" />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  filterContacts: PropTypes.func,
};

export default Filter;
