import { Link } from "@tanstack/react-router"

export default function Header() {
  return (
    <header className="p-2 flex gap-2 bg-white white text-black justify-between">
      <nav className="flex flex-row">
        <div className="px-2 font-bold">
          <Link to="/" className="">
            HL{" "}
            <span
              className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Dry Tracker
            </span>
          </Link>
        </div>
      </nav>
    </header>
  )
}
