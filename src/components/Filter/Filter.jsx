import PropTypes from 'prop-types';
import styles from './Filter.module.css';

export const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = event => {
    setFilter(event.target.value);
  };
  return (
     <div className={styles.formField}>
        <label className={styles.formLabel}>Find Contacts by Name</label>    
        <input
          type="text"
          name="filter"
          placeholder="Search by Name"
          value={filter}
          onChange={handleFilterChange}
          className={styles.formInput}
        />
    </div>
  );
};
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};