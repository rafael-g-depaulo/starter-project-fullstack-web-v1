// this file is only run when using jest from the monorepo root.
// when running the tests from the "packages/client" folder (this folder), it does nothing

import '@testing-library/jest-dom/extend-expect'

import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()
