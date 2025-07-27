import { ISelectOptions } from "@/common/interface";
import clsx from "clsx";

interface ICommonSelect {
  classnames?: string;
  options: ISelectOptions[];
  defaultValue?: any;
  legend?: string | React.ReactNode;
}
const CommonSelect = ({
  classnames,
  options,
  defaultValue,
  legend,
}: ICommonSelect) => {
  return (
    <fieldset className="fieldset p-0">
      <legend className="fieldset-legend p-0">{legend}</legend>
      <select
        defaultValue={defaultValue}
        className={clsx("select rounded-full", classnames)}
      >
        {options?.map((i: ISelectOptions) => (
          <option key={i?.value} value={i?.value}>
            {i?.label}
          </option>
        ))}
      </select>
    </fieldset>
  );
};

export default CommonSelect;
