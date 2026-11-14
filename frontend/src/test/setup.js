import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest' // adds matchers like expect(el).toBeInTheDocument()

// Unmount rendered components after every test so tests cannot affect each other.
afterEach(() => cleanup())