import logo from '@/assets/logo.svg'

import {
  footerContainer,
  footerInner,
  footerLogoContainer,
  footerLogo,
  footerLogoImage,
  footerCopyrightContainer
} from './footer.component.style'

export const Footer = () => {
  return (
    <footer>
      <div class={footerContainer}>
        <div class={footerInner}>
          <div class="flex h-20 justify-center md:justify-between items-center">
            <div class={footerLogoContainer}>
              <a href="/">
                <span class={footerLogo}>
                  <img
                    class={footerLogoImage}
                    src={logo}
                    alt="BRIDGES PRODUCTIONS"
                  />
                </span>
              </a>
            </div>
            <small class={footerCopyrightContainer}>
              <span>&copy;</span>
              <span>2022</span>
              <a href="/">BRIDGES PRODUCTIONS</a>
              <span>All Rights Reserved.</span>
            </small>
          </div>
        </div>
      </div>
    </footer>
  )
}
