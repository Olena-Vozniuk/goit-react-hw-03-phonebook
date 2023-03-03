import PropTypes from 'prop-types';

export const ContactItem = ({ item }) => {
    return <p>{item.name}: {item.number}</p>    
};

ContactItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    
};