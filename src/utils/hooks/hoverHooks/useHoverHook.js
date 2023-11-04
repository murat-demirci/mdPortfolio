import { useRef } from "react"

function useHoverHook() {
    const cardRef = useRef();
    const handleHover = (event) => {
        //code
        const targetClassName = event.target.parentElement.className;
        const appContainer = document.getElementsByClassName('app-container');
        Array.from(appContainer[0].childNodes).forEach(child => {
            if (!child.classList.contains(targetClassName)) {
                child.style.opacity = 0.2;
            }
        })
    }

    const handleNotHover = (event) => {
        //code
        const targetClassName = event.target.parentElement.className;
        const appContainer = document.getElementsByClassName('app-container');
        Array.from(appContainer[0].childNodes).forEach(child => {
            if (!child.classList.contains(targetClassName)) {
                child.style.opacity = 1;
            }
        })
    }

    return { cardRef, handleHover, handleNotHover }
}

export default useHoverHook