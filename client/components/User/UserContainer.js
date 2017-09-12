import React from 'react'
import { connect } from 'react-redux'
import NewSearchEntry from '../Search/NewSearchEntry'
import SidebarContainer from '../Navigation/SidebarContainer'
import UserStyle from './UserStyle'
import GifList from '../Gif/GifList'

/* -----------------    COMPONENT     ------------------ */

const UserContainer = (props) => {
  const { currentUser } = props

  return (
    <div>
      <NewSearchEntry userId={currentUser.id} />
      <SidebarContainer />
      <UserStyle>
        <GifList />
      </UserStyle>
    </div>
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ currentUser }) => ({ currentUser })
const mapDispatch = null

export default connect(mapState, mapDispatch)(UserContainer)
