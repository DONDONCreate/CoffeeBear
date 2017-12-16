import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

// Header
const HeaderIcon = () => (
    <IconMenu
        iconButtonElement={<IconButton><MenuIcon color={'white'} /></IconButton>}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
        <MenuItem>
            hello
        </MenuItem>
        <MenuItem>
            hello
        </MenuItem>
        <MenuItem>
            hello
        </MenuItem>
    </IconMenu>
);


/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const CoffeeBearBar = () => (
    <MuiThemeProvider>
        <AppBar
            title="CoffeeBear"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            iconElementLeft={<HeaderIcon />}
        />
    </MuiThemeProvider>
);

export default CoffeeBearBar;

