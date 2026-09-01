export function ShippingSection() {
  return (
    <section className="shipping-section animate-on-scroll is-visible">
      <div className="container shipping-flex">
        <div className="shipping-box">
          <svg
            className="shipping-box__img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="none"
            role="img"
            aria-label="Fast Shipping"
          >
            <circle cx="32" cy="32" r="31" fill="none" stroke="#0047B3" strokeWidth="2" />
            <rect x="12" y="22" width="24" height="18" rx="2" fill="#0047B3" />
            <path d="M36 27h7l7 7v6a2 2 0 0 1-2 2H36V27z" fill="#00AEFF" />
            <circle cx="22" cy="42" r="4" fill="#030816" stroke="#E0F2FE" strokeWidth="1.5" />
            <circle cx="44" cy="42" r="4" fill="#030816" stroke="#E0F2FE" strokeWidth="1.5" />
          </svg>
          <div className="shipping-box__info">
            <div className="shipping-box__title">FAST SHIPPING FOR EVERY ORDER</div>
            <p className="shipping-box__text">
              We offer fast shipping for all orders of any size, 24/7. You will never wait long for
              your order!
            </p>
          </div>
        </div>

        <div className="shipping-box">
          <svg
            className="shipping-box__img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="none"
            role="img"
            aria-label="30-Day Money-Back Guarantee"
          >
            <circle cx="32" cy="32" r="31" fill="none" stroke="#0047B3" strokeWidth="2" />
            <circle cx="32" cy="32" r="23" fill="none" stroke="#0047B3" strokeWidth="2" />
            <text
              x="32"
              y="30"
              textAnchor="middle"
              fontFamily="Montserrat,Arial,sans-serif"
              fontSize="16"
              fontWeight="700"
              fill="#0047B3"
              dominantBaseline="central"
            >
              30
            </text>
            <text
              x="32"
              y="44"
              textAnchor="middle"
              fontFamily="Montserrat,Arial,sans-serif"
              fontSize="7"
              fontWeight="700"
              fill="#030816"
              letterSpacing="2"
            >
              DAYS
            </text>
          </svg>
          <div className="shipping-box__info">
            <div className="shipping-box__title">30-DAY MONEY-BACK GUARANTEE</div>
            <p className="shipping-box__text">
              We offer a 30-day money-back guarantee — so you can try Magnesium Complex with
              confidence.
            </p>
          </div>
        </div>

        <div className="shipping-box">
          <svg
            className="shipping-box__img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="none"
            role="img"
            aria-label="Tested for Quality"
          >
            <circle cx="32" cy="32" r="31" fill="none" stroke="#0047B3" strokeWidth="2" />
            <path
              d="M32 12l4.5 3 5.2-.6 2 5.2 4.5 3-.6 5.2 3 4.5-3 4.5.6 5.2-4.5 3-2 5.2-5.2-.6-4.5 3-4.5-3-5.2.6-2-5.2-4.5-3 .6-5.2-3-4.5 3-4.5-.6-5.2 4.5-3 2-5.2 5.2.6z"
              fill="#0047B3"
            />
            <path d="M24 32l5.5 5.5 11-11" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <div className="shipping-box__info">
            <div className="shipping-box__title">TESTED FOR QUALITY</div>
            <p className="shipping-box__text">
              Every product is held to high quality standards — lab tested, Non-GMO, and GMP-aligned.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
