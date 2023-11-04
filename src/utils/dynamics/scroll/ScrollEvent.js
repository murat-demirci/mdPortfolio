const navbar = document.getElementsByClassName('container');

function ScrollEvent() {
    document.onwheel = (event) => {
        console.log(event);
        event.deltaY > 0
            ? ScrollDownEvent()
            : ScrollUpEvent();
    }
}

export default ScrollEvent

const ScrollDownEvent = () => {
    //code
    if (!navbar[0].classList.contains('hidden')) {
        navbar[0].classList.add('hidden')
    }

    return
}

const ScrollUpEvent = () => {
    //code
    if (navbar[0].classList.contains('hidden')) {
        navbar[0].classList.remove('hidden')
    }

    return
}