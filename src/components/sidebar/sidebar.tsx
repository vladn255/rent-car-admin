import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import ListIcon from '@material-ui/icons/List';
import CommuteIcon from '@material-ui/icons/Commute';
import CategoryIcon from '@material-ui/icons/Category';

import { SideBarItemsNames } from '../../globals/const';
import { useStyles } from './styles';
import { setSelectedTab } from '../../store/slices/general/general';

import LogoTitle from '../logo-title/logo-title';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const LogoProps = {
    FONT_SIZE: 16,
    LINE_HEIGHT: 18,
    GAP: 7,
    ICON_HEIGHT: 24,
    ICON_WIDTH: 24
}

const SidebarItems = [
    {
        index: 0,
        name: SideBarItemsNames.CAR_CARD,
        text: "Карточка автомобиля",
        icon: <CreateIcon />,
    },
    {
        index: 1,
        name: SideBarItemsNames.CARS_LIST,
        text: "Список авто",
        icon: <CommuteIcon />,
    },
    {
        index: 2,
        name: SideBarItemsNames.ORDERS,
        text: "Заказы",
        icon: <ListIcon />,
    },
    {
        index: 3,
        name: SideBarItemsNames.CATEGORIES,
        text: "Категории",
        icon: <CategoryIcon />,
    },
]


const Sidebar: React.FC = () => {
    const dispatch = useDispatch()
    const { root, toolbar, itemRoot, selected, iconRoot } = useStyles()
    const activeTab = useSelector((state: RootState) => state.general.selectedTab)

    const clickHandler = (evt: React.SyntheticEvent, index: number) => {
        evt.preventDefault()
        const selectedTab = SidebarItems.find((item) => item.index === index)

        if (typeof selectedTab === 'object') {
            dispatch(setSelectedTab(selectedTab.name))
        }
    }

    useEffect(() => {/* does nothing, just need to re-render when activeTab changes */ }, [activeTab])

    return (
        <>
            <div className={toolbar}>
                <LogoTitle fontSize={LogoProps.FONT_SIZE} lineHeight={LogoProps.LINE_HEIGHT} gap={LogoProps.GAP} iconHeight={LogoProps.ICON_HEIGHT} iconWidth={LogoProps.ICON_WIDTH} />
            </div>
            <Divider />
            <List className={root}>
                {SidebarItems.map((item) => (
                    <React.Fragment key={item.index}>
                        <ListItem
                            component="li"
                            classes={{
                                root: itemRoot,
                                selected
                            }}
                            onClick={(evt: React.SyntheticEvent) => clickHandler(evt, item.index)}
                            button
                            selected={activeTab === item.name}
                        >
                            <ListItemIcon className={iconRoot}>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                ))}
            </List>
        </>
    );
}

export default Sidebar