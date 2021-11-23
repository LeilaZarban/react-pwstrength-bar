import React from "react";
import zxcvbn from "zxcvbn";
import { PWCountainer, PWDiv } from "./PasswordStrengthStyle";

interface IPWStrength {
  password: string;
  scoreWords?: string[];
  colors?: string[];
  width?: string;
  height?: string;
  shapeEdge?: string;
  backgroundColor?: string;
  scoreWordClass?: string;
  onChangeScore?: () => void;
}

const PasswordStrength: React.FC<IPWStrength> = (props) => {
  const score = props.password && zxcvbn(props.password, []).score;

  const scoreWords = props.scoreWords ?? [
    "Weak",
    "Medium",
    "Normal",
    "Strong",
    "Very Strong",
  ];
  const colors = props.colors ?? [
    "#ed5565",
    "#dd772c",
    "#f8ac59",
    "#2b90ef",
    "#25c281",
  ];
  const widths = ["10%", "25%", "45%", "70%", "100%"];

  const changingWidth = score >= 0 && widths[score];
  const color = score >= 0 && colors[score];
  const scoreWord = scoreWords[score];

  return (
    <PWCountainer
      mainwidth={props.width}
      backgroundColor={props.backgroundColor}
      height={props.height}
      shapeEdge={props.shapeEdge}
    >
      <PWDiv
        width={changingWidth}
        color={color}
        height={props.height}
        shapeEdge={props.shapeEdge}
      >
        <span className={props.scoreWordClass} onChange={props.onChangeScore}>
          {scoreWord}
        </span>
      </PWDiv>
    </PWCountainer>
  );
};

export default React.memo(PasswordStrength);
