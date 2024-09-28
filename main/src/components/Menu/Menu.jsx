import React, { createContext } from 'react';
import useToggle from '../hooks/useToggle';
const MenuContext= createContext()
export {MenuContext}
export default function Menu({ children, onOpen }) {

	const [open, toggleOpen] = useToggle(true,onOpen);
	
	return(
		<MenuContext.Provider value={{open,toggleOpen}}>
		<div className='menu'>{children}</div>
		</MenuContext.Provider>

	) 
}
