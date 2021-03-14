import { FunctionComponent, ReactNode } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Particles from "react-tsparticles";
import theme from "./Theme";

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
    height: ({ height }: { height?: string | number }) => height || "10rem",
  },
  content: {
    textAlign: "center",
    position: "absolute",
    zIndex: 1,
    height: ({ height }: { height?: string | number }) => height || "10rem",
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

export type Props = {
  heading: ReactNode;
  height?: string | number;
  customOptions?: object;
  customParticles?: object;
};

const FancyHeader: FunctionComponent<Props> = ({
  heading,
  children,
  height,
  customOptions,
  customParticles,
}) => {
  const classes = styles({ height });

  const particlesInit = () => {};
  const particlesLoaded = () => {};

  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.pos}>
          <div className={classes.text}>
            <Typography variant="h3" style={{ fontSize: "5vw" }}>
              {heading}
            </Typography>
            <br />
            <Typography variant="h5" style={{ fontSize: "2vw" }}>
              {children}
            </Typography>
          </div>
        </div>
      </div>
      <Particles
        height={height}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={Object.assign(
          {
            background: {
              color: {
                value: "#0c54c7",
              },
            },
            fpsLimit: 60,
            particles: Object.assign(
              {
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
              customParticles || {}
            ),
            detectRetina: true,
          },
          customOptions || {}
        )}
      />
    </div>
  );
};

export default FancyHeader;
