import Paper from "@mui/material/Paper"
import Stack from '@mui/material/Stack';
import Item from '@mui/material/ListItem'

// eslint-disable-next-line react/prop-types
function Dropdown({ status }) {

    return (
        <div className="dropdown-menu" style={{ display: status ? 'inline-block' : 'none' }}>
            <Stack
                className="dropdown"
                flexDirection="column"
                spacing={4}
                width={'100%'}
                height={'100%'}
                justifyContent="center"
                alignItems="center">
                <Paper sx={{ width: '250px' }}>
                    <Item sx={{ width: '100%', justifyContent: 'center' }}>
                        link1
                    </Item>
                </Paper>
                <Paper sx={{ width: '250px' }}>
                    <Item sx={{ width: '100%', justifyContent: 'center' }}>
                        link2
                    </Item>
                </Paper>
                <Paper sx={{ width: '250px' }}>
                    <Item sx={{ width: '100%', justifyContent: 'center' }}>
                        link3
                    </Item>
                </Paper>
            </Stack>
        </div>
    )
}

export default Dropdown