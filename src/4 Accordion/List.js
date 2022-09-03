import React, { useState } from 'react';
import style from './List.module.css';
import { IoIosAddCircle, IoMdRemoveCircle } from "react-icons/io";


function List(props) {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className={style.parent}>
                <div className={style.question}>
                    <button onClick={() => setShow(!show)}>{show ? <IoMdRemoveCircle className={style.deletebtn} /> : <IoIosAddCircle className={style.addbtn} />} </button>
                    <p>{props.question} </p>
                </div>
                {show && <p className={style.answer}>{props.answer} </p>}
            </div>
        </>
    )
}

export default List;