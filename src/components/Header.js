import React from 'react'
import PropTypes from 'prop-types'

function Header(props) {
  const { headingTitle } = props

  return (
    <header>
      <div className="container mb-4 mt-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="display-4 mb-4 pageHeader">{headingTitle}</h1>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  headingTitle: PropTypes.string,
}

Header.defaultProps = {
  headingTitle: ``,
}

export default Header 