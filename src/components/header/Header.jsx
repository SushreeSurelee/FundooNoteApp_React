import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import RefreshIcon from '@mui/icons-material/Refresh';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import '../header/header.css'

function Header(props) {
    const menubutton = () => {
        props.listenToHeader()
    }
    return(
        <div className="HeaderBar">
            <IconButton type="button" sx={{ marginLeft:1.7}}>
                <MenuIcon onClick={menubutton}/>
            </IconButton>

            <img src='../keep_logo.png' alt='fundoo'></img>
            <h1>Fundoo</h1>
            <TextField type={'text'} 
            sx={{ width:720,marginLeft:10,marginTop:1.2,marginBottom:1.2}} 
            placeholder="Search"/>  

            <IconButton type="button" sx={{ marginLeft:-6.5}}>
                <ClearIcon />
            </IconButton>

            <IconButton type="button" sx={{ marginLeft:15}}>
                <RefreshIcon />
            </IconButton>

            <IconButton type="button" sx={{ marginLeft:0.5}}>
                <DnsOutlinedIcon/>
            </IconButton>

            <IconButton type="button" sx={{ marginLeft:0.6}}>
                <SettingsOutlinedIcon/>
            </IconButton>

            <IconButton type="button" sx={{ marginLeft:5}}>
                <AppsIcon/>
            </IconButton>

            <IconButton type="button">
            <AccountCircleIcon/>
            </IconButton> 
        </div>
    )
}

export default Header