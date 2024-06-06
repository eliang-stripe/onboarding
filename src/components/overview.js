import * as React from "react"
import { Loader } from "lucide-react";

const Overview = () => {

  const DetailRow = (data) => {
    return (
      <div className="flex flex-col sm:flex-row sm:gap-4">
        <h3 class="font-medium sm:w-[200px] shrink-0">{data.title}</h3>
        <p class="text-secondary">{data.description}</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-8">
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-3">
          <h2 class="text-lg flex-grow font-medium">Business details</h2>
          {/* Badge */}
          <div class="px-2 bg-[#FCEEB5] border border-[#FBD992] text-[#B13600] text-sm font-medium rounded">Incomplete</div>
          <p class="font-medium text-[var(--accent-color)]">Edit</p>
        </div>
        {/* Content */}
        <div class="flex flex-col border p-3 gap-4 rounded-md">
          <DetailRow
            title="Business website"
            description="joegrooming.com" />
          <DetailRow
            title="Other information"
            description="Phone, Industry" />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-3">
          <h2 class="text-lg flex-grow font-medium">Public details</h2>
          <p class="font-medium text-[var(--accent-color)]">Edit</p>
        </div>
        {/* Content */}
        <div class="flex flex-col border p-3 gap-4 rounded-md">
          <DetailRow
            title="Customer support information"
            description={<>
              354 Oyster Point Blvd <br />
              South San Francisco, CA 94080<br />
              (124) 456-7829
            </>}
          />
          <DetailRow
            title="Descriptor shown on customer statements"
            description="Joegrooming" />
        </div>
      </div>

      {/* Management and ownership */}
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-3">
          <h2 class="text-lg flex-grow font-medium">Management and ownership</h2>
          <p class="font-medium text-[var(--accent-color)]">Add an owner</p>
        </div>
        {/* Jenny Rosen */}
        <div class="flex flex-col border p-3 gap-4 rounded-md">

          {/* Header */}
          <div class="flex justify-between sm:justify-normal gap-3">
            <div class="grow">
              <h3 class="font-medium">Jenny Rosen</h3>
              <p class="text-secondary">Account representative</p>
            </div>
            <div class="px-2 bg-[#FCEEB5] border border-[#FBD992] text-[#B13600] text-sm font-medium rounded self-start">Incomplete</div>
            <p class="font-medium text-[var(--accent-color)]">Edit</p>
          </div>

          {/* Personal details */}
          <DetailRow
            title="Personal details"
            description={<>
              jenny.rosen@example.com<br />
              Born on April 2, 1990 <br />
              354 Oyster Point Blvd<br/>
              South San Francisco, CA 94080<br/>
            </>}
          />

          {/* Other information */}
          <DetailRow
            title="Other information provided"
            description="Last 4 SSN, Phone"
          />
        </div>

        {/* Eric Liang */}
        <div class="flex flex-col border p-3 gap-4 rounded-md">

          {/* header */}
          <div class="flex justify-between sm:justify-normal gap-3">
            <div class="">
              <h3 class="font-medium">Eric Liang</h3>
              <p class="text-secondary">Account representative</p>
            </div>
            <div class="px-2 bg-gray-100 border border-gray-200 text-gray-700 text-sm font-medium rounded self-start flex gap-1.5 items-center">
              <Loader size={16} />
              Verifying
            </div>
            <p class="font-medium text-[var(--accent-color)]">Edit</p>
          </div>

          {/* Personal details */}
          <DetailRow
            title="Personal details"
            description={<>
              eric.liang@example.com<br />
              Born on Jan 2, 1990 <br />
              199 Water St.<br/>
              New York, NY 11101<br/>
            </>}
          />

          {/* Other information */}
          <DetailRow
            title="Other information provided"
            description="Last 4 SSN, Phone"
          />
        </div>
      </div>
    </div>
  )
}

export default Overview
