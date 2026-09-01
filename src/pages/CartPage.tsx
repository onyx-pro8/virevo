import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { PageShell } from '../components/PageShell'

export function CartPage() {
  const { items, updateQty, removeItem, subtotal } = useCart()

  return (
    <PageShell title="Cart">
      {items.length === 0 ? (
        <p>
          Your cart is empty. <Link to="/shop">Continue shopping</Link>
        </p>
      ) : (
        <>
          <ul className="cart-page-list">
            {items.map((item) => (
              <li key={item.id}>
                <strong>{item.name}</strong> × {item.qty} — ${(item.price * item.qty).toFixed(2)}
                <div>
                  <button type="button" onClick={() => updateQty(item.id, item.qty - 1)}>
                    −
                  </button>
                  <button type="button" onClick={() => updateQty(item.id, item.qty + 1)}>
                    +
                  </button>
                  <button type="button" onClick={() => removeItem(item.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p>
            <strong>Subtotal:</strong> ${subtotal.toFixed(2)}
          </p>
          <Link className="btn btn--primary" to="/checkout">
            Checkout
          </Link>
        </>
      )}
    </PageShell>
  )
}
