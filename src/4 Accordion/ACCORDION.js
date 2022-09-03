import React, { useState } from 'react';
import style from './App.module.css';
import List from './List';
import { Api } from './Api';

function ACCORDION() {
    const [array, setArray] = useState(Api);

    return (
        <>
            <div className={style.parent}>
                <div className={style.box}>
                    <h3>React Interview Question</h3>
                    <ol>
                        {array.map((obj) => {
                            const { id, question, answer } = obj;
                            return <List key={id} question={question} answer={answer} />
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default ACCORDION;