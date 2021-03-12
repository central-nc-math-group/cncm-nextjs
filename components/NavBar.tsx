import { FunctionComponent, useState, MouseEvent, Fragment } from "react";
import {
  Typography,
  Toolbar,
  AppBar,
  IconButton,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { useRouter } from "next/router";
import { RiTwitchLine, RiDiscordLine, RiYoutubeLine } from "react-icons/ri";
import autoredirect from "../components/autoredirects.json";

import type { Theme, AutoRedirect } from "../types";

const autoredirects: AutoRedirect[] = autoredirect as AutoRedirect[];

const styles = makeStyles((theme: Theme) => ({
  nav: {
    display: "flex",
    fontSize: "calc(2px*2vw)",
    color: theme.palette.background.default,
  },
  bar: {
    backgroundColor: "#FFFFFF!important",
  },
  btn: {
    background: "#FFFFFF!important",
    border: 0,
    borderRadius: 1,
    height: "5vh",
    padding: theme.spacing(0, 1),
  },
  discord: {
    backgroundColor: "#7289da!important",
    color: "white!important",
    "&:hover": {
      backgroundColor: "#5067b8!important",
    },
  },
  youtube: {
    backgroundColor: "#FF0000!important",
    color: "white!important",
    "&:hover": {
      backgroundColor: "#DD0000!important",
    },
  },
  twitch: {
    backgroundColor: "#6441a5!important",
    color: "white!important",
    "&:hover": {
      backgroundColor: "#421e83!important",
    },
  },
  noPadding: {
    padding: 0,
    "& div ul": {
      padding: 0,
    },
  },
  icon: {
    color: "white!important",
    minWidth: "30px",
  },
}));

const NavBar: FunctionComponent<{}> = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const router = useRouter();
  const classes = styles();

  const openAccountMenu = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const closeAccountMenu = (): void => {
    setAnchorEl(null);
  };

  const routeTo = (location: string): void => {
    closeAccountMenu();
    router.push(location);
  };

  const getIconFromName = (name: string): JSX.Element | undefined => {
    if (name === "Discord") return <RiDiscordLine size="20" />;
    if (name === "YouTube") return <RiYoutubeLine size="20" />;
    if (name === "Twitch") return <RiTwitchLine size="20" />;
    return undefined;
  };

  const LinkButton: FunctionComponent<{
    to: string;
  }> = ({ to, ...otherProps }) => (
    <Button
      className={classes.btn}
      onClick={() => router.push(to)}
      {...otherProps}
    />
  );

  const getClassFromName = (name: string): string | undefined => {
    if (name === "Discord") return classes.discord;
    if (name === "YouTube") return classes.youtube;
    if (name === "Twitch") return classes.twitch;
    return undefined;
  };

  return (
    <div className={classes.nav}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <img src="/logo.png" alt="cncm-logo" width={56} height={65} />
          </IconButton>

          <Typography variant="h5" style={{ flexGrow: 1, color: "#000000" }}>
            CNCM
          </Typography>
          <div>
            <LinkButton to="/">Home</LinkButton>

            <Button className={classes.btn} onClick={openAccountMenu}>
              Join Us
            </Button>
            <Menu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={closeAccountMenu}
              elevation={0}
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              className={classes.noPadding}
            >
              {autoredirects.map((redirect: AutoRedirect) => (
                <MenuItem
                  key={`${redirect.name}-redirect`}
                  onClick={() => routeTo(redirect.link)}
                  className={getClassFromName(redirect.name)}
                >
                  <ListItemIcon className={classes.icon}>
                    {getIconFromName(redirect.name)}
                  </ListItemIcon>
                  <ListItemText primary={redirect.name} />
                </MenuItem>
              ))}
            </Menu>

            <LinkButton to="/our-team">Our Team</LinkButton>

            <LinkButton to="/problem-of-the-day">Problem of the Day</LinkButton>

            <LinkButton to="/lectures">Lectures</LinkButton>

            <LinkButton to="/contact-us">Contact Us</LinkButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
