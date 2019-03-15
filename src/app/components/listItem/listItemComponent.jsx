import React from 'react';

import styles from './styles.module.scss';

const ListItemComponent = (props) => {
  const { content, removeItem } = props;

  const remove = (e, id) => {
    e.preventDefault();
    removeItem(id)
  }

  return (
    <li className={styles.listItem}>
      {content.text}
      <a href="" onClick={(e) => {remove(e, content.id)}}>&Chi;</a>
    </li>
  )
}

export default ListItemComponent;