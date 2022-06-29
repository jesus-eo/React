import React, { useState} from 'react';
import Wishinput from './Wishlinput';
import ClassNames from 'classnames'

const Wishlist = () => {
    const [age, setAge] = useState(0);
    const [textInputWish, setTextInputWish] = useState('');
    const [list, setList] = useState([
        { text: 'Travel to the moon', done: false },
        { text: 'Pay the gym', done: false },
        { text: 'Go to the gym', done: false },
    ]);

    /**
     * Inserta deseo y restablece el input
     */
    const insertWish = () => {
        if (textInputWish) {
            list.push({
                text: textInputWish,
                done: false
            });
            setTextInputWish('');
        }
    };
    /* Al pulsar el checkbox cambiar el done */
    const toogleDone = (i) => {
        list[i].done = !list[i].done;
        setList(list);
        updateAge();
    };

    const deleteWish = () => {
        setList(list.filter(({ done }) => done === false));
    };

    const updateAge = () => {
        setInterval(() => setAge(a => a + 1), 1000);
    };
    

    return (
        <>
            <Wishinput textInputWish={textInputWish} setTextInputWish={setTextInputWish} />
            <ul>
                {list.map(({ text, done }, i) =>
                (
                    <li key={text} >
                        <input
                            id={text} type='checkbox'
                            /* checked={done} */
                            onChange={() => toogleDone(i)}>
                        </input>
                        <label className={ClassNames(done ? 'wish-label-close' : 'wish-label-open',
                            { 'wish-label_warning': age >= 10, 'wish-label_error': age >= 20 })}
                            htmlFor={text} >{text}</label>
                    </li>
                )
                )}
            </ul>
            <div className='wish-cont-buttons'>
                <button
                    className='wish-cont-button_agregar' type='submit'
                    onClick={() => insertWish()}>Agregar</button>
                <button
                    className='wish-cont-button_eliminar' type='submit'
                    onClick={() => deleteWish()}>
                    Eliminar deseos realizados</button>
            </div>
        </>
    )
};

export default Wishlist;
