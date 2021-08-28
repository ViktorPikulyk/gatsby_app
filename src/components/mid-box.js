import * as React from "react"

const MidBox = ({ children }) => (
  <div className="min-w-midBox w-80 min-h-96 h-96 rounded-xlg mr-5 shadow hover:shadow-xl bg-white dark:bg-primary overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
    {children}
    <div className="h-full w-full p-7">
      <div className="animate-pulse flex-col">
        <div className="flex space-x-4">
          <div className="rounded-full bg-gray-200 dark:bg-greySecondary h-12 w-12"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-10 bg-gray-200 dark:bg-greySecondary rounded w-full"></div>
          </div>
        </div>
        <div className="flex-1 space-y-2 py-8">
          <div className="h-4 bg-gray-200 dark:bg-greySecondary rounded"></div>
          <div className="h-4 bg-gray-200 dark:bg-greySecondary rounded w-5/6"></div>
        </div>
      </div>
    </div>
  </div>
)

export default MidBox
