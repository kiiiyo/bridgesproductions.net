import Typed from 'typed.js'

import {
  sectionContainer,
  sectionInner,
  sectionHeader,
  sectionHeaderTitle,
  sectionHeaderSubTitle,
  sectionBody
} from './hero-section.component.style'

export const HeroSection = () => {
  return (
    <section>
      <div class={sectionContainer}>
        <div class={sectionInner}>
          <div class={sectionHeader}>
            <h3 class={sectionHeaderSubTitle}>OPERATION</h3>
            <h2 class={sectionHeaderTitle}>
              <span
                ref={(element) =>
                  new Typed(element, {
                    strings: ['BRIDGES', 'カケハシ', '架け橋'],
                    loop: true,
                    typeSpeed: 300,
                    startDelay: 800,
                    backSpeed: 200
                  })
                }
              ></span>
            </h2>
          </div>
          <div class={sectionBody}></div>
        </div>
      </div>
    </section>
  )
}
