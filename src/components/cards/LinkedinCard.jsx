import useHoverHook from "../../utils/hooks/hoverHooks/useHoverHook"


function LinkedinCard() {
    const {cardRef,handleHover,handleNotHover} = useHoverHook();

    return (
        <div
            ref={cardRef}
            className="linkedin-card-container"
            onMouseEnter={handleHover}
            onMouseLeave={handleNotHover}>
            <div className="card-container"></div>
            <div className="first-layer"></div>
            <div className="second-layer"></div>
        </div>
    )
}

export default LinkedinCard