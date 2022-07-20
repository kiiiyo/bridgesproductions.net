import logo from '@/assets/logo.svg'

export const Footer = () => {
  return (
    <footer>
      <div class="w-ful">
        <div class="container mx-auto">
          <div class="flex h-20 justify-center md:justify-between items-center">
            <div class="hidden md:block">
              <a href="/">
                <span class="block w-32">
                  <img class="w-full" src={logo} alt="BRIDGES PRODUCTIONS" />
                </span>
              </a>
            </div>
            <small class="block text-center md:text-left text-white">
              <span>&copy;</span>
              <span id="currentYear">2022</span>{' '}
              <a href="/">BRIDGES PRODUCTIONS</a>{' '}
              <span>All Rights Reserved.</span>
            </small>
          </div>
        </div>
      </div>
    </footer>
  )
}
