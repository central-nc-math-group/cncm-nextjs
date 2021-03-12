import { FunctionComponent } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Particles from "react-tsparticles";

import type { Theme } from "../types";

const styles = makeStyles((theme: Theme) => ({
  header: {
    background: "#f8705c",
    minHeight: "10vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "1.5rem",
    color: theme.palette.background.default,
    padding: theme.spacing(5),
  },
  textWrapper: {
    alignItems: "center",
    position: "absolute",
  },
  wrapper: {
    backgroundColor: theme.palette.secondary.light,
    height: "10rem",
  },
  content: {
    textAlign: "center",
    position: "absolute",
    zIndex: 1,
    height: "10rem",
    width: "100%",
  },
  pos: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  text: {
    margin: "auto",
    color: "#ffffff",
  },
}));

const FancyHeader: FunctionComponent<{ heading: Element | string }> = ({
  heading,
  children,
}) => {
  const classes = styles();

  const particlesInit = () => {};
  const particlesLoaded = () => {};

  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.pos}>
          <div className={classes.text}>
            <Typography variant="h3">{heading}</Typography>
            <br />
            <Typography variant="h5">{children}</Typography>
          </div>
        </div>
      </div>
      <Particles
        height="10rem"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#0d47a1",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default FancyHeader;
