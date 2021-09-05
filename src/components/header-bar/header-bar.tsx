import { useState } from 'react'

import { AppBar, IconButton, Toolbar, InputBase, Divider, Badge, Avatar, Typography, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import userAvatar from '../../img/user-avatar.png';
import { useStyles } from './styles';

const NOTIFICATIONS_COUNT_MOCK = 2

const HeaderBar: React.FC = () => {
    const { appBar, menuButton, search, searchIcon, inputInput, notificationsRoot, badge, avatarRoot, typographyBody, toolbar, box } = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    return (
        <AppBar position="fixed" className={appBar}>
            <Toolbar classes={{ root: toolbar }}>
                <IconButton
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={menuButton}
                >
                    <MenuIcon />
                </IconButton>

                <div className={search}>
                    <div className={searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Поиск …"
                        classes={{
                            input: inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>

                <Divider orientation="vertical" flexItem />

                <IconButton className={notificationsRoot} aria-label={`show ${NOTIFICATIONS_COUNT_MOCK} new notifications`}>
                    <Badge classes={{ badge }} badgeContent={NOTIFICATIONS_COUNT_MOCK}>
                        <NotificationsIcon />
                    </Badge>
                </IconButton>

                <Divider orientation="vertical" flexItem />
                <Box className={ box }>
                    <Avatar classes={{ root: avatarRoot }} alt="user avatar" src={userAvatar} />
                    <Typography classes={{ body1: typographyBody }}>Admin</Typography>
                    <IconButton aria-label='profile actions'>
                        <ArrowDropDownIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>

    );
}

export default HeaderBar