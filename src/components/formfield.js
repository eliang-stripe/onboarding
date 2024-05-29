import * as React from "react"
import { Info } from "lucide-react"
import * as Switch from '@radix-ui/react-switch';
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FormField = ({
  type,
  label,
  description,
  badgeText,
  helpText,
  placeholder,
  errorMessage,
  showRightRail,
  }) => {
    const [showHelpText, setShowHelpText] = useState(false);

    const ToolTip = () => {
      return (
        <div className="mt-2 lg:absolute z-10 lg:w-max lg:max-w-[280px] lg:invisible lg:opacity-0 lg:right-0 lg:translate-x-[calc(100%+20px)] -top-3 text-secondary text-sm peer-focus:visible peer-focus:opacity-100">
          {description}
          {' '}
          {helpText}
        </div>
      )
    }

    const HelpText = () => {
      if (showHelpText) {
        return (
          <p className="text-secondary text-sm">
            {description}
            {' '}
            {helpText}
          </p>
        )
      }
      return (
        <p className="text-secondary text-sm">
          {description}
          {' '}
          <button
            onClick={() => setShowHelpText(true)}
            className={`${helpText ? "" : "hidden"} whitespace-nowrap text-gray-900 font-medium underline decoration-dashed hover:decoration-solid underline-offset-2 decoration-gray-400 hover:decoration-gray-800 focus-visible:outline-[var(--accent-color)]`}
          >
            See more
            <ChevronDown size={16} className="inline-block ml-0.5 mb-0.5" />
          </button>
        </p>
      )
    }

    const Input = () => {
      if (type == "textarea") {
        return (
          <textarea
            className={`
              ${errorMessage ? "border-alert" : "border-gray-300"}
              border rounded p-2 py-1 text-primary focus-visible:outline-[var(--accent-color)] peer w-full
            `}
            rows={4}
            placeholder={placeholder}
          >

          </textarea>
        )
      } else if (type == "select") {
        return (
          <select
            className={`
              ${errorMessage ? "border-alert" : "border-gray-300"}
              border rounded p-1.5 py-1.5 text-primary font-medium focus-visible:outline-[var(--accent-color)] peer w-full
            `}
          >
            <option value="">Please choose an option</option>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
            <option value="">Option 4</option>
            <option value="">Option 5</option>
          </select>
        )
      } else {
        return (
          <input
            className={`
              ${errorMessage ? "border-alert" : "border-gray-300 hover:border-gray-400"}
              ${type == "date" || type == "tel" ? "max-w-[200px]" : ""}
              focus-visible:outline-[var(--accent-color)] border rounded p-2 py-1 text-primary transition peer w-full
            `}
            placeholder={placeholder}
            type={type}
          />
        )
      }
    }

    if (type == "switch") {
      return (
        <div>
          <div className="flex gap-3 mb-3">
            <Switch.Root
              className="shrink-0 w-[42px] h-[25px] rounded-full relative focus:outline-[var(--accent-color)] outline-offset-1 bg-gray-200 data-[state=checked]:bg-[var(--accent-color)] outline-none cursor-pointer hover:bg-gray-300 transition duration-150 group z-1"
            >
              <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-lg transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px] group-hover:shadow-xl" />
            </Switch.Root>

            {/* Label */}
            <div className="flex flex-row gap-2 items-center">
              <label className="font-medium text-primary">{label}</label>
              <div className={`${badgeText ? "" : "hidden"} text-sm bg-gray-100 border border-gray-300 rounded px-1 text-primary font-medium`}>{badgeText}</div>
            </div>
          </div>

          {/* Help text */}
          <HelpText />
        </div>
      )
    }

    return (
      <div className="flex flex-col gap-2 relative">

        {/* Label */}
        <div className="flex flex-row gap-2 items-center">
          <label className="font-medium text-primary">{label}</label>
          <div className={`${badgeText ? "" : "hidden"} text-sm bg-gray-100 border border-gray-300 rounded px-1 text-primary font-medium`}>{badgeText}</div>
        </div>

        <div className="relative">
          {/* Input */}
          <Input />

          {/* Tooltip on right rail */}
          {showRightRail && <ToolTip />}
        </div>

        {/* Error */}
        <p className={`${errorMessage ? "" : "hidden"} text-alert text-sm`}>
          {errorMessage}
        </p>

        {/* Help text */}
        {!showRightRail && <HelpText />}
      </div>
    )
  }

export default FormField
