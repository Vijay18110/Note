import React, { useState } from 'react'
import InputField from '../../widgets/input'
import styles from './index.module.css'
import Button from '../../widgets/buttons'
const Form = (props) => {

    return (
        <>
            <div className={styles.formCont}>
                <InputField title={props.title} ongetdata={props.ongetdata} type={props.type} placeholder="enter the title"></InputField>
                <textarea value={props.desc} onChange={(e) => props.ongetdatadesc(e)} placeholder='enter the description' className={styles.textarea} name="" id=""></textarea>
            </div>
            <div className={styles.btncont}>
                <Button save={props.save} name={props.btnname}></Button>
            </div>
        </>
    )
}

export default Form