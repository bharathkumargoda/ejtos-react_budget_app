import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHNG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-success'> 
            <label for="Currency">Currency</label>
      <select name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
        <option value="£">£ Pound</option>
        <option value="₹">₹ Rupee</option>
        <option value="€">€ Euro</option>
        <option value="$">$ Dollar</option>
      </select>	
    </div>
    );
};

export default Currency;