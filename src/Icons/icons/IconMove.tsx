/** @jsx jsx */
/** Do not edit this file directly. Edit the template in generate-icons.js **/
import { jsx } from "@emotion/core";
import * as React from "react";
import PropTypes from "prop-types";
import { IconProps } from "../IconTypes";
import { useTheme } from "../../Theme/Providers";

export const IconMove: React.FunctionComponent<IconProps> = ({
  color: providedColor,
  size: providedSize = "md",
  ...other
}) => {
  const theme = useTheme();
  const size =
    typeof providedSize === "string"
      ? theme.iconSizes[providedSize]
      : providedSize;
  const color = providedColor || theme.colors.text.default;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      height={size}
      width={size}
      {...other}
    >
      <polyline points="5 9 2 12 5 15" />
      <polyline points="9 5 12 2 15 5" />
      <polyline points="15 19 12 22 9 19" />
      <polyline points="19 9 22 12 19 15" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="12" y1="2" x2="12" y2="22" />
    </svg>
  );
};

IconMove.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
