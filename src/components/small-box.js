import * as React from "react"

const SmallBox = ({ children }) => (
    <div className="min-w-smallBox w-44 min-h-44 h-44 rounded-xlg mr-5 shadow hover:shadow-xl bg-white dark:bg-primary overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
        {children}
        <div className="h-full w-full p-5">
            <div className="animate-pulse flex-col">
                    <div className="rounded-full bg-gray-200 dark:bg-greySecondary h-20 w-20 m-auto"></div>
                <div className="flex-1 space-y-2 py-8">
                    <div className="h-6 bg-gray-200 dark:bg-greySecondary rounded w-5/6 m-auto"></div>
                </div>
            </div>
        </div>
    </div>
)

export default SmallBox