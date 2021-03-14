import { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  math: {
    fontFamily: "'Caveat', cursive",
    fontSize: "20px",
  },
  breakingPath: {
    strokeDasharray: 520,
    strokeDashoffset: 520,
    animation: "$breakingPath 10s linear forwards infinite",
  },
  "@keyframes breakingPath": {
    "0%, 10%": {
      strokeDashoffset: 520,
    },
    "20%, 100%": {
      strokeDashoffset: 0,
    },
  },
  middleSquare: {
    animation: "$middleSquare 10s ease-in-out infinite",
  },
  "@keyframes middleSquare": {
    "0%, 20%": {
      opacity: 0,
    },
    "25%": {
      opacity: 1,
    },
  },
  middleSquareLabel: {
    animation: "$middleSquareLabel 10s ease-in-out infinite",
  },
  "@keyframes middleSquareLabel": {
    "0%, 35%": {
      opacity: 0,
    },
    "45%, 100%": {
      opacity: 1,
    },
  },
  triangle: {
    animation: "$triangle 10s ease-in-out infinite",
  },
  "@keyframes triangle": {
    "0%, 45%": {
      opacity: 0,
    },
    "55%, 100%": {
      opacity: 1,
    },
  },
  rectangleLabel: {
    animation: "$rectangleLabel 10s ease-in-out infinite",
  },
  "@keyframes rectangleLabel": {
    "0%, 65%": {
      opacity: 0,
    },
    "75%, 100%": {
      opacity: 1,
    },
  },
});

const Pythagorean: FunctionComponent<{}> = (props) => {
  const svgClasses = styles();

  return (
    <svg viewBox="-10 -10 400 600">
      <rect width="170" height="170" fill="#91E868" stroke="black" />
      <path d="M 0 175 v 20 m 0 -10 h 170 m 0 -10 v 20" stroke="black" />
      <text x="75" y="210" className={svgClasses.math}>
        a+b
      </text>
      <text
        x="215"
        y="85"
        className={`${svgClasses.math}`}
        style={{ fontSize: "30px" }}
      >
        Area = (a+b)<tspan baseline-shift="super">2</tspan>
      </text>
      <path
        stroke="black"
        d="M0 50 l 120 -50 l 50 120 l -120 50 l -50 -120"
        fill="transparent"
        className={svgClasses.breakingPath}
      />
      <path
        stroke="black"
        fill="#AB8ADB"
        d="M0 50 l 120 -50 l 50 120 l -120 50 l -50 -120"
        className={svgClasses.middleSquare}
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 0,0; 25,200; 25,200"
          keyTimes="0; 0.25; 0.35; 1"
          dur="10s"
          repeatCount="indefinite"
          additive="sum"
        ></animateTransform>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0; 0; 22.619864948; 22.619864948"
          keyTimes="0; 0.25; 0.35; 1"
          dur="10s"
          repeatCount="indefinite"
          additive="sum"
        ></animateTransform>
      </path>
      <path
        d="M 5 380 v 20 m 0 -10 h 130 m 0 -10 v 20"
        stroke="black"
        className={svgClasses.middleSquareLabel}
      />
      <text
        x="70"
        y="410"
        className={`${svgClasses.math} ${svgClasses.middleSquareLabel}`}
      >
        c
      </text>
      <path
        d="M 0 50 v 120 h 50 l -50 -120"
        fill="#50C7C1"
        stroke="black"
        className={svgClasses.triangle}
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 0,0; 25,375; 25,375"
          keyTimes="0; 0.55; 0.65; 1"
          dur="10s"
          repeatCount="indefinite"
          additive="sum"
        ></animateTransform>
      </path>
      <path
        d="M 120 0 h 50 v 120 l -50 -120"
        fill="#50C7C1"
        stroke="black"
        className={svgClasses.triangle}
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 0,0; -95,425; -95,425"
          keyTimes="0; 0.55; 0.65; 1"
          dur="10s"
          repeatCount="indefinite"
          additive="sum"
        ></animateTransform>
      </path>
      <path
        d="M 0 50 v -50 h 120 l -120 50"
        fill="#50C7C1"
        stroke="black"
        className={svgClasses.triangle}
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 0,0; 135,425; 135,425"
          keyTimes="0; 0.55; 0.65; 1"
          dur="10s"
          repeatCount="indefinite"
          additive="sum"
        ></animateTransform>
      </path>
      <path
        d="M 170 120 v 50 h -120 l 120 -50"
        fill="#50C7C1"
        stroke="black"
        className={svgClasses.triangle}
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 0,0; 85,305; 85,305"
          keyTimes="0; 0.55; 0.65; 1"
          dur="10s"
          repeatCount="indefinite"
          additive="sum"
        ></animateTransform>
      </path>
      <path
        d="M 25 555 v 20 m 0 -10 h 50 m 0 -10 v 20"
        stroke="black"
        className={svgClasses.rectangleLabel}
      />
      <text
        x="45"
        y="580"
        className={`${svgClasses.math} ${svgClasses.rectangleLabel}`}
      >
        a
      </text>
      <path
        d="M 85 425 h 20 m -10 0 v 120 m -10 0 h 20"
        stroke="black"
        className={svgClasses.rectangleLabel}
      />
      <text
        x="105"
        y="485"
        className={`${svgClasses.math} ${svgClasses.rectangleLabel}`}
      >
        b
      </text>
      <path
        d="M 135 480 v 20 m 0 -10 h 120 m 0 -10 v 20"
        stroke="black"
        className={svgClasses.rectangleLabel}
      />
      <text
        x="185"
        y="505"
        className={`${svgClasses.math} ${svgClasses.rectangleLabel}`}
      >
        b
      </text>
      <path
        d="M 260 425 h 20 m -10 0 v 50 m -10 0 h 20"
        stroke="black"
        className={svgClasses.rectangleLabel}
      />
      <text
        x="275"
        y="450"
        className={`${svgClasses.math} ${svgClasses.rectangleLabel}`}
      >
        a
      </text>
      <text
        x="185"
        y="315"
        className={`${svgClasses.math}`}
        style={{ fontSize: "30px" }}
      >
        Area = 2ab+c<tspan baseline-shift="super">2</tspan>
      </text>
    </svg>
  );
};

export default Pythagorean;
