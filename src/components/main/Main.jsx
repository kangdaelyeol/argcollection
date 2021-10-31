import React, { useRef, useState } from 'react';
import styles from './main.module.css';
import Entity from './Entity';
import { bubbleSort, selectionSort, insertionSort, shellSort, mergeSort } from './factory';

const Main = () => {
  const [entities, setEntities] = useState({});
  const [count, setCount] = useState(0);
  const [cmp, setCmp] = useState(0);
  const selectRef = useRef();
  const titleRef = useRef();
  const arrayRef = useRef();
  const buttonRef = useRef();
  const button2Ref = useRef();
  const setupRef = useRef();
  const resultRef = useRef();

  const setComponentNone = () => {
    titleRef.current.classList.add(styles.set__op0);
  }

  const onStartArg = () => {
    // movingComp();
    setComponentNone();
    onArg();
  };

  const setResultCount = (result) => {
    const {cmpCount, swpCount, log} = result;

    console.log(log);
    setCmp(cmpCount);

    // Arg start -> Startbtn disabled
    buttonRef.current.children[1].disabled = true;
    // Arg end -> Startbtn active
    setTimeout(() => {
      buttonRef.current.children[1].disabled = false;
    }, swpCount * 100);


    for(let i=0; i<swpCount; i++){
      setTimeout(() =>{
        const newEntities = {}
        Object.keys(entities).forEach((e, index) => {
          newEntities[index] = {
            id: index,
            value: log[i+1][index]
          }
        })
        setEntities(newEntities);
        // console.log(newEntities);
        // console.log([...log[i+1]]);
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
      case 'selectionSort':
        result = selectionSort(argArr);
        break;
      case 'mergeSort':
        result = mergeSort(argArr);
        break;
      case 'insertionSort':
        result = insertionSort(argArr);
        break;
      case 'shellSort':
        result = shellSort(argArr);
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
            <option value='insertionSort'>insertionSort</option>
            <option value='selectionSort'>selectionSort</option>
            <option value='mergeSort'>mergeSort</option>
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
        <h1>cmpCount: {cmp}</h1>
      </div>
    </div>
  );
};

export default Main;
