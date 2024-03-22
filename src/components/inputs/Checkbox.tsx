import { InputHTMLAttributes, forwardRef } from "react";
import { cn, convertToElementId } from "../../lib/utils";

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  name: string;
  type?: "checkbox";
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    const idName = convertToElementId(props.name);
    return (
      <div className="flex flex-row-reverse items-center gap-x-4">
        <label className="text-cl-black capitalize" htmlFor={idName}>
          {props.name}
        </label>

        <input
          id={idName}
          type="checkbox"
          className={cn(
            "text-lodgify-green-400 h-4 w-4 rounded border-gray-300 focus:ring-transparent",
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
