import React from 'react'
import styles from './index.module.css'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
const Card = (props) => {
    return (
        <>
            <div className={styles.card}>

                <>

                    <img className={styles.img} src={props.img} alt="" />
                    <p>{props.cat}</p>

                    <p>{props.title}</p>

                    <p>{props.description}</p>
                    <p>{props.price}</p>


                    <div className={styles.iconscont}>

                        <div onClick={() => props.ondelete(props.id)} className={styles.icons}>
                            <MdDelete color='red'></MdDelete>
                        </div>
                        <div onClick={() => props.onUpdate(props.id, props.title, props.desc)} className={styles.icons}>
                            <FaRegEdit color='white' ></FaRegEdit>
                        </div>
                    </div>
                </>

            </div>
        </>

    )
}

export default Card