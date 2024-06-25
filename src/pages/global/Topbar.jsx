import { useState } from 'react'
import { Box, IconButton, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import InputBase from '@mui/material/InputBase'
import { NotificationsOutlined } from '@mui/icons-material'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchIcon from '@mui/icons-material/Search'
import DehazeIcon from '@mui/icons-material/Dehaze';

const Topbar = () => {

  const theme = useTheme();
  const colors = tokens;

  return (
    
    <Box display="flex" gap={"5px"} justifyContent="space-between" p={2} height={"70px"}>

      <Box>
        <IconButton>
          <DehazeIcon />
        </IconButton>
      </Box>

      <Box display="flex" alignItems="center" gap={"5px"}>
        <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
          <InputBase sx={{ mr: 2, flex: 1, width: '250px' }} placeholder="Search" />
        </Box>

        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        {/* <IconButton>
        <SettingsOutlinedIcon />
      </IconButton> */}
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>

    </Box>
  );
}

export default Topbar