import Icon from "./icon";
import { textVariants } from "./text";

import ChevronDown from "../assets/icons/CaretDown.svg?react";
import { cva, type VariantProps } from "class-variance-authority";
import { useRef } from "react";
import Calendar from "../assets/icons/CalendarBlank.svg?react";
import { twMerge } from "tailwind-merge";

// eslint-disable-next-line react-refresh/only-export-components
export const datePickerVariantsContainer = cva(
  "cursor-pointer focus-within:border-yellow-dark transition-colors p-3 rounded-xl border border-gray-500 flex items-center justify-center gap-2"
);

// eslint-disable-next-line react-refresh/only-export-components
export const datePickerVariantsIcon = cva("size-5 fill-yellow");

// eslint-disable-next-line react-refresh/only-export-components
export const datePickerVariantsInput = cva(
  "cursor-pointer w-full outline-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden"
);

interface DatePickerProps
  extends React.ComponentProps<"input">,
    VariantProps<typeof datePickerVariantsInput> {
  icon?: React.ComponentProps<typeof Icon>["svg"];
}

export default function DatePicker({
  icon = Calendar,
  className,
  ...props
}: DatePickerProps) {
  const dateRef = useRef<HTMLInputElement>(null);

  const openDatePicker = () => {
    if (dateRef.current && typeof dateRef.current.showPicker === "function") {
      dateRef.current.showPicker();
    } else {
      dateRef.current?.focus();
    }
  };

  return (
    <button
      className={twMerge(datePickerVariantsContainer({ className }))}
      onClick={openDatePicker}
      type="button"
    >
      <Icon svg={icon} className={datePickerVariantsIcon()} />

      <input
        ref={dateRef}
        type="date"
        className={twMerge(
          datePickerVariantsInput({
            className: twMerge(
              textVariants({ className: "text-gray-200" }),
              "max-w-24"
            ),
          })
        )}
        min={new Date().toISOString().split("T")[0]}
        {...props}
      />

      <Icon svg={ChevronDown} className="ml-auto size-4 fill-gray-300" />
    </button>
  );
}