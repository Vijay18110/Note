import React from 'react'
import styles from './index.module.css'
const Button = (props) => {
    return (
        <button onClick={props.save} className={styles.btn}>{props.name}</button>
    )
}

export default Button