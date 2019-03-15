import React from 'react';

import ListItemComponent from '../listItem/listItemComponent.jsx';
import Button from '../../../ui/elements/button/Button.jsx';
import Input from '../../../ui/elements/input/Input.jsx';
import styles from './styles.module.scss';

const ListingComponent = (props) => {
  const { data, inputValue, getInputValue, addItem, removeItem } = props;
  
  const addNewItem = (e, value) => {
    e.preventDefault();
    addItem(inputValue);
  }

  const content = data.length > 0
    ? data.map((item) => {
        return <ListItemComponent key={item.id} content={item} removeItem={removeItem}/>
      })
    : <li className={styles.emptyList}>There are no items</li>
  
  return (
    <div className={styles.listingContainer}>
      <div className={styles.listing}>
        {content}
      </div>
      <div className={styles.buttonContainer}>
        <Input placeholder="Type something" onChange={getInputValue}/><a href="" onClick={(e) => addNewItem(e, inputValue)}><Button text="Add Item"/></a>
      </div>
    </div>
  );
}

export default ListingComponent;
