import React from "react";
import zxcvbn from "zxcvbn";
import { PWCountainer, PWDiv } from "./PasswordStrengthStyle";

interface IPWStrength {
  password: string;
}

const PasswordStrength: React.FC<IPWStrength> = (props) => {
  const score = props.password && zxcvbn(props.password, []).score;

  const scoreWords = ["Weak", "Medium", "Normal", "Strong", "Very Strong"];
  const colors = ["#ed5565", "#dd772c", "#f8ac59", "#2b90ef", "#25c281"];
  const widths = ["10%", "25%", "45%", "70%", "100%"];

  const width = score >= 0 && widths[score];
  const color = score >= 0 && colors[score];
  const scoreWord = scoreWords[score];

  return (
    <PWCountainer>
      <PWDiv width={width} color={color}>
        {scoreWord}
      </PWDiv>
    </PWCountainer>
  );
};

export default React.memo(PasswordStrength);
