import { useState } from 'react';
import styled from 'styled-components';

import MenuIcon from '@mui/icons-material/Menu';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from '@mui/material';

function MenuBtn () {
    const menuOptions = [
        "Home", "Catalog", "Contact"
    ]

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
      setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
      };

    return (
        <MenuBtnWrapper>
            <IconButton 
                onClick={handleClick}
                id="icon-button"
            >
                <MenuIcon 
                    sx={{fontSize: "2rem"}}
                />
            </IconButton>
            <Menu
                id="menu-wrapper"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
            >
                {menuOptions.map((option) => (
                    <MenuItem 
                        key={option}
                        onClick={handleClose}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </MenuBtnWrapper>
    );
}

const MenuBtnWrapper = styled.div`
    display: inline;
`;

export default MenuBtn