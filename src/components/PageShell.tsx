import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  children?: ReactNode
}

export function PageShell({ title, children }: Props) {
  return (
    <section className="page-shell">
      <div className="container">
        <h1>{title}</h1>
        {children ?? (
          <p>
            This page is coming next. For now, explore the{' '}
            <Link to="/">home page</Link> or{' '}
            <Link to="/shop">shop</Link>.
          </p>
        )}
      </div>
    </section>
  )
}
