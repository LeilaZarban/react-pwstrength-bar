import styled from "styled-components";

interface IPW {
  color: string;
  width: string;
  height?: string;
  shapeEdge?: string;
}
interface IPWContainer {
  mainwidth: string;
  height?: string;
  shapeEdge?: string;
  backgroundColor?: string;
}

export const PWCountainer = styled.div`
  border-radius: ${(props: IPWContainer) =>
    (props.shapeEdge = "circle" ? "4px" : "0px")};
  background: ${(props: IPWContainer) => props.backgroundColor ?? "#ddd"};
  width: ${(props: IPWContainer) => props.mainwidth ?? "100%"};
  height: ${(props: IPWContainer) => props.height ?? "20px"};
  margin: 15px 0px;
`;

export const PWDiv = styled.div`
  background: ${(props: IPW) => props.color};
  width: ${(props: IPW) => props.width};
  height: ${(props: IPW) => props.height ?? "20px"};
  transition: width 2s;
  border-radius: ${(props: IPW) =>
    (props.shapeEdge = "circle" ? "4px" : "0px")};
  color: #fff;
  text-align: center;
`;
