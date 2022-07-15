export const Header = () => {
  return (
    <header>
      <nav className="fixed z-30 w-full bg-black shadow">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex justify-between items-center pt-4 pb-2">
            <a className="flex justify-between items-center text-white">
              <span className="text-xl font-bold leading-none md:text-2xl">
                BRIDGES PRODUCTIONS
              </span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
