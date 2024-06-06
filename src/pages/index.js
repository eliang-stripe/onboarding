import * as React from "react"
import FormField from "../components/formfield"
import Sidebar from "../components/sidebar.js"
import Overview from "../components/overview.js";
import { useState, useRef, useEffect } from "react";
import statementImage from "/public/statement.png"
import * as Switch from '@radix-ui/react-switch';
import { X } from "lucide-react";

import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const formdata = [
  {
    "title": "Let's start with some basics",
    "description": "Choose your business type to get started.",
    "fields": [
      {
        "type": "select",
        "label": "Business type",
        "description": "If you have not filed paperwork to register as a business entity, then your business type is likely to be Individual.",
        "helpText": <>Not sure which option to select? Refer to this <a className='font-semibold text-[var(--accent-color)]'>support article</a>.</>,
        "tooltipText": "",
        "placeholder": "Company",
        "errorMessage": "This is an error."
      },
      {
        "type": "select",
        "label": "Business structure",
        "description": <>If you're a public company, select "Other/I'm not sure" and refer to this <a className='font-semibold text-[var(--accent-color)]'>support article</a> for further details.</>,
        "helpText": "",
        "placeholder": "Sole proprietorship",
        "errorMessage": "This is an error."
      },
    ]
  },
  {
    "title": "Tell us more about your business",
    "description": <>Stripe collects this information to better serve your business and help meet the requirements of regulators, financial partners, and our <a className="font-semibold text-[var(--accent-color)]">Services Agreement</a>.</>,
    "fields": [
      {
        "type": "",
        "label": "Legal business name",
        "description": "Must be identical to IRS-issued documents – including capitalization and punctuation.",
        "helpText": <>If you’re unsure of your legal business name, check your <span className='font-semibold text-primary'>Letter 147C</span> or <span className='font-semibold text-primary'>SS-4 Confirmation Letter</span>.</>,
        "placeholder": "My Business, Inc.",
        "errorMessage": "This is an error."
      },
      {
        "type": "",
        "label": "Employer Identification Number (EIN)",
        "description": "If you use your Social Security number for business tax purposes, you can enter that instead.",
        "helpText": "",
        "placeholder": "12-3456789",
        "errorMessage": "This is an error."
      },
      {
        "type": "",
        "label": "Business name",
        "badgeText": "Optional",
        "description": "The operating name of your company if it’s different than the legal name.",
        "helpText": "",
        "placeholder": "My Business",
        "errorMessage": "This is an error."
      },
      {
        "type": "select",
        "label": "Industry",
        "description": "Select the option that best matches the goods or service your customers will buy. This helps satisfy risk and compliance obligations.",
        "helpText": "",
        "placeholder": "Please choose an option",
        "errorMessage": "This is an error."
      },
      {
        "type": "url",
        "label": "Business website",
        "description": <>
          Your website must:
          <ul className="list-disc ml-4 mb-2">
            <li>Be viewable and not password-protected</li>
            <li>Match the business name and industry on your Stripe account</li>
          </ul>
          <a className='font-semibold text-[var(--accent-color)]'>Learn more</a> about Stripe's policy.
        </>,
        "helpText": "",
        "placeholder": "my-website.com",
        "errorMessage": "This is an error."
      },
      {
        "type": "textarea",
        "label": "Product description",
        "description": "In 1-2 sentences, describe what you sell and when you typically charge your customers.",
        "helpText": "",
        "placeholder": "We provide comprehensive online courses in various subjects, and bill our users every month for continued access to classes.",
        "errorMessage": "This is an error."
      },
      {
        "type": "ssn",
        "label": "Social Security number",
        "description": "We’re required to collect this information to verify your identity and keep Stripe’s payments secure.",
        "helpText": <>
          <p className="mb-2"/>
          You previously provided the last 4 digits, but now we need all 9 because your payment volume has grown. <a className="font-medium text-[var(--accent-color)]">Learn more</a>
        </>,
        tooltipText: "If your business representative doesn’t have a Social Security number, you may need to update your business address to be outside the United States.",
        "placeholder": "123-45-6789",
        "errorMessage": "This is an error."
      },
    ]
  },
  {
    "title": "Add public details for customers",
    "description": "This information may be visible in payment statements, invoices, and receipts.",
    "fields": [
      {
        "type": "",
        "label": "Statement descriptor",
        "description": "A short description that shows up on your customer’s statements.",
        "helpText": <>
          Your statement decriptor should be 5-22 characters.
          <img src={statementImage} className="mt-3 w-full max-w-[350px]"/>
        </>,
        "placeholder": "",
        "errorMessage": <>Your statement descriptor must be similar to your business name, legal entity name, or URL. <a className="font-medium text-[var(--accent-color)]">Learn more</a></>
      },
      {
        "type": "",
        "label": "Statement descriptor",
        "description": "A short summary or label associated with transactions.",
        "helpText": <>
          This is similar to the full statement descriptor. You may provide more specific details about a charge with dynamic suffixes. When a suffix is used, it is combined with the shortened descriptor on card statements.
          <img src={statementImage} className="mt-3 w-full max-w-[350px]"/>
        </>,
        "placeholder": "",
        "errorMessage": <>Your statement descriptor must be similar to your business name, legal entity name, or URL. <a className="font-medium text-[var(--accent-color)]">Learn more</a></>
      },
      {
        "type": "tel",
        "label": "Customer support phone number",
        "description": "",
        "helpText": "This phone number can be optionally surfaced on payment statements, invoices and receipts if you use Stripe for Payments. You can control the visibility of this information and update this information at any time in settings.",
        "placeholder": "(123) 456-7890",
        "errorMessage": "This is an error."
      },
      {
        "type": "switch",
        "label": "Show phone number on receipts and invoices",
        "description": "Your customer support number will still be shown on customer bank and credit card statements.",
        "helpText": "",
      },
    ]
  }, {
    "title": "Review and submit",
    "description": "Take a moment to review your information.",
  }
]

const IndexPage = () => {
  const formContent = useRef();
  const [page, setPage] = useState(0);
  const [showErrors, setShowErrors] = useState(false);
  const [showBorder, setShowBorder] = useState(true);
  const [showSeeMore, setShowSeeMore] = useState(false);
  const [savedColor, setSavedColor] = useState();
  const [showRightRail, setShowRightRail] = useState(false);
  const [selectedNavOption, setSelectedNavOption] = useState('hosted');
  const currentPageData = formdata[page];

  const incrementPage = () => {
    if (page == formdata.length - 1) { return; }
    setPage(page + 1);
    window.scrollTo(0, 0);
    formContent.current.scrollTo(0, 0);
  }

  const decrementPage = () => {
    if (page == 0) { return; }
    setPage(page - 1);
    window.scrollTo(0, 0);
    formContent.current.scrollTo(0, 0);
  }

  const setNavigation = (e) => {
    const value = e.target.value;

    // If coming from direct, change color back to saved
    if (selectedNavOption == "direct") {
      document.documentElement.style.setProperty('--accent-color', savedColor);
    }

    // If going to direct, change color to blurple and save previous color
    if (value == "direct") {
      setSavedColor(getComputedStyle(document.documentElement).getPropertyValue('--accent-color'));
      document.documentElement.style.setProperty('--accent-color', "#675DFF");
    }

    setSelectedNavOption(value);
  }

  const setAccentVariable = (color) => {
    document.documentElement.style.setProperty('--accent-color', color);
  }

  const Controls = () => {
    return (
      <div className="flex flex-col bg-white shadow-lg rounded fixed bottom-3 left-3 lg:bottom-12 lg:left-12 w-[calc(100%-24px)] md:w-[250px] p-2 md:p-3 gap-1 md:gap-3 z-50 border transition-transform text-primary font-mono text-sm font-semibold"
      >
        <div className="flex flex-col gap-1">
          <select id="nav-option" className="border rounded px-1 py-1" value={selectedNavOption} onChange={setNavigation}>
            <option value="hosted">Hosted</option>
            <option value="embedded">Embedded</option>
            <option value="direct">Direct</option>
          </select>
        </div>

        <div className={`${selectedNavOption != "direct" ? "" : "hidden"} flex gap-2 items-center`}>
          <input type="color" id="accent-color" onChange={e => setAccentVariable(e.target.value)} className="bg-transparent"
          />
          <label htmlFor="accent-color">Accent color</label>
        </div>

        <div className="flex gap-2 items-center">
          <input type="checkbox" id="show-errors" checked={showErrors} onChange={(e) => setShowErrors(e.target.checked)} />
          <label htmlFor="show-errors">Show form errors</label>
        </div>

        <div className={`${showRightRail ? "hidden" : ""} flex gap-2 items-center`}>
          <input type="checkbox" id="show-see-more" checked={showSeeMore} onChange={(e) => setShowSeeMore(e.target.checked)} />
          <label htmlFor="show-see-more">Progressive disclosure</label>
        </div>

        <div className="flex gap-2 items-center">
          <input type="checkbox" id="show-right-rail" checked={showRightRail} onChange={(e) => setShowRightRail(e.target.checked)} />
          <label htmlFor="show-right-rail">Show right rail</label>
        </div>

        <div className={`${selectedNavOption == "embedded" ? "" : "hidden"} flex gap-2 items-center`}>
          <input type="checkbox" id="show-borders" checked={showBorder} onChange={(e) => setShowBorder(e.target.checked)} />
          <label htmlFor="show-borders">Show embedded borders</label>
        </div>
      </div>
    )
  }

  return (
    <div className={`
      flex gap-4 overflow-hidden justify-center flex-col h-auto md:flex-row`}
    >
      {/* Top bar for direct onboarding */}
      <div className={`
        ${selectedNavOption == "direct" ? "" : "hidden"} fixed flex items-center gap-4 px-4 w-full top-0 h-16 bg-white border-b z-20 text-secondary`}
        >
        <X size={20} />
        <div className="h-4 w-0.5 bg-gray-300"></div>
        <div className="text-primary text-sm font-semibold">Activate payments</div>
      </div>

      {/* Control panel */}
      <Controls />

      {/* Sidebar */}
      <Sidebar type={selectedNavOption} />

      {/* Form content */}
      <div
        className={`
        ${selectedNavOption == "hosted" || selectedNavOption == "direct" ? "grow" : ""}
        ${selectedNavOption == "direct" ? "pt-16 md:pt-10" : ""}
        ${selectedNavOption == "embedded" ? "my-12" : ""}
        ${selectedNavOption == "embedded" && showRightRail ? "w-full max-w-[900px]" : ""}
        ${selectedNavOption == "embedded" && showBorder ? "border border-dashed border-2 border-[var(--accent-color)] my-12" : ""}
        relative`}
        ref={formContent}
      >
        <div className={`
          ${selectedNavOption == "embedded" ? "p-1 md:max-w-[500px]" : "p-6 md:p-12 md:py-20"}
          flex flex-col gap-16 w-full md:max-w-[600px]
          ${showRightRail ? "lg:w-[calc(100%-280px)]" : ""}
          `}
        >
          {/* Progress bar for embedded */}
          <div className={`${selectedNavOption == "embedded" ? "" : "hidden"} w-[160px] h-[8px] bg-gray-300 rounded-full overflow-hidden`}>
            <div className="bg-primary w-[30%] h-full"></div>
          </div>

          {/* Header */}
          <div className="header">
            <h1 className="text-3xl font-semibold text-primary mb-2">{currentPageData.title}</h1>
            <p className="text-lg text-secondary">{currentPageData.description}</p>
          </div>

          {/* Content */}
          {currentPageData.fields?.map((data, key) => {
            return (
              <FormField
                key={page + "" + key}
                type={data.type || "text"}
                label={data.label}
                badgeText={data.badgeText}
                description={data.description}
                helpText={data.helpText}
                tooltipText={data.tooltipText}
                placeholder={data.placeholder}
                errorMessage={showErrors ? data.errorMessage : ""}
                showRightRail={showRightRail}
                showSeeMore={showSeeMore}
                />
            )
          }) || <Overview />}

          {/* Footer */}
          <div className="flex flex-col gap-4">
            <p class={`${page == formdata.length - 1 ? "" : "hidden"} text-secondary`}>
              By confirming, you agree that the information provided is complete and correct.
            </p>
            <div className="flex grow gap-2 justify-end">
              <button
                type="button"
                className={`${page == 0 ? "hidden" : ""} bg-gray-200 px-3 py-2 rounded font-medium grow focus-visible:outline-[var(--accent-color)]`}
                onClick={decrementPage}
              >
                Back
              </button>
              <button
                type="button"
                className="bg-[var(--accent-color)] px-3 py-2 text-white rounded font-medium grow focus-visible:outline-[var(--accent-color)]"
                onClick={incrementPage}
              >
                {page == formdata.length - 1 ? "Submit" : "Continue"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
