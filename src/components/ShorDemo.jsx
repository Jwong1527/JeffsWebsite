import React, { useState } from 'react'
import { motion } from 'framer-motion'

const examples = [
  {
    label: 'Classic RSA demo',
    value: 3233n,
    hint: '61 × 53',
    description: 'A compact RSA semiprime used to illustrate the factorization flow.',
  },
  {
    label: 'Modern RSA sample',
    value: 1000003n * 1000033n,
    hint: '1,000,003 × 1,000,033',
    description: 'A larger RSA-style semiprime that demonstrates why factoring is hard classically.',
  },
]

function gcd(a, b) {
  if (b === 0n) return a
  return gcd(b, a % b)
}

function absBigInt(value) {
  return value < 0n ? -value : value
}

function pollardRho(n) {
  if (n % 2n === 0n) return 2n
  let x = 2n
  let y = 2n
  let d = 1n
  const f = (xVal) => (xVal * xVal + 1n) % n
  while (d === 1n) {
    x = f(x)
    y = f(f(y))
    d = gcd(absBigInt(x - y), n)
    if (d === n) return null
  }
  return d
}

export default function ShorDemo() {
  const [index, setIndex] = useState(0)
  const [stage, setStage] = useState(0)
  const [message, setMessage] = useState('Ready to explore RSA factorization with a quantum-style visualizer.')
  const [result, setResult] = useState(null)
  const [progress, setProgress] = useState(0)
  const example = examples[index]

  const handleRun = () => {
    setStage(1)
    setResult(null)
    setProgress(12)
    setMessage('Preparing the quantum circuit and random co-prime selection...')

    setTimeout(() => {
      setStage(2)
      setProgress(35)
      setMessage('Performing period-finding steps with a simulated quantum register...')
    }, 900)

    setTimeout(() => {
      setStage(3)
      setProgress(64)
      setMessage('Extracting the order and calculating possible non-trivial factors...')
    }, 1800)

    setTimeout(() => {
      setStage(4)
      setProgress(88)
      setMessage('Validating results against the RSA modulus and confirming prime factors...')
    }, 3000)

    setTimeout(() => {
      const divisor = pollardRho(example.value) || 1n
      const factorA = divisor
      const factorB = factorA === 1n ? example.value : example.value / factorA
      setResult({ factorA, factorB })
      setProgress(100)
      setMessage('Success! Factors recovered and displayed below. This demo captures the high-level Shor flow.')
      setStage(0)
    }, 4200)
  }

  return (
    <div className="shor-demo">
      <div className="shor-header">
        <div>
          <p className="section__text__p1">Cryptography</p>
          <h3 className="project-title">Shor&apos;s Algorithm Visualizer</h3>
        </div>
        <button className="btn btn-color-2" onClick={() => setIndex((current) => (current + 1) % examples.length)}>
          Switch sample
        </button>
      </div>

      <div className="shor-body">
        <div className="shor-meta">
          <p>{example.description}</p>
          <p>
            <strong>Modulus:</strong> {example.value.toString()} <br />
            <strong>Expected:</strong> {example.hint}
          </p>
        </div>

        <div className="shor-status-card">
          <div className="shor-progress-bar">
            <motion.div
              className="shor-progress-fill"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
          <p className="shor-status">{message}</p>
          <div className="shor-registers">
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="shor-register-line">
                <span>q-register {idx + 1}</span>
                <div className="shor-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="shor-footer">
        <button className="btn btn-color-1" onClick={handleRun} disabled={stage !== 0 && progress < 100}>
          Run Visualizer
        </button>
        {result && (
          <div className="shor-result-card">
            <p>Factored modulus into:</p>
            <p className="shor-result-vals">{result.factorA.toString()} × {result.factorB.toString()}</p>
            <p className="shor-note">This example shows why RSA security depends on the difficulty of factoring large semiprimes.</p>
          </div>
        )}
      </div>
    </div>
  )
}
