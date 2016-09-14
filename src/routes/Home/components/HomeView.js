import React from 'react'
import { connect } from 'react-redux'
import Button from './Button'
import { changeNumber } from '../modules/t9'

export const HomeView = (props) => (
  <div style={{ width: '25%', backgroundColor: '#D3D3D3', margin: 'auto' }}>
    <h1 style={{ margin: '0', padding: '1em' }}>T9 emulator</h1>

    <input type='number' value={props.number} onChange={(e) => {
      props.changeNumber(e.target.value)
    }} style={{ width: '100%', fontSize: '2em' }} />

    <div className='dial'>
      <Button number={2} />
      <Button number={3} />
      <Button number={4} />
      <Button number={5} />
      <br />
      <Button number={6} />
      <Button number={7} />
      <Button number={8} />
      <Button number={9} />
    </div>

    <div style={{ padding: '1rem 0', display: 'inline-block' }}>
      {(props.status === 'fetching') ? '...loading' : ''}
      {(props.status === 'error') ? 'network error' : ''}
      <br />
      {props.letters.map(word => (
        <span key={word} className='label label-default'
          style={{ display: 'block', float: 'left', margin: '3px' }}>
        {word}</span>
      ))}
      <br />
    </div>
  </div>
)

HomeView.propTypes = {
  number: React.PropTypes.string.isRequired,
  letters: React.PropTypes.array.isRequired,
  status: React.PropTypes.string.isRequired,
  changeNumber: React.PropTypes.func.isRequired
}

const mapDispatchToProps = {
  changeNumber
}

const mapStateToProps = (state) => ({
  number: state.t9.number,
  letters: state.t9.letters,
  status: state.t9.status
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
