import React from 'react'
import { connect } from 'react-redux'
import { addNumber } from '../modules/t9'
import numberToLettersMap from '../../../../both/numberToLettersMap'

export const Button = (props) => (
  <button className='btn btn-default' onClick={() => props.addNumber(props.number)} >
    {props.number}<br />
    {numberToLettersMap[props.number]}
  </button>
)

Button.propTypes = {
  number : React.PropTypes.number.isRequired,
  addNumber : React.PropTypes.func.isRequired
}

const mapDispatchToProps = {
  addNumber
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
