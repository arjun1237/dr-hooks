import React, { useState } from 'react'

const useInputState = (init) => {
    const [state, setState] = useState(init)
  
    const update = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value 
        })
    }
  
    return {...state, update}
}

export { useInputState }