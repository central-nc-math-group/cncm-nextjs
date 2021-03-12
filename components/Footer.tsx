import { FunctionComponent } from "react";
import {
  makeStyles,
  Typography,
  Grid,
  Container,
  Divider,
} from "@material-ui/core";
import autoredirect from "../components/autoredirects.json";
import Link from "./Link";

import type { Theme, AutoRedirect } from "../types";

const autoredirects: AutoRedirect[] = autoredirect as AutoRedirect[];

const styles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(6),
  },
  footer: {
    padding: theme.spacing(3, 0),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(8, 0),
    },
  },
  logo: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    "& img": {
      width: 22.5,
      height: 25,
      marginRight: theme.spacing(1.5),
    },
    fontSize: "2rem",
  },
  list: {
    marginBottom: theme.spacing(4),
    "& h3": {
      fontWeight: theme.typography.fontWeightMedium,
    },
    "& ul": {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
    "& li": {
      padding: "6px 0",
      color: theme.palette.text.secondary,
    },
  },
  version: {
    marginTop: theme.spacing(3),
    alignItems: "center",
  },
}));

const Footer: FunctionComponent<{}> = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Divider />
      <Container maxWidth="md">
        <footer className={classes.footer}>
          <Grid container>
            <Grid item xs={12} sm={3}>
              <div className={classes.logo}>
                <img src="/logo.png" alt="cncm-logo" />
                <Link variant="h4" color="inherit" href="/home">
                  CNCM
                </Link>
              </div>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.list}>
              <Typography component="h2" gutterBottom>
                Join Us
              </Typography>
              <ul>
                {autoredirects.map((redirect: AutoRedirect) => (
                  <li key={`redirect-${redirect.name}`}>
                    <Link variant="body2" color="inherit" href={redirect.link}>
                      {redirect.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.list}>
              <Typography component="h2" gutterBottom>
                Resources
              </Typography>
              <ul>
                <li>
                  <Link variant="body2" color="inherit" href="/lectures">
                    Lectures
                  </Link>
                </li>
                <li>
                  <Link
                    variant="body2"
                    color="inherit"
                    href="/problem-of-the-day"
                  >
                    Problem of the Day
                  </Link>
                </li>
                <li>
                  <Link variant="body2" color="inherit" href="/cncm-online">
                    CNCM Online
                  </Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.list}>
              <Typography component="h2" gutterBottom>
                The Team
              </Typography>
              <ul>
                <li>
                  <Link variant="body2" color="inherit" href="/about-us">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link variant="body2" color="inherit" href="/our-team">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link variant="body2" color="inherit" href="/contact-us">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </Grid>
          </Grid>
          <Typography
            className={classes.version}
            color="textSecondary"
            variant="body2"
          >
            Copyright © {new Date().getFullYear()} Cyclic National Competitive
            Math Group. All rights reserved. Cyclic National Competitive Math
            Group is a non-profit, tax exempt public charity as described in
            section 501(c)(3) of the U.S. Internal Revenue Code.
          </Typography>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
