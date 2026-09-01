import { SITE } from '../data/site'

export function SubHeader() {
  return (
    <div className="subheader-soc">
      <div className="container">
        <div className="subheader-soc_cont">
          <a className="email__line" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          <span className="subheader-soc_hours">{SITE.hours}</span>
        </div>
      </div>
    </div>
  )
}
