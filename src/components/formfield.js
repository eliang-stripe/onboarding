import * as React from "react"
import { Info } from "lucide-react"
import * as Switch from '@radix-ui/react-switch';
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const FormField = ({
  type,
  label,
  description,
  badgeText,
  helpText,
  tooltipText,
  placeholder,
  errorMessage,
  showRightRail,
  showSeeMore,
  }) => {
    const [showHelpText, setShowHelpText] = useState(false);

    useEffect(() => {
      setShowHelpText(false);
    }, [showSeeMore]);

    const RightRailText  = () => {
      return (
        <div className="mt-2 lg:absolute z-10 lg:w-max lg:max-w-[280px] lg:invisible lg:opacity-0 lg:right-0 lg:translate-x-[calc(100%+20px)] -top-3 text-secondary text-sm peer-focus:visible peer-focus:opacity-100">
          {description}
          {' '}
          {helpText}
        </div>
      )
    }

    const ToolTip = () => {
      return (
        <div className={`${!tooltipText ? "hidden" : ""} text-secondary relative flex items-center`}>
          <button className="peer cursor-pointer p-1 focus-visible:outline-[var(--accent-color)]"><Info size={14}/></button>
          <div id="tooltip-text" className="absolute z-10 bg-white shadow-lg p-2.5 w-max max-w-[350px] border invisible opacity-0 peer-hover:visible peer-hover:opacity-100 peer-focus:visible peer-focus:opacity-100 left-1/2 -translate-x-1/2 bottom-6 rounded-lg text-primary text-sm transition-all">
            {tooltipText}
          </div>
        </div>
      )
    }

    const HelpText = () => {
      if (showHelpText || !showSeeMore) {
        return (
          <div className="text-secondary text-sm">
            {description}
            {' '}
            {helpText}
          </div>
        )
      }
      return (
        <div className="text-secondary text-sm">
          {description}
          {' '}
          <button
            onClick={() => setShowHelpText(true)}
            className={`${helpText ? "" : "hidden"} whitespace-nowrap text-gray-900 font-medium underline decoration-dashed hover:decoration-solid underline-offset-2 decoration-gray-400 hover:decoration-gray-800 focus-visible:outline-[var(--accent-color)]`}
          >
            More info
            <ChevronDown size={16} className="inline-block ml-0.5 mb-0.5" />
          </button>
        </div>
      )
    }

    const Input = () => {
      if (type == "textarea") {
        return (
          <textarea
            className={`
              ${errorMessage ? "border-alert" : "border-gray-300 hover:border-gray-400"}
              border rounded p-2 py-1 text-primary focus-visible:outline-[var(--accent-color)] transition peer w-full
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
              ${errorMessage ? "border-alert" : "border-gray-300 hover:border-gray-400"}
              border rounded p-1.5 py-1.5 text-primary font-medium focus-visible:outline-[var(--accent-color)] transition peer w-full
            `}
          >
            <option value="">{placeholder}</option>
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
              ${type == "ssn" || type == "tel" ? "max-w-[200px]" : ""}
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
          <div className="flex gap-3 mb-3 relative">
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

            {/* Text on right rail */}
            {showRightRail && <RightRailText />}
          </div>

          {/* Help text */}
          {!showRightRail && <HelpText />}
        </div>
      )
    }

    return (
      <div className="flex flex-col gap-1.5 relative">

        {/* Label */}
        <div className="flex flex-row gap-1 items-center">
          <label className="font-medium text-primary">{label}</label>
          <ToolTip />
          <div className={`${badgeText ? "" : "hidden"} text-sm bg-gray-100 border border-gray-300 rounded px-1 ml-1 text-primary font-medium`}>{badgeText}</div>
        </div>

        <div className="relative">
          {/* Input */}
          <Input />

          {/* Text on right rail */}
          {showRightRail && <RightRailText />}
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
