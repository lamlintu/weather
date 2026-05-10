import type { ReactNode } from "react";
import { forwardRef } from "react";
import s from "./segmented-control.module.scss";

type Props = {
  children: ReactNode;
};
type ItemProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function SegmentedControl({ children }: Props) {
  return <div className={s.wrapper}>{children}</div>;
}

export const SegmentedControlItem = forwardRef<HTMLInputElement, ItemProps>(
  function SegmentedControlItem({ label, ...props }, ref) {
    return (
      <label className={s.item}>
        <input {...props} ref={ref} type="radio" className={s.input} />
        <span className={s.label}>{label}</span>
      </label>
    );
  },
);
