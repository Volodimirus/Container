import { PropsWithChildren } from "react";

interface ContainerProps {
  verticalCenter?: boolean;
  verticalEnd?: boolean;
  horizontalCenter?: boolean;
  horizontalEnd?: boolean;
  width?: number | string;
  fullWidth?: boolean;
  margins?: number | string;
  paddings?: number | string;
  verticalMargins?: number | string;
  horizontalMargins?: number | string;
  verticalPaddings?: number | string;
  horizontalPaddings?: number | string;
  columnDirection?: boolean;
  rowGap?: number | string;
  columnGap?: number | string;
  gap?: number | string;
  columnReverseDirection?: boolean;
  rowReverseDirection?: boolean;
  styles?: object;
  justifyBetween?: boolean;
  justifyAround?: boolean;
  justifyEvenly?: boolean;
  outline?: string;
}

export default function Container({
  children,
  horizontalCenter,
  horizontalEnd,
  horizontalMargins,
  horizontalPaddings,
  verticalCenter,
  verticalEnd,
  verticalMargins,
  verticalPaddings,
  paddings,
  margins,
  justifyBetween,
  justifyAround,
  justifyEvenly,
  columnDirection,
  columnReverseDirection,
  rowReverseDirection,
  columnGap,
  rowGap,
  gap,
  styles,
  outline
}: PropsWithChildren<ContainerProps>) {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: justifyBetween
          ? "space-between"
          : justifyAround
          ? "space-around"
          : justifyEvenly
          ? "space-evenly"
          : horizontalCenter
          ? "center"
          : horizontalEnd
          ? "flex-end"
          : "flex-start",
        alignItems: verticalCenter
          ? "center"
          : verticalEnd
          ? "flex-end"
          : "flex-start",
        margin: margins ? margins : 0,
        padding: paddings ? paddings : 0,
        marginLeft: horizontalMargins ? horizontalMargins : 0,
        marginRight: horizontalMargins ? horizontalMargins : 0,
        marginTop: verticalMargins ? verticalMargins : 0,
        marginBottom: verticalMargins ? verticalMargins : 0,
        paddingTop: verticalPaddings ? verticalPaddings : 0,
        paddingBottom: verticalPaddings ? verticalPaddings : 0,
        paddingLeft: horizontalPaddings ? horizontalPaddings : 0,
        paddingRight: horizontalPaddings ? horizontalPaddings : 0,
        flexDirection: columnDirection
          ? "column"
          : columnReverseDirection
          ? "column-reverse"
          : rowReverseDirection
          ? "row-reverse"
          : "row",
        gap: gap ? gap : 0,
        columnGap: columnGap ? columnGap : 0,
        rowGap: rowGap ? rowGap : 0,
        border: outline,
        ...styles,
      }}
    >
      {children}
    </div>
  );
}
