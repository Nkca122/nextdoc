import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import SettingsIcon from "@mui/icons-material/Settings";
import MailIcon from "@mui/icons-material/Mail";

// Mini / collapsible width values
const OPEN_WIDTH = 240;
const CLOSED_WIDTH = 64;

// A simple list of items to render in the drawer
const navItems = [
  { key: "home", label: "Home", icon: <HomeIcon /> },
  { key: "messages", label: "Messages", icon: <MailIcon /> },
  { key: "settings", label: "Settings", icon: <SettingsIcon /> },
  { key: "about", label: "About", icon: <InfoIcon /> },
];

// Default export: a single-file component you can drop into your app
export default function MiniDrawer() {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Permanent Drawer that visually collapses to icons */}
      <Drawer
        variant="permanent"
        PaperProps={{
          sx: {
            width: open ? OPEN_WIDTH : CLOSED_WIDTH,
            overflowX: "hidden",
            transition: (theme) =>
              theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
            whiteSpace: "nowrap",
            boxSizing: "border-box",
          },
        }}
        sx={{
          width: open ? OPEN_WIDTH : CLOSED_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: open ? OPEN_WIDTH : CLOSED_WIDTH,
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: open ? "space-between" : "center",
            px: 1,
          }}
        >
          {open && <Typography variant="h6">My App</Typography>}
          <IconButton
            onClick={() => setOpen((s) => !s)}
            size="small"
            aria-label={open ? "Collapse drawer" : "Expand drawer"}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Divider />

        <List>
          {navItems.map((item) => (
            <Tooltip
              key={item.key}
              title={open ? "" : item.label}
              placement="right"
              arrow
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 2 : 0,
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>

                  {/* Hide the text when collapsed */}
                  {open && <ListItemText primary={item.label} />}
                </ListItemButton>
              </ListItem>
            </Tooltip>
          ))}
        </List>

        <Box sx={{ flexGrow: 1 }} />

        <Divider />
        <Box sx={{ p: 1 }}>
          {open ? (
            <Typography variant="body2">v1.0 — user</Typography>
          ) : (
            <Tooltip title="Version info" placement="right" arrow>
              <IconButton size="small" aria-label="version info">
                <InfoIcon />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </Drawer>

      {/* Main content area */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>
          This is the main content area. The drawer to the left collapses to a
          small icon-only rail when closed.
        </Typography>
      </Box>
    </Box>
  );
}
