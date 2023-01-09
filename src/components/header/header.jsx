import HeaderTitle from "./_headerTitel"
import CardContainer from "./_cardContainer"

export const header = () => {
  return (
    <header>
        <div className="top_svg_pattern">
          <img className="desktop" src="/src/images/bg-pattern-top-desktop.svg" alt="styling-element" />
          <img className="mobile" src="/src/images/bg-pattern-top-mobile.svg" alt="styling-element" />
        </div>
        <HeaderTitle />
        <CardContainer />
        <div className="bottom_svg_pattern">
          <img className="desktop" src="/src/images/bg-pattern-bottom-desktop.svg" alt="styling-element" />
          <img className="mobile" src="/src/images/bg-pattern-bottom-mobile.svg" alt="styling-element" />
        </div>
    </header>
  )
}

export default header