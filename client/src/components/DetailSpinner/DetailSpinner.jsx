import React from 'react'
import spinner from '../../assets/detailLoading.gif'

const DetailSpinner = () => {
  return (
        <div style={{ display:'flex',alignContent: 'center', justifyContent:'center', marginTop:'200px'}}>
            <img src={spinner} alt="LOADING SPINNER" />
        </div>
    
  )
}
export default DetailSpinner