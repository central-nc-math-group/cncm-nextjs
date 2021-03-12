import React, { FunctionComponent, SyntheticEvent, useState } from "react";
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
import { Component } from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import { Theme } from "@material-ui/core";
import { createStyles, withStyles } from "@material-ui/core/styles";

const FancyHeader = dynamic(import("../components/FancyHeader"));
const GLink = dynamic(import("../components/Link"));

const styles = (theme: Theme) => createStyles({
    body: {
        fontSize: '1.5rem',
        color: theme.palette.text.primary,
        textAlign: 'left',
        marginLeft: '10vw',
        marginRight: '10vw',
        marginTop: '2.5vh',
    },
});

class Lectures extends Component<{classes: any}, { err: string, lectures: []}> {
    
constructor(props: any) {
    super(props);
    this.state = {
        err: "",
        lectures: [],
    }
  }

  async componentDidMount() {
    const res = await fetch("https://potdlord.herokuapp.com/lecture/list", {
      method: "POST",
    });
    if (res.status > 300) {
      this.setState({ err: await res.text() });
      return;
    }
    this.setState({ lectures: JSON.parse(await res.text()) });
  }


  render() {

    if (this.state.err) {
      return (
        <div className={this.props.classes.body}>
          <Typography
            variant="h4"
            style={{ color: "red", textAlign: "center" }}
          >
            There was an error: {this.state.err}. Please try again later!
          </Typography>
        </div>
      );
    }

    return (
      <div>
        <FancyHeader
          heading="Lectures"
          children="Here you will find CNCM's biweekly lectures and their accompanying handouts."
        />
        <div className={this.props.classes.body}>
          <Paper
            style={{
              height: "fit-content",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              padding: "30px",
            }}
          >
            <Typography variant="h4">CNCM Lectures</Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Lecture</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.lectures.map((lecture) => (
                    <TableRow key={`${lecture}-lecture`}>
                      <TableCell component="th" scope="row">
                        <GLink
                          href={`/lectures/${lecture}`}
                       />
                          {lecture}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Lectures);