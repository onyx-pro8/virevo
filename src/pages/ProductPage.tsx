import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { FormulaSection } from '../components/FormulaSection'
import { HowToUse } from '../components/HowToUse'
import { ShippingSection } from '../components/ShippingSection'
import { SupplementFacts } from '../components/SupplementFacts'
import { WhyChoose } from '../components/WhyChoose'
import { useCart } from '../context/CartContext'
import {
  CERTIFICATIONS,
  COMPARISON_ROWS,
  DOSING_NOTES,
  LABEL_CLAIMS,
  OTHER_INGREDIENTS_DETAILS,
  PRODUCT,
  PRODUCT_ACCORDIONS,
  PRODUCT_BUNDLES,
  PRODUCT_FAQ,
  VIP,
} from '../data/site'

export function ProductPage() {
  const { addItem } = useCart()
  const [activeImage, setActiveImage] = useState(0)
  const [bundleQty, setBundleQty] = useState(1)
  const [purchaseType, setPurchaseType] = useState<'onetime' | 'subscribe'>('onetime')
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const bundle = useMemo(
    () => PRODUCT_BUNDLES.find((item) => item.qty === bundleQty) ?? PRODUCT_BUNDLES[0],
    [bundleQty],
  )

  const unitPrice = bundle.price / bundle.qty

  return (
    <>
      <div className="breadcrumbs breadcrumbs-bar">
        <div className="container">
          <Link to="/">Home</Link>
          <span> / </span>
          <Link to="/shop">Shop</Link>
          <span> / </span>
          <span>{PRODUCT.name}</span>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="product-layout">
            <div className="product-gallery">
              <div className="product-gallery__main">
                <img src={PRODUCT.images[activeImage].src} alt={PRODUCT.images[activeImage].alt} />
              </div>
              <div className="product-gallery__thumbs">
                {PRODUCT.images.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    className={index === activeImage ? 'is-active' : ''}
                    onClick={() => setActiveImage(index)}
                  >
                    <img src={image.src} alt={image.label} />
                  </button>
                ))}
              </div>
            </div>

            <div className="product-buy">
              <p className="product-buy__brand">{PRODUCT.brand}</p>
              <h1 className="product-buy__title">
                {PRODUCT.name} <em>{PRODUCT.tagline}</em>
              </h1>
              <div className="product-buy__price">
                ${bundle.price.toFixed(2)}
                {PRODUCT.compareAtPrice && (
                  <s className="product-buy__compare">${PRODUCT.compareAtPrice.toFixed(2)}</s>
                )}
                <span>★ {PRODUCT.rating} · {PRODUCT.reviewCount} reviews</span>
              </div>

              <ul className="product-buy__highlights">
                <li><strong>8 forms</strong> — oxide, glycinate, malate, taurate, citrate, carbonate, aspartate, orotate</li>
                <li><strong>{PRODUCT.magnesiumPerServing}</strong> elemental magnesium per 2-capsule serving (238% DV)</li>
                <li><strong>{PRODUCT.bottle}</strong> · {PRODUCT.servings} servings · {PRODUCT.capsuleType}</li>
                <li><strong>{PRODUCT.gmoStatus}</strong> · Vegan · Formulated in {PRODUCT.region}</li>
              </ul>

              <p className="product-buy__desc">{PRODUCT.longDescription}</p>

              <div className="product-buy__claims">
                {LABEL_CLAIMS.map((claim) => (
                  <span key={claim}>{claim}</span>
                ))}
              </div>

              <div className="pu-toggle">
                <div className="pu-toggle__track">
                  <button
                    type="button"
                    className={`pu-toggle__option${purchaseType === 'onetime' ? ' pu-toggle__option--active' : ''}`}
                    onClick={() => setPurchaseType('onetime')}
                  >
                    One-time purchase
                  </button>
                  <button
                    type="button"
                    className={`pu-toggle__option${purchaseType === 'subscribe' ? ' pu-toggle__option--active' : ''}`}
                    onClick={() => setPurchaseType('subscribe')}
                  >
                    Subscribe & Save
                  </button>
                </div>
              </div>

              {purchaseType === 'subscribe' && (
                <div className="pu-toggle__disclaimer">
                  <p>
                    <strong>VIP Membership Terms:</strong> By joining, you will be charged $
                    {VIP.price.toFixed(2)} now and every {VIP.cycleDays} days until you cancel. Cancel
                    anytime via <Link to="/cancellation-request">Easy Cancel</Link>.
                  </p>
                </div>
              )}

              <div className="pu-qty-section">
                <div className="pu-qty-title">Pick Your Quantity</div>
                <div className="pu-qty-cards">
                  {PRODUCT_BUNDLES.map((item) => (
                    <button
                      key={item.qty}
                      type="button"
                      className={`pu-qty-card${bundleQty === item.qty ? ' pu-qty-card--selected' : ''}`}
                      onClick={() => setBundleQty(item.qty)}
                    >
                      {item.badge && (
                        <span
                          className={`pu-qty-card__badge${
                            item.badge === 'BEST VALUE'
                              ? ' pu-qty-card__badge--best-value'
                              : ' pu-qty-card__badge--popular'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                      <img className="pu-qty-card__image" src={PRODUCT.image} alt={item.label} />
                      <div className="pu-qty-card__name">{item.label}</div>
                      <div className="pu-qty-card__savings">
                        {item.save > 0 ? `You save $${item.save}` : `$${item.price.toFixed(2)}`}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="pu-add-to-cart"
                onClick={() => addItem(bundle.qty, unitPrice)}
              >
                ADD TO CART — ${bundle.price.toFixed(2)}
              </button>

              <div className="product-trust-row">
                {CERTIFICATIONS.map((cert) => (
                  <span key={cert.title}>{cert.title}</span>
                ))}
              </div>

              <div className="product-accordions">
                {PRODUCT_ACCORDIONS.map((item) => (
                  <details key={item.title}>
                    <summary>{item.title}</summary>
                    <div>
                      <p>{item.content}</p>
                    </div>
                  </details>
                ))}
                <details>
                  <summary>Privacy & Security</summary>
                  <div>
                    <p>
                      Your data is handled according to our{' '}
                      <Link to="/privacy-policy">Privacy Policy</Link>.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>

          <section className="product-detail-block">
            <h2>Dosing & Label Transparency</h2>
            <p className="product-detail-block__intro">
              The front label highlights 1,000 mg — the Supplement Facts panel confirms this is per{' '}
              <strong>2-capsule serving</strong>, delivering 238% of the FDA Daily Value (420 mg).
              Elemental magnesium is listed, not total compound weight.
            </p>
            <div className="dosing-notes">
              {DOSING_NOTES.map((note) => (
                <article className="dosing-notes__card" key={note.title}>
                  <h3>{note.title}</h3>
                  <p>{note.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="product-detail-block">
            <h2>Other Ingredients Explained</h2>
            <div className="ingredient-explainer">
              {OTHER_INGREDIENTS_DETAILS.map((item) => (
                <article key={item.name}>
                  <h3>{item.name}</h3>
                  <p>{item.role}</p>
                </article>
              ))}
            </div>
            <p className="product-detail-block__footnote">
              No added stimulants, caffeine, herbal blends, melatonin, B6, or zinc in the active
              formula — magnesium is the primary ingredient.
            </p>
          </section>
        </div>
      </section>

      <FormulaSection />
      <WhyChoose />
      <HowToUse />
      <SupplementFacts />

      <section className="page-content">
        <div className="container">
          <section className="comparison-section">
            <h3>Why Choose Virevo Magnesium Complex</h3>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Virevo / Toplux</th>
                  <th>Typical Single-Form</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row}>
                    <td>{row}</td>
                    <td className="yes">✓</td>
                    <td className="no">✕</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="faq-section">
            <h3>Frequently Asked Questions</h3>
            {PRODUCT_FAQ.map((item, index) => (
              <button
                key={item.q}
                type="button"
                className={`faq-item${openFaq === index ? ' is-open' : ''}`}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span>{item.q}</span>
                <em>{openFaq === index ? '−' : '+'}</em>
                {openFaq === index && <p>{item.a}</p>}
              </button>
            ))}
          </section>

          <p className="product-legal-note">
            <strong>Important:</strong> These statements have not been evaluated by the FDA. This
            product is not intended to diagnose, treat, cure, or prevent any disease. Consult your
            healthcare provider before starting any supplement — especially if you are pregnant,
            nursing, take medications, or have kidney disease. Verify the Supplement Facts on the
            bottle you receive before use.
          </p>
        </div>
      </section>
      <ShippingSection />
    </>
  )
}
