

import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


export const navLinks = [
  {
    id: 1,
    name: "Dashboard",
    icon: GridViewOutlinedIcon,
    link: "/",
  },
  {
    id: 2,
    name: "Manage Cats",
    icon: PetsOutlinedIcon,
    link: "/manage-cats",
  },
  {
    id: 3,
    name: "Adoption Requests",
    icon: HistoryEduOutlinedIcon,
    link: "/adoption-requests",
  },
  {
    id: 4,
    name: "Reports",
    icon: ArticleOutlinedIcon,
    link: "/reports",
  },
  {
    id: 5,
    name: "Settings",
    icon: SettingsOutlinedIcon,
    link: "/settings",
  },
];
