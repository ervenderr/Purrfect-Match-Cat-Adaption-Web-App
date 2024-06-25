import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { Box, Typography, useTheme } from '@mui/material';
import Logo from '../../assets/logo-icon.png';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import { tokens } from '../../theme';
import { navLinks } from '../../components/utils/NavLinks';

const SidebarMenu = ({activeLink, setActiveLink}) => {
  const theme = useTheme();
  const colors = tokens;

  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Sidebar backgroundColor={colors.primary}>
      <Box display="flex" gap={"10px"} justifyContent="center" alignItems="center" p={2} height={"70px"}>
        <img src={Logo} alt="logo" width={"28px"} />
        <Typography variant="h3" fontWeight="semibold" color={colors.primary[100]}>
          Purrfect Match
        </Typography>
      </Box>
      <Menu
        menuItemStyles={{
          button: ({ level, active, disabled, hover }) => {
            if (level === 0) {
              return {
                color: disabled ? colors.grey[500] : colors.primary[100],
                backgroundColor: active ? colors.primary[400] : (hover ? colors.primary[700] : 'inherit'),
                '&:hover': {
                  backgroundColor: colors.primary[400],
                  color: colors.primary[100],
                },
              };
            }
            return {};
          },
        }}
      >
        {navLinks.map((link, index) => (
          <Box
            key={index}
            component={Link}
            to={link.link}
            display="flex"
            alignItems="center"
            gap={2}
            px={4}
            py={2}
            borderRadius="4px"
            onClick={() => setActiveLink(index)}
            sx={{
              color: activeLink === index ? colors.primary[100] : colors.primary[300],
              backgroundColor: activeLink === index ? colors.primary[400] : 'inherit',
              '&:hover': {
                backgroundColor: colors.primary[400],
                color: colors.primary[100],
              },
              cursor: 'pointer',
              transition: 'all 0.1s ease',
              textDecoration: 'none',
            }}
          >
            <link.icon />
            <Typography variant="h5" fontWeight="semibold">
              {link.name}
            </Typography>
          </Box>
        ))}
      </Menu>
    </Sidebar>
  );
}

export default SidebarMenu;
