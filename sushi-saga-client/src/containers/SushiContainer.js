import React, { Fragment } from "react"
import MoreButton from "../components/MoreButton"
import Sushi from "../components/Sushi"

const SushiContainer = props => {
  const fourRolls = props.allSushi
    .slice(props.index, props.index + 4)
    .map(sushi => (
      <Sushi
        key={sushi.id}
        sushiInfo={sushi}
        handleClick={props.sushiClicked}
        wallet={props.wallet}
      />
    ))

  return (
    <Fragment>
      <div className="belt">
        {fourRolls}
        <MoreButton handleClick={props.moreClicked} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
