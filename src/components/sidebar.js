import * as React from "react"
import { Link } from "gatsby"
import { Info } from "lucide-react"

const Sidebar = ({}) => {
  return (
    <div className="min-h-screen w-[500px] bg-blue-500 flex flex-col p-12">
      <div className="flex flex-col grow gap-12">
        <div className="flex gap-3 items-center text-white">
          <div className="h-8 w-8 bg-white rounded-full"></div>
          Rocket Rides
        </div>
        <h1 className="text-3xl text-white">
          Rocket Rides partners with Stripe for secure payments.
        </h1>
      </div>
      <div className="flex flex-col gap-4 text-white">
        <p>Powered by Stripe</p>
        <p>Terms</p>
        <p>Privacy</p>
      </div>


    </div>
  )
}

export default Sidebar
