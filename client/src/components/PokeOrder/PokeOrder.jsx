import React, { useState } from 'react'
import './PokeOrder.scss'
import { useDispatch } from 'react-redux'
import { sortAlphabetical, sortByAttack,pagReset } from '../../redux/actions'
import { ASCENDANT,DESCENDANT } from '../../constantes'


const PokeOrder = () => {
  const dispatch = useDispatch()
  const [order ,setOrder] = useState(ASCENDANT)


  const handleSortAlphabet = ()=>{
    dispatch(pagReset());
    if(order === ASCENDANT){
      setOrder(DESCENDANT)
    }else setOrder(ASCENDANT)
    dispatch(sortAlphabetical(order))
  }

  const handleSortAttack = ()=>{
    dispatch(pagReset());
    if(order === ASCENDANT){
      setOrder(DESCENDANT)
    }else setOrder(ASCENDANT)
    dispatch(sortByAttack(order))
  }

  return (
    <div className='order-items'>
      <label>Order Pokemon: </label>
      <button onClick={handleSortAlphabet}>A-Z</button>
      <button onClick={handleSortAttack} >Attack Power</button>
    </div>
  )
}

export default PokeOrder