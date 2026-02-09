'use client'

import * as React from 'react'

// Simple pass-through theme provider for non-Next.js apps.
// You can wire up a more advanced dark-mode solution here if needed.
export function ThemeProvider({ children }) {
  return <>{children}</>
}
