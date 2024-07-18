import * as React from "react";

interface ISectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FunctionComponent<ISectionTitleProps> = (props) => {
  return (
    <div className="flex items-center justify-between xs:flex-col xs:items-start xs:gap-2">
      <div>
        <p className="text-3xl xs:text-xl font-bold">{props.title}</p>
      </div>
      <div
        className={
          props.subtitle
            ? "border-solid border rounded-3xl border-slate-300 flex items-center p-2 xs:p-1"
            : "hidden"
        }
      >
        <p className="xs:text-sm">{props.subtitle} &rarr;</p>
      </div>
    </div>
  );
};

export default SectionTitle;
