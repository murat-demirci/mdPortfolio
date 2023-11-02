import { useState, useRef } from "react";

function useMenuHook() {
    const [isOpen, setIsOpen] = useState(false);
    const menuIconRef = useRef();
    const menuCloseIconRef = useRef();
    const menuRef = useRef();

    const handleMenuClick = () => {
        //code
        !isOpen
            ? openMenu()
            : closeMenu();
    }

    const openMenu = () => {
        //code
        menuIconRef.current.classList.add('hide');
        menuCloseIconRef.current.classList.add('show');
        document.body.style.overflow = 'hidden';
        setIsOpen(true);
    }

    const closeMenu = () => {
        //code
        menuCloseIconRef.current.classList.remove('show');
        menuIconRef.current.classList.remove('hide');
        document.body.style.overflow = 'auto';
        setIsOpen(false);
    }
    return { menuRef, menuIconRef, menuCloseIconRef, isOpen, handleMenuClick }
}

export default useMenuHook