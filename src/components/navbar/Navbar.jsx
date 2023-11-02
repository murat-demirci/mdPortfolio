import Stack from '@mui/material/Stack';
import Item from '@mui/material/ListItem'
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "../../assets/css/navbar.css";
import useMenuHook from '../../utils/hooks/menuhooks/useMenu';
import Dropdown from '../dropdown/Dropdown';

function Navbar() {
    const menuUtil = useMenuHook();
    return (
        <nav className="navbar">
            <div className='standart-menu'>
                <Stack
                    flexDirection="row"
                    gap={8}
                    width={'100%'}
                    height={80}
                    justifyContent="center"
                    alignItems="center">
                    <Paper sx={{ width: '150px' }}>
                        <Item sx={{ width: '100%', justifyContent: 'center' }}>
                            link1
                        </Item>
                    </Paper>
                    <Paper sx={{ width: '150px' }}>
                        <Item sx={{ width: '100%', justifyContent: 'center' }}>
                            link2
                        </Item>
                    </Paper>
                    <Paper sx={{ width: '150px' }}>
                        <Item sx={{ width: '100%', justifyContent: 'center' }}>
                            link3
                        </Item>
                    </Paper>
                </Stack>
            </div>
            <div className='responsive-menu'>
                <Paper ref={menuUtil.menuRef} className='icon' sx={{ width: '150px' }} onClick={menuUtil.handleMenuClick}>
                    <MenuIcon ref={menuUtil.menuIconRef} className='menu-icon'></MenuIcon>
                    <CloseIcon ref={menuUtil.menuCloseIconRef} className='menu-close-icon'></CloseIcon>
                </Paper>
                <Dropdown status={menuUtil.isOpen}/>
            </div>
        </nav>
    )
}

export default Navbar