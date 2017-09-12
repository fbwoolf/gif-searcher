import React from 'react'
import { connect } from 'react-redux'
import NewSearchEntry from '../Search/NewSearchEntry'
import UserStyle from './UserStyle'
import GifList from '../Gif/GifList'

/* -----------------    COMPONENT     ------------------ */

const UserContainer = (props) => {
  const { currentUser } = props

  return (
    <div>
      <NewSearchEntry userId={currentUser.id} />
      <GifList />
    </div>
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ currentUser }) => ({ currentUser })
const mapDispatch = null

export default connect(mapState, mapDispatch)(UserContainer)
