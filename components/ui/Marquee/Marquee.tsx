import { FC, ReactNode } from "react";
import style from "./Marquee.module.css";
import Ticker from "react-ticker";
import cn from "classnames";

interface Props {
  children: ReactNode[];
  variant?: "primary" | "secondary";
}

const Marquee: FC<Props> = ({ children, variant = "primary" }) => {
  const rootClassName = cn(style.root, {
    [style.secondary]: variant === "secondary",
  });

  return (
    <div className={rootClassName}>
      <Ticker offset={200}>
        {() => <div className={style.container}>{children}</div>}
      </Ticker>
    </div>
  );
};

export default Marquee;
