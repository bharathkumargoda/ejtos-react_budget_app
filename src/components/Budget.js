import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {dispatch, budget,currency } = useContext(AppContext);

    const changeBudget = (val)=>{
            dispatch({
                type: 'SET_BUDGET',
                payload: val,
            })
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={budget} onChange={event=>changeBudget(event.target.value)}></input>
</div>
    );
};
export default Budget;
