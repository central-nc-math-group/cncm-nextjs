import { FunctionComponent, SyntheticEvent, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import SwipeableViews from "react-swipeable-views";
import { useRouter } from "next/router";
import Head from "next/head";
import { RiDiscordFill, RiYoutubeFill } from "react-icons/ri";
import autoredirect from "../components/autoredirects.json";
import dynamic from "next/dynamic";

import type { Theme, AutoRedirect } from "../types";

const FancyHeader = dynamic(import("../components/FancyHeader"));

const autoredirects: AutoRedirect[] = autoredirect as AutoRedirect[];

const tabHeight = "36px";

const styles = makeStyles((theme: Theme) => ({
  app: {
    textAlign: "center",
    backgroundColor: "#FFFFFF",
  },
  appHeader: {
    background: "linear-gradient(to right, #007CCC, #000000)",
    minHeight: "10vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
    color: theme.palette.background.default,
  },
  body: {
    fontSize: "1.5rem",
    color: theme.palette.text.primary,
    textAlign: "left",
    marginLeft: "10vw",
    marginRight: "10vw",
    marginTop: "2.5vh",
  },
  cardTitle: {
    fontSize: "1.5rem",
  },
  joinUsCard: {
    textAlign: "center",
    color: "white",
    cursor: "pointer",
  },
  joinUsBorder: {
    maxWidth: "300px!important",
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
  tabsRoot: {
    minHeight: tabHeight,
    height: tabHeight,
  },
  tabRoot: {
    minHeight: tabHeight,
    height: tabHeight,
  },
}));

const Home: FunctionComponent<{}> = () => {
  const classes = styles();
  const router = useRouter();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    newValue: any
  ): void => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number): void => {
    setValue(index);
  };

  function a11yProps(index: number) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  const TabPanel: FunctionComponent<{
    value: any;
    index: any;
    [key: string]: any;
  }> = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };

  return (
    <div className={classes.app}>
      <Head>
        <title>Cyclic National Competitive Math Group</title>
        <meta
          name="description"
          content="This is the Meta Tag that Eli, Srijan, and Sushrit need to give me!"
        />
      </Head>
      <FancyHeader heading="Welcome to CNCM!">
        Cyclic National Competitive Math Group
      </FancyHeader>
      <div className={classes.body}>
        <Paper elevation={10} style={{ padding: "2em" }}>
          <p style={{ marginTop: 0 }}>
            At CNCM, our mission is to enrich both the academic and competitive
            math knowledge of students around the globe.
          </p>
          <Paper style={{ padding: "1rem" }} elevation={4}>
            <div className={classes.root}>
              <AppBar position="static" color="default">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                  aria-label="cncm info"
                  classes={{
                    root: classes.tabsRoot,
                  }}
                >
                  <Tab
                    label="Community"
                    {...a11yProps(0)}
                    classes={{
                      root: classes.tabRoot,
                    }}
                  />
                  <Tab
                    label="Content"
                    {...a11yProps(1)}
                    classes={{
                      root: classes.tabRoot,
                    }}
                  />
                  <Tab
                    label="Preparation"
                    {...a11yProps(2)}
                    classes={{
                      root: classes.tabRoot,
                    }}
                  />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                  At CNCM, we pride ourselves in the large and active community
                  that we have built through Discord filled with people who are
                  passionate about competitive math and math in general!
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  CNCM runs several online and in-person contests. Our online
                  contests are geared towards preparing students for esteemed
                  competitions such as the AMC and AIME. You can find more
                  information about them{" "}
                  <Link href="https://cncmath.org/cncm-online">here</Link>. We
                  also run in-person competitions in central NC, such as Math
                  Bowl and CRMT. You can find more information about those on
                  the Contests page (coming soon).
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                  CNCM offers several resources to help students prepare for
                  competitions. We have lectures that are located on our YouTube
                  Channel with handouts that target specific concepts that
                  students should know. We also have a Problem of the Day posted
                  on our Discord that allows students to apply their skills to a
                  real competition problem.
                </TabPanel>
              </SwipeableViews>
            </div>
          </Paper>
          <p>
            If you would like to check out our Discord or YouTube, then click
            the tiles below!
          </p>
          <Grid container spacing={3} style={{ justifyContent: "center" }}>
            <Grid item xs className={classes.joinUsBorder}>
              <Card
                style={{ backgroundColor: "#7289da" }}
                className={classes.joinUsCard}
                onClick={() => router.push(autoredirects[0].link)}
              >
                <CardMedia>
                  <RiDiscordFill size="50%" color="#FFFFFF" />
                </CardMedia>
              </Card>
            </Grid>
            <Grid item xs className={classes.joinUsBorder}>
              <Card
                style={{ backgroundColor: "#FF0000" }}
                className={classes.joinUsCard}
                onClick={() => router.push(autoredirects[0].link)}
              >
                <CardMedia>
                  <RiYoutubeFill size="50%" color="#FFFFFF" />
                </CardMedia>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default Home;
