import React, { Component } from 'react';

import styles from './styles.module.scss';

class Input extends Component {
  render() {
    const { name, type, placeholder, onChange } = this.props;
    return (
        <input className={styles.input} name={name} type={type} placeholder={placeholder} onChange={(e) => onChange(e.target.value)}></input>
    );
  }
}

export default Input;