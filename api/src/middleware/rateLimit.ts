import { Request, Response, NextFunction } from 'express'

type Key = string

interface Bucket {
  tokens: number
  lastRefill: number
}

interface Options {
  windowMs: number
  max: number
  keyGenerator?: (req: Request) => Key
}

export const simpleRateLimit = (options: Options) => {
  const store = new Map<Key, Bucket>()
  const { windowMs, max, keyGenerator } = options

  return (req: Request, res: Response, next: NextFunction) => {
    const key = keyGenerator ? keyGenerator(req) : (req.ip || 'global')
    const now = Date.now()

    let bucket = store.get(key)
    if (!bucket) {
      bucket = { tokens: max, lastRefill: now }
      store.set(key, bucket)
    }

    const elapsed = now - bucket.lastRefill
    if (elapsed >= windowMs) {
      bucket.tokens = max
      bucket.lastRefill = now
    }

    if (bucket.tokens <= 0) {
      res.status(429).json({ error: 'Previše zahtjeva, pokušajte kasnije.' })
      return
    }

    bucket.tokens -= 1
    next()
  }
}


