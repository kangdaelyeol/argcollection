import React, { useRef, useState } from 'react';
import styles from './main.module.css';
import Entity from './Entity';
import { bubbleSort } from './factory';

const Main = () => {
  const [entities, setEntities] = useState({});
  const [count, setCount] = useState(0);
  const selectRef = useRef();
  const titleRef = useRef();
  const arrayRef = useRef();
  const buttonRef = useRef();
  const button2Ref = useRef();
  const setupRef = useRef();
  const resultRef = useRef();

  const movingComp = () => {
    arrayRef.current.classList.add(styles.startup);
    buttonRef.current.classList.add(styles.startdown);
    button2Ref.current.classList.add(styles.startdown);
    titleRef.current.classList.add(styles.startup);
  };


  const onStartArg = () => {
    // movingComp();
    setTimeout(onArg, 700);
  };

  const setResultCount = (result) => {
    const {cmpCount, swpCount, log} = result;
    for(let i=0; i<swpCount; i++){
      setTimeout(() =>{
        const newEntities = {}
        Object.keys(entities).forEach((e, index) => {
          
        })
        console.log([...log[i+1]]);
      }, (i+1) * 100)
    }
  }

  const onArg = () => {
    // noneComp();
    const arg = selectRef.current.value;
    const argArr = [];
    let result = null;
    Object.keys(entities).forEach((k) => {
      argArr.push(entities[k].value);
    });
    switch (arg) {
      case 'bubbleSort':
        result = bubbleSort(argArr);
        break;
      default:
        throw new Error('not Exist Arr');
    }
    setResultCount(result);
  };

  const asd = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'];
  const useInput = (e, key) => {
    if (e.target.value.length >= 5 && !asd.includes(e.key)) e.preventDefault();
    const newEntities = {
      ...entities,
    };
    newEntities[key] = {
      id: key,
      value: isNaN(Number(e.target.value)) ? 0 : Number(e.target.value),
    };
    setEntities(newEntities);
  };

  const onAddClick = () => {
    if (count >= 20) return;
    const newEntities = {
      ...entities,
      [count]: {
        id: count,
        value: 0,
      },
    };
    setEntities(newEntities);
    setCount(count + 1);
  };

  const onSetRandom = () => {
    const newEntities = {};
    Object.keys(entities).forEach((val, index) => {
      newEntities[index] = {
        id: index,
        value: Math.floor(Math.random() * 10000),
      };
    });
    setEntities(newEntities);
  };

  return (
    <div className={styles.wrapper}>
      <div ref={setupRef} className={styles.main}>
        <h1 ref={titleRef}>Select sort Arg!</h1>
        <div ref={arrayRef} className={styles.arraybox}>
          {Object.keys(entities).map((k) => {
            return (
              <Entity
                keyDown={useInput}
                style={styles.entity}
                id={k}
                val={entities[k].value}
                key={k}
              />
            );
          })}
        </div>
        <div ref={buttonRef} className={styles.optionbox}>
          <select
            ref={selectRef}
            className={styles.select}
            name='sort'
            id='sort'
          >
            <option value='bubbleSort'>bubbleSort</option>
          </select>
          <button
            onClick={() => {
              onStartArg();
            }}
            className={styles.btn}
          >
            Start!
          </button>
        </div>
        <div ref={button2Ref} className={styles.optionbox}>
          <button onClick={onAddClick} className={styles.btn}>
            Add entity
          </button>
          <button onClick={onSetRandom} className={styles.btn}>
            set ramdom
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
