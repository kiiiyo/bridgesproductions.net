import logo from '../../assets/logo.svg'
export const Header = () => {
  return (
    <header>
      <nav class="fixed z-30 w-ful">
        <div class="container px-4 mx-auto md:px-6">
          <div class="flex justify-between items-center pt-4 pb-2">
            <a class="flex justify-between items-center text-white">
              <span class="text-xl font-bold leading-none md:text-2xl">
                <img
                  class="w-[6rem] h-30 lg:w-48 fill-white"
                  src={logo}
                  alt="Solid logo"
                />
              </span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
