import * as React from "react"

const Header = () => {
  return (
      <header className="w-full flex items-center justify-between pb-4">
          <h1>John Rey</h1>
          <nav className="flex gap-4">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/posts">Posts</a>
              <a href="/contacts">Contact</a>
          </nav>
      </header>
  )
}

export default Header