"use client"

import { Fragment, useState } from 'react'
import Link from 'next/link'

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
<nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 sticky top-0 z-10">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
  <Link href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/2560px-F1.svg.png" alt="logo" className='max-h-10 h-10'/></Link>
    <Link href="/" className="font-semibold text-xl tracking-tight">Home</Link>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className={"w-full block flex-grow lg:flex lg:items-center lg:w-auto" + (mobileMenuOpen ? "" : " hidden lg:visible")}>
    <div className="text-lg font-semibold lg:flex-grow">
    <Link href="/years" className="block mt-4 mr-4 lg:inline-block lg:mt-0 rounded px-2 text-teal-300 shadow-linkBefore hover:text-white hover:shadow-link transition-all">
        Years
      </Link>
      <Link href="/races" className="block mt-4 mr-4 lg:inline-block lg:mt-0 rounded px-2 text-teal-300 shadow-linkBefore hover:text-white hover:shadow-link transition-all">
        Races
      </Link>
      <Link href="/drivers" className="block mt-4 mr-4 lg:inline-block lg:mt-0 rounded px-2 text-teal-300 shadow-linkBefore hover:text-white hover:shadow-link transition-all">
        Drivers
      </Link>
      <Link href="/teams" className="block mt-4 mr-4 lg:inline-block lg:mt-0 rounded px-2 text-teal-300 shadow-linkBefore hover:text-white hover:shadow-link transition-all">
        Teams
      </Link>
    </div>
  </div>
</nav>
  )
}
