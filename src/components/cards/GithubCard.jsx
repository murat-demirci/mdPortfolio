import "../../assets/css/card.css"
import useHoverHook from "../../utils/hooks/hoverHooks/useHoverHook"

function GithubCard() {
  const { cardRef, handleHover, handleNotHover } = useHoverHook();
  return (
    <div
      ref={cardRef}
      className="github-card-container"
      onMouseEnter={handleHover}
      onMouseLeave={handleNotHover}>
      <div className="card-container">
        <div>
          <h2>murat-demirci</h2>
        </div>
      </div>
      <div className="first-layer"></div>
      <div className="second-layer"></div>
    </div>
  )
}

export default GithubCard
