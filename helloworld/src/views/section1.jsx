import React from 'react'

export default function Section1() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-6xl font-extrabold text-gray-900 sm:text-center">
            Tailwind Dashboard
          </h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center max-w-md mx-auto">
            A simple dashboard built with Tailwind CSS
          </p>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Quick Links
                </h3>
                <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <a
                    href="/"
                    className="block rounded-md text-white bg-gray-800 px-3 py-2"
                  >
                    Home
                  </a>
                  <a
                    href="/about"
                    className="block rounded-md text-white bg-gray-800 px-3 py-2"
                  >
                    About
                  </a>
                  <a
                    href="/contact"
                    className="block rounded-md text-white bg-gray-800 px-3 py-2"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Recent Activity
                </h3>
                <ul className="mt-2 border-t border-b border-gray-200">
                  <li className="flex justify-between py-3">
                    <div className="flex items-center">
                      <svg
                        className="h-6 w-6 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 14a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <p className="ml-4 text-sm text-gray-600">
                        Uploaded a file to Google Drive
                      </p>
                    </div>
                    <span className="text-sm text-gray-500">12 hours ago</span>
                  </li>
                  <li className="flex justify-between py-3">
                    <div className="flex items-center">
                      <svg
                        className="h-6 w-6 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 14a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <p className="ml-4 text-sm text-gray-600">
                        Created a new project
                      </p>
                    </div>
                    <span className="text-sm text-gray-500">2 days ago</span>
                  </li>
                  <li className="flex justify-between py-3">
                    <div className="flex items-center">
                      <svg
                        className="h-6 w-6 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 14a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <p className="ml-4 text-sm text-gray-600">
                        Updated a project
                      </p>
                    </div>
                    <span className="text-sm text-gray-500">3 days ago</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
