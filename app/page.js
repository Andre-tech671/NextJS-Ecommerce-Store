"use client"

import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('/api/products')
        if (!res.ok) {
          throw new Error('Failed to fetch products')
        }
        const data = await res.json()
        setProducts(data)
      } catch (err) {
        console.error('Error fetching products:', err)
        setError('Failed to load products. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return (
      <main className='p-4 flex flex-col'>
        <div className='max-w-[1000px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {[...Array(6)].map((_, i) => (
            <div key={i} className='animate-pulse bg-gray-200 h-64 rounded-lg'></div>
          ))}
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className='p-4 flex flex-col'>
        <div className='max-w-[1000px] w-full mx-auto text-center py-12'>
          <p className='text-red-500 text-lg'>{error}</p>
        </div>
      </main>
    )
  }

  return (
    <main className='p-4 flex flex-col'>
      <div className='max-w-[1000px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {products.map((product, productIndex) => {
          return (
            <ProductCard key={productIndex} product={product} />
          )
        })}
      </div>
    </main>
  )
}
