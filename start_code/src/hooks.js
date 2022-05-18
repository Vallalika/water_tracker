import { useState } from 'react';

export const useToggle = (initialState) => {
    const [toggle, setToggle] = useState(initialState);
    const switchToggle = () => {
        setToggle(!toggle);
    }
    
    return [ toggle, switchToggle ]
    //Objecet is a dictionary(usually) which is a key value pair, eg name = dog
    
}