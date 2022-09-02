import { Box, TextField } from "@mui/material"
import './App.css'
import { useEffect, useState } from "react"
import { getRows } from "./helper/getRows.helper"
import { getUser, getUpdatedUser } from "./sevices/fetch_services"
import BasicButtons from "./ui/button"
import { ModalMUI } from "./ui/modal"
import { UserUpdateForm } from './component/users/add-form'


const App = () => {
  const [showUserModal, setShowUserModal] = useState(false)
  const [userData, setUserData] = useState({})
  const [updatedUserData, setUpdatedUserData] = useState({})
  const addDetailFunc = () => {
    setShowUserModal(true)
  }

  const getUsersResponse = () => {
    getUser()
      .then((e) => {
        if (e.data.data) {
          setUserData(e.data.data)
        }
      })
  }
  const getUsersUpdatedResponse = () => {
    getUpdatedUser()
      .then((e) => {
        console.log('=============',typeof Object.keys(e.data.data.name).length)
        if (e.data.data) {
          setUpdatedUserData(e.data.data)
        }
      })
  }
  useEffect(() => {
    getUsersResponse()
   // getUsersUpdatedResponse()
  }, [])
  const UserModalStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: 400,
    bgcolor: 'background.paper',
    border: '1px solid #cccccc',
    boxShadow: 24,
    p: 1,
  }
   

  return (
    <>

      <Box className="user_detail">
        <div className="addDetail_btn">
          <BasicButtons click={addDetailFunc} btnName={"Update User Details"} />
        </div>
        {Object.keys(userData).length > 0 && (<>
          <TextField id="filled-basic" label="User ID" fullWidth={true} focused value={userData.user_id} variant="filled" />
          <TextField id="filled-basic" label="Email ID" fullWidth={true} focused value={userData.email} variant="filled" />
        </>
        )}

        {Object.keys(updatedUserData).length > 0 && Object.keys(updatedUserData.name).map(e => (
          <TextField id="filled-basic" label={e} fullWidth={true} focused value={updatedUserData.name[e]} variant="filled" />)
        )}

      </Box>
      <ModalMUI showModal={showUserModal} handleModal={setShowUserModal} styles={UserModalStyles}>
        <UserUpdateForm getUsersUpdatedResponse={getUsersUpdatedResponse} handleModal={setShowUserModal} />
      </ModalMUI>
    </>
  )
}

export default App