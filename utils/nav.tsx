import React from "react";

import {
  Typography,
  Toolbar,
  AppBar,
  IconButton,
  withStyles,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import { RiTwitchLine, RiDiscordLine, RiYoutubeLine } from "react-icons/ri";

import NewHomeLogo from "../../Constants/images/new-icon.svg";

import { Link as RouterLink } from "react-router-dom";

import * as ROUTES from "../../Constants/routes.js";
import REDIRECTS from "../../Constants/autoredirects.json";
import { theme } from ".";

const styles = {
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
      color: "#000000",
      height: "5vh",
      padding: "0 30px*vmin",
      marginLeft: "1vw",
      marginRight: "1vw",
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
};


class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      joinMenuAnchorEl: null,
    };

    this.openAccountMenu = this.openAccountMenu.bind(this);
    this.closeAccountMenu = this.closeAccountMenu.bind(this);
    this.routeTo = this.routeTo.bind(this);
  }

  openAccountMenu(event) {
    this.setState({ joinMenuAnchorEl: event.currentTarget });
  }

  closeAccountMenu() {
    console.log("Close");
    this.setState({ joinMenuAnchorEl: null });
  }

  routeTo(location) {
    this.closeAccountMenu();
    this.props.history.push(location);
  }

  getIconFromName(name) {
    switch (name) {
      case "Discord":
        return <RiDiscordLine size="20" />;
      case "YouTube":
        return <RiYoutubeLine size="20" />;
      case "Twitch":
        return <RiTwitchLine size="20" />;
      default:
    }
  }

  render() {
    const { classes } = this.props;
    const { joinMenuAnchorEl } = this.state;

    return (
      <div className={classes.nav}>
        <AppBar position="static" className={classes.bar} height={5 / 2}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <img src={NewHomeLogo} width={65} height={65} />
            </IconButton>

            <Typography
              variant="h5"
              style={{ flexGrow: "1", color: "#000000" }}
            >
              CNCM
            </Typography>

            <div>
              <Button
                className={classes.btn}
                component={RouterLink}
                to={ROUTES.HOME}
              >
                Home
              </Button>


              <Button className={classes.btn} onClick={this.openAccountMenu}>
                Join Us
              </Button>
              <Menu
                id="customized-menu"
                anchorEl={joinMenuAnchorEl}
                keepMounted
                open={Boolean(joinMenuAnchorEl)}
                onClose={this.closeAccountMenu}
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
                {Object.keys(REDIRECTS).map((link) => (
                  <MenuItem
                    key={`${REDIRECTS[link].name}-redirect`}
                    onClick={() =>
                      (window.location.href = REDIRECTS[link].link)
                    }
                    className={classes[REDIRECTS[link].name.toLowerCase()]}
                  >
                    <ListItemIcon className={classes.icon}>
                      {this.getIconFromName(REDIRECTS[link].name)}
                    </ListItemIcon>
                    <ListItemText primary={REDIRECTS[link].name} />
                  </MenuItem>
                ))}
              </Menu>

              <Button
                className={classes.btn}
                component={RouterLink}
                to={ROUTES.OUR_TEAM}
              >
                Our Team
              </Button>

              <Button
                className={classes.btn}
                component={RouterLink}
                to={ROUTES.PROBLEM_OF_THE_DAY}
              >
                Problem of the Day
              </Button>

              <Button
                className={classes.btn}
                component={RouterLink}
                to={ROUTES.LECTURES}
              >
                Lectures
              </Button>


              <Button
                className={classes.btn}
                component={RouterLink}
                to={ROUTES.CONTACT_US}
              >
                Contact Us
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
