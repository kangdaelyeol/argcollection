import React, { useRef } from "react";

const Entity = ({val, keyDown, style, id}) => {
  const cur = useRef()
  const onkeyDown = (e) => {
    keyDown(e, Number(id));
  }
  return (<input value={val} ref={cur} className={style} onChange={onkeyDown} type="text"></input>)
}

export default Entity;