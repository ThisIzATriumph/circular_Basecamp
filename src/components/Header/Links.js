import React from 'react'
import { Link } from 'gatsby'

export default () => {
  return (
    <span>
      <Link to="/garden" aria-label="View notes and essays page">
        Digital Garden
      </Link>
      <Link to="/atelier" aria-label="View atelier page">
        Atelier
      </Link>
      <Link to="/essays" aria-label="View viewpoints page">
        Viewpoints
      </Link>
      <Link to="/illustration" aria-label="View sketchnoting page">
        Sketchnoting
      </Link>
      <Link to="/library" aria-label="View books page">
        Library
      </Link>
      <Link to="/about" aria-label="View about page">
        About
      </Link>
      {/* <Link
        to="./start"
        css={css`
          font-weight: bold;
          color: ${theme.colors.orange} !important;
        `}
        aria-label="View start here page"
      >
        Start Here
      </Link> */}
    </span>
  )
}
