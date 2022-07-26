import {
  sectionContainer,
  sectionInner,
  sectionHeader,
  sectionHeaderTitle,
  sectionBody,
  listContainer,
  listItem,
  listItemTitle,
  listItemDescription
} from './about-section.component.style'

export const AboutSection = () => {
  return (
    <section>
      <div class={sectionContainer}>
        <div class={sectionInner}>
          <div class={sectionHeader}>
            <h2 class={sectionHeaderTitle}>About</h2>
          </div>
          <div class={sectionBody}>
            <div class={listContainer}>
              <div class={listItem}>
                <div class={listItemTitle}>名称</div>
                <div class={listItemDescription}>BRIDGES PRODUCTIONS</div>
              </div>
              <div class={listItem}>
                <div class={listItemTitle}>設立</div>
                <div class={listItemDescription}>2022.05.21</div>
              </div>
              <div class={listItem}>
                <div class={listItemTitle}>事業形態</div>
                <div class={listItemDescription}>個人事業主</div>
              </div>
              <div class={listItem}>
                <div class={listItemTitle}>代表</div>
                <div class={listItemDescription}>清田 隆志</div>
              </div>
              <div class={listItem}>
                <div class={listItemTitle}>事業内容</div>
                <div class={listItemDescription}>
                  <ul>
                    <li>デジタルプロダクトのプロジェクト推進支援</li>
                    <li>デジタルプロダクトの構築・設計・運営支援</li>
                    <li>ユーザーエクスペリエンスデザイン</li>
                    <li>ユーザーインタフェースデザイン</li>
                    <li>各種コンサルティング業務</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
