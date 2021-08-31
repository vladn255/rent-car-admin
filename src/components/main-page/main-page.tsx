import { useState } from 'react'

import { Drawer, Hidden } from '@material-ui/core';

import { useStyles } from './styles';

import Sidebar from '../sidebar/sidebar';
import HeaderBar from '../header-bar/header-bar';
import MainContent from '../main-content/main-content';
import Footer from '../footer/footer';


const MainPage: React.FC = () => {
    const { root, drawer, drawerPaper } = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    return (
        <>
            <div className={root}>
                <HeaderBar />

                <nav className={drawer} aria-label="mailbox folders">
                    <Hidden mdUp>
                        <Drawer
                            variant="temporary"
                            anchor={'left'}
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true,
                            }}
                        >
                            <Sidebar />
                        </Drawer>
                    </Hidden>
                    <Hidden smDown>

                        <Drawer
                            classes={{
                                paper: drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            <Sidebar />
                        </Drawer>
                    </Hidden>
                </nav>

                <MainContent />
            </div>
            <Footer />
        </>
    );
}

export default MainPage