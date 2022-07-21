import logo from '@/assets/logo.svg'
import {
  headerContainer,
  headerInner,
  headerLogo,
  headerLogoInner,
  headerLogoImage
} from './header.component.style'

export const Header = () => {
  return (
    <header>
      <nav class={headerContainer}>
        <div class={headerInner}>
          <div class={headerLogo}>
            <a href="/">
              <span class={headerLogoInner}>
                <img
                  class={headerLogoImage}
                  src={logo}
                  alt="BRIDGES PRODUCTIONS"
                />
              </span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
