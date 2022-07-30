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
            <h2 class={sectionHeaderTitle}>BRIDGES</h2>
          </div>
          <div class={sectionBody}></div>
        </div>
      </div>
    </section>
  )
}
