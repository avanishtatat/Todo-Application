/* eslint-disable */

import '@testing-library/jest-dom'
import {configure} from '@testing-library/react'
const crypto = require('crypto')

Object.defineProperty(global, 'crypto', {
  value: {
    randomUUID: () => crypto.randomUUID(),
  },
})

configure({testIdAttribute: 'testid'})
