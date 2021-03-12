
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
    wrapper: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        margin: "50px",
      },
      potd: {
        maxWidth: "60%",
        margin: "50px",
      },
      error: {
        color: "red",
        margin: "20px",
      },
});