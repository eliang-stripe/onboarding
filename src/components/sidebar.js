import * as React from "react"
import { Link } from "gatsby"
import { ArrowLeft } from "lucide-react"
import StepCounter from "/public/stepcounter.png"


const Sidebar = ({type}) => {
  if (type == "embedded") { return; }

  if (type == "hosted") {
    return (
      <div className="md:min-h-screen w-full md:w-[30%] md:max-w-[600px] bg-[var(--accent-color)] flex flex-col p-4 md:p-12">
        <div className="flex flex-col grow gap-4 md:gap-12">
          <div className="flex gap-3 items-center justify-center md:justify-start text-white">
            <div className="h-8 w-8 bg-white rounded-full"></div>
            Rocket Rides
          </div>
          <h1 className="text-lg md:text-3xl text-white text-center md:text-left">
            Rocket Rides partners with Stripe for secure payments.
          </h1>
          <div className="text-white flex items-center gap-1.5 text-sm">
            <ArrowLeft size="18" />
            Return to Rocket Rides
          </div>
        </div>
        <div className="hidden md:flex flex-col text-white gap-4">
          <p>Powered by Stripe</p>
          <p>Terms</p>
          <p>Privacy</p>
        </div>
      </div>
    )
  }

  if (type == "direct") {
    return (
      <div className="min-h-screen md:w-[30%] flex flex-col p-12 pr-0">
        <img src={StepCounter} alt="" width={255} className="self-end fixed mt-10" />
      </div>
    )
  }
}

export default Sidebar
