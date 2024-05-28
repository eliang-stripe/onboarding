import * as React from "react"
import FormField from "../components/formfield"
import Sidebar from "../components/sidebar"
import parser from 'html-react-parser';
import { useState } from "react";
import statementImage from "/public/statement.png"

import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const formdata = [
  {
    "title": "Tell us more about your business",
    "description": <>Stripe collects this information to better serve your business and help meet the requirements of regulators, financial partners, and our <a className="font-semibold text-accent">Services Agreement</a>.</>,
    "fields": [
      {
        "type": "",
        "label": "Legal business name",
        "description": "Must be identical to IRS-issued documents – including capitalization and punctuation.",
        "helpText": <>If you’re unsure of your legal business name, check your <span className='font-semibold'>Letter 147C</span> or <span className='font-semibold'>SS-4 Confirmation Letter</span>.</>,
        "placeholder": "My Business, Inc.",
        "errorMessage": ""
      },
      {
        "type": "",
        "label": "Employer Identification Number (EIN)",
        "description": "If you use your Social Security number for business tax purposes, you can enter that instead.",
        "helpText": "",
        "placeholder": "12-3456789",
        "errorMessage": ""
      },
      {
        "type": "",
        "label": "Business name",
        "badgeText": "Optional",
        "description": "The operating name of your company if it’s different than the legal name.",
        "helpText": "",
        "placeholder": "My Business",
        "errorMessage": ""
      },
      {
        "type": "select",
        "label": "Industry",
        "description": "Select the option that best matches the goods or service your customers will buy. This helps satisfy risk and compliance obligations.",
        "helpText": "",
        "placeholder": "",
        "errorMessage": ""
      },
      {
        "type": "url",
        "label": "Business website",
        "description": <><a className='font-semibold text-accent'>Learn more</a> about what information must appear on your business website.</>,
        "helpText": "",
        "placeholder": "my-website.com",
          "errorMessage": ""
      },
      {
        "type": "textarea",
        "label": "Product description",
        "description": "In 1-2 sentences, describe what you sell and when you typically charge your customers.",
        "helpText": "",
        "placeholder": "We provide comprehensive online courses in various subjects, and bill our users every month for continued access to classes.",
        "errorMessage": ""
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
          <img src={statementImage} className="mt-3 max-w-[400px]"/>
        </>,
        "placeholder": "",
        "errorMessage": "This is an error. It pushes the help text down when it appears."
      },
      {
        "type": "",
        "label": "Statement descriptor",
        "description": "A short summary or label associated with transactions.",
        "helpText": <>
          This is similar to the full statement descriptor. You may provide more specific details about a charge with dynamic suffixes. When a suffix is used, it is combined with the shortened descriptor on card statements.
          <img src={statementImage} className="mt-3 max-w-[400px]"/>
        </>,
        "placeholder": "",
        "errorMessage": ""
      },
      {
        "type": "switch",
        "label": "Show phone number on receipts and invoices",
        "description": "Hide your customer support number on invoices and receipts.",
        "helpText": "Your customer support number will still be shown on customer bank and credit card statements.",
      },
      {
        "type": "tel",
        "label": "Customer support phone number",
        "description": "",
        "helpText": "This phone number can be optionally surfaced on payment statements, invoices and receipts if you use Stripe for Payments. You can control the visibility of this information and update this information at any time in settings.",
        "placeholder": "(123) 456-7890",
        "errorMessage": ""
      },
    ]
  }
]

const IndexPage = () => {
  const [page, setPage] = useState(0);
  const currentPageData = formdata[page];

  const incrementPage = () => {
    if (page == formdata.length - 1) { return; }
    setPage(page + 1);
  }

  const decrementPage = () => {
    if (page == 0) { return; }
    setPage(page - 1);
  }

  return (
    <div className="min-w-screen h-screen flex gap-12 overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      <div className="grow min-h-screen overflow-scroll">
        <div className="flex flex-col gap-10 p-12 py-20 w-full max-w-[600px]">
          {/* Header */}
          <div className="header">
            <h1 className="text-3xl font-semibold text-primary mb-2">{currentPageData.title}</h1>
            <p className="text-lg text-secondary">{currentPageData.description}</p>
          </div>

          {/* Content */}
          {currentPageData.fields.map((data, key) => {
            return (
              <FormField
                key={page + "" + key}
                type={data.type || "text"}
                label={data.label}
                badgeText={data.badgeText}
                description={data.description}
                helpText={data.helpText}
                placeholder={data.placeholder}
                errorMessage={data.errorMessage}
              />
            )
          })}

          {/* Footer */}
          <div className="flex gap-2 justify-end">
            <button
              type="button"
              className={`${page == 0 ? "hidden" : ""} bg-gray-200 px-3 py-2 rounded font-medium`}
              onClick={decrementPage}
            >
              Back
            </button>
            <button
              type="button"
              className="bg-accent px-3 py-2 text-white rounded font-medium"
              onClick={incrementPage}
            >
              Continue
            </button>
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
