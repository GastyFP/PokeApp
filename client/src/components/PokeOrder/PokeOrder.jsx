import React, { useState } from 'react'
import './PokeOrder.scss'
import { useDispatch } from 'react-redux'
import { sortAlphabetical, sortByAttack } from '../../redux/actions'
import { ASCENDANT,DESCENDANT } from '../../constantes'


const PokeOrder = () => {
  const dispatch = useDispatch()
  const [order ,setOrder] = useState(ASCENDANT)


  const handleSortAlphabet = ()=>{
    if(order === ASCENDANT){
      setOrder(DESCENDANT)
    }else setOrder(ASCENDANT)
    dispatch(sortAlphabetical(order))
  }

  const handleSortAttack = ()=>{
    if(order === ASCENDANT){
      setOrder(DESCENDANT)
    }else setOrder(ASCENDANT)
    dispatch(sortByAttack(order))
  }

  return (
    <div>
      <label>Order Pokemon: </label>
      <button onClick={handleSortAlphabet}>alphabetically</button>
      <button onClick={handleSortAttack} >Attack Power</button>
    </div>
  )
}

export default PokeOrder