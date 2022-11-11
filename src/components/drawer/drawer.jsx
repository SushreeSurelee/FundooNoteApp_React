import * as React from 'react';
import { styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {connect} from 'react-redux'


const drawerWidth = 240;

const openedMixin = (theme) => ({
    marginTop:60,
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    marginTop:60,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

 function MiniDrawer(props) {
  const selectOption = (options) => {
    props.listenToDrawer(options)
    props.dispatch({
      type:`${options}`
    })
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={props.drawerTogel}>
        <List>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => selectOption('Notes') }>
              <ListItemButton>
                <ListItemIcon>
                <LightbulbOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary='Notes' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => selectOption('Reminders') }>
              <ListItemButton>
                <ListItemIcon>
                <NotificationsNoneOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary='Reminders' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => selectOption('Edit') }>
              <ListItemButton>
                <ListItemIcon>
                <EditOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary='Edit Labels' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => selectOption('Archive') }>
              <ListItemButton>
                <ListItemIcon>
                <ArchiveOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary='Archive' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => selectOption('Trash') }>
              <ListItemButton>
                <ListItemIcon>
                <DeleteOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary='Trash' />
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
export default connect()(MiniDrawer)