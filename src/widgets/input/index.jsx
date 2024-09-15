import React from 'react';
import styles from './index.module.css';
function InputField({ placeholder, ongetdata, title }) {
    return (
        <div className={styles.InputFieldcont}>
            <input value={title} onChange={(e) => ongetdata(e)} className={styles.InputField} type="text" placeholder={placeholder} />
        </div>
    )
}

export default InputField