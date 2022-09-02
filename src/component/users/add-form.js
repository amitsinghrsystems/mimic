import { Box, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useState } from 'react';
import { updateUser } from '../../sevices/fetch_services'
import { ShowMessage } from '../../component/message/index'
import { SUCCESS, ERROR } from '../../constants/type'

export const UserUpdateForm = ({
    getUsersUpdatedResponse,
    handleModal
}) => {
    const [data, setData] = useState({
        familyName: null,
        givenName: null,
        middleName: null,
        honorificPrefix: '',
        honorificSuffix: '',
        showMsg: false,
        msgType: null
    })
    const updateFeilds = () => {
        let options = {
            name: {
                formatted: `${data.honorificPrefix} ${data.givenName} ${data.middleName} ${data.familyName} ${data.honorificSuffix} `,
                familyName: data.familyName,
                givenName: data.givenName,
                middleName: data.middleName,
                honorificPrefix: data.honorificPrefix,
                honorificSuffix: data.honorificSuffix
            }
        }
        updateUser(options)
            .then((e) => {
                setData({
                    ...data,
                    showMsg: true,
                    msgType: SUCCESS
                })
                getUsersUpdatedResponse()
                setTimeout((e)=>{
                    handleModal(false)
                },1000)
            })
            .catch((e) => {
                setData({
                    ...data,
                    showMsg: true,
                    msgType: ERROR
                })
            })
    }
    const saveFeilds = (e) => {
        console.log(e)
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    console.log(data)
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            {data.showMsg ? <ShowMessage type={data.msgType} /> : null}
            <ul className='update_form'>
                <li>
                    <FormControl fullWidth={true}>
                        <InputLabel id="honorificPrefix">Prefix</InputLabel>
                        <Select
                            label="Prefix"
                            id="honorificPrefix"
                            name='honorificPrefix'
                            fullWidth={true}
                            value={data.honorificPrefix}
                            onChange={(e) => saveFeilds(e)}
                        >
                            <MenuItem value={''}>Prefix</MenuItem>
                            <MenuItem value={'Mr.'}>Mr.</MenuItem>
                            <MenuItem value={'Miss.'}>Miss.</MenuItem>
                        </Select>
                    </FormControl>
                </li>
                <li> <TextField
                    required
                    id="givenName"
                    name='givenName'
                    label="Name"
                    fullWidth={true}
                    defaultValue={data.givenName}
                    onChange={(e) => saveFeilds(e)}
                /></li>
                <li> <TextField
                    required
                    id="middleName"
                    name='middleName'
                    label="Middle Name"
                    fullWidth={true}
                    defaultValue={data.middleName}
                    onChange={(e) => saveFeilds(e)}
                /></li>
                <li>
                    <FormControl fullWidth={true}>
                        <InputLabel id="honorificSuffix">Suffix</InputLabel>
                        <Select
                            label="Suffix"
                            id="honorificSuffix"
                            name='honorificSuffix'
                            value={data.honorificSuffix}
                            fullWidth={true}
                            onChange={(e) => saveFeilds(e)}
                        >
                            <MenuItem value={''}>Suffix</MenuItem>
                            <MenuItem value={'Jr.'}>Jr.</MenuItem>
                            <MenuItem value={'Sr.'}>Sr.</MenuItem>
                        </Select>
                    </FormControl>
                </li>
                <li> <TextField
                    required
                    id="familyName"
                    name='familyName'
                    label="Family Name"
                    fullWidth={true}
                    defaultValue={data.familyName}
                    onChange={(e) => saveFeilds(e)}
                /></li>
                <li><Button fullWidth={true} onClick={() => updateFeilds()} size={'large'} variant="contained">Update</Button></li>
            </ul>
        </Box>
    )
}