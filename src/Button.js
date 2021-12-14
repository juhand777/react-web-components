import React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'

const TzButton = ({ className }) => <Button variant="contained" className={className}>Hello</Button>

TzButton.propTypes = {
  className: PropTypes.string,
}

export { TzButton as Button }
