import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import { Button, List, ListItem } from './ContactList.styled';


export const ContactList = ({ items,  onDeleteContact }) => {
    return (
        <List>
            {items.map(item => (
                <ListItem key={item.id}>
                    <ContactItem item={item} />
                    <Button type="button"
            onClick={() => onDeleteContact(item.id)}>Delete</Button>
                </ListItem>
            ))}
        </List>
    );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
      PropTypes.shape({
          name: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
    })
    ).isRequired,
   onDeleteContact: PropTypes.func.isRequired, 
};
