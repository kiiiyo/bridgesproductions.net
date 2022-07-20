import logo from '@/assets/logo.svg'

export const Header = () => {
  return (
    <header>
      <nav class="w-ful">
        <div class="container mx-auto">
          <div class="flex  h-20 justify-between items-center">
            <a href="/">
              <span class="block w-48">
                <img class="w-full" src={logo} alt="BRIDGES PRODUCTIONS" />
              </span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
