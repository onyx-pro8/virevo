import { Link } from 'react-router-dom'
import { PRODUCT } from '../data/site'
import { PageShell } from '../components/PageShell'

export function ShopPage() {
  return (
    <PageShell title="Shop">
      <article className="shop-card">
        <img src={PRODUCT.image} alt={PRODUCT.name} />
        <div>
          <h2>{PRODUCT.name}</h2>
          <p>{PRODUCT.tagline} · {PRODUCT.bottle}</p>
          <p className="shop-card__price">${PRODUCT.price.toFixed(2)}</p>
          <Link className="btn btn--primary" to={`/product/${PRODUCT.id}`}>
            View product
          </Link>
        </div>
      </article>
    </PageShell>
  )
}
