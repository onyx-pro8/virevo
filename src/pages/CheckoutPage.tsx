import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { SITE } from '../data/site'
import { PageShell } from '../components/PageShell'

export function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart()

  return (
    <PageShell title="Checkout">
      {items.length === 0 ? (
        <p>
          Nothing to check out. <Link to="/shop">Shop now</Link>
        </p>
      ) : (
        <>
          <p>
            Order total: <strong>${subtotal.toFixed(2)}</strong>
          </p>
          <p>
            Full payment checkout will be connected next. For order help, email{' '}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
          <button type="button" className="btn btn--primary" onClick={clearCart}>
            Clear cart (demo)
          </button>
        </>
      )}
    </PageShell>
  )
}
