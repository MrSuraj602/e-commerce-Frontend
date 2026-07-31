import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Box, Grid, LinearProgress, Rating } from '@mui/material';
import ProductReviewCard from './ProductReviewCard';
import { mens_kurta } from '../../../data/mens_kurta';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { id: 'white', name: 'White', classes: 'bg-white checked:outline-gray-400' },
    { id: 'gray', name: 'Gray', classes: 'bg-gray-200 checked:outline-gray-400' },
    { id: 'black', name: 'Black', classes: 'bg-gray-900 checked:outline-gray-900' },
  ],
  sizes: [

    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
 
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function getProgressColor(value) {
  if (value >= 80) return '#16A34A' // green
  if (value >= 50) return '#F59E0B' // amber
  if (value >= 30) return '#F97316' // orange
  return '#EF4444' // red
}

export default function ProductDetails() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const firstInStock = product.sizes.find((s) => s.inStock)
  const [selectedSize, setSelectedSize] = useState(firstInStock ? firstInStock.name : product.sizes[0].name)
  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 px-4 pt-10">
          {/* Image gallery (left) */}
          <div className="flex flex-col items-start">
              <div className="w-full overflow-hidden rounded-lg bg-gray-50">
                <img
                  alt={product.images[selectedImageIndex].alt}
                  src={product.images[selectedImageIndex].src}
                  className="w-full h-[560px] object-contain p-12"
                />
            </div>
              <div className="mt-4 flex gap-3">
                {product.images.map((item, i) => (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => setSelectedImageIndex(i)}
                    className={
                      'overflow-hidden rounded-md border bg-white p-1 ' +
                      (i === selectedImageIndex
                        ? 'ring-2 ring-indigo-600'
                        : 'hover:ring-2 hover:ring-indigo-300') +
                      ' cursor-pointer'
                    }
                  >
                    <img alt={item.alt} src={item.src} className="h-16 w-24 object-cover" />
                  </button>
                ))}
            </div>
          </div>

          {/* Product info (right) */}
          <div className="mx-auto w-full max-w-2xl py-6">
            <h1 className="text-2xl font-bold tracking-tight text-gray-700 sm:text-3xl">Brand of Product</h1>
            <h1 className="text-lg font-semibold opacity-60 tracking-tight text-gray-600 sm:text-2xl">{product.name}</h1>

            <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-700 mt-6">
              <p className="font-semibold">199</p>
              <p className="opacity-50 line-through">211</p>
              <p className="text-green-600 font-semibold">25%</p>
            </div>

            <div className="mt-4 flex items-center space-x-3">
             < Rating name="read-only" value={3.5} readOnly />
             <p className="opacity=50 text-sm">45453 Ratings</p>
             <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500 text-sm"> 3432 Reviews</p>
            </div>

            <form className="mt-8">
            

              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                </div>

                <fieldset aria-label="Choose a size" className="mt-4">
                  <div className="grid grid-cols-4 gap-4">
                    {product.sizes.map((size) => (
                      <label
                        key={size.name}
                        className={classNames(
                          'relative flex h-12 cursor-pointer items-center justify-center rounded-md border bg-white text-sm font-medium transition',
                          size.inStock
                            ? 'border-gray-300 text-gray-900 hover:border-indigo-300 hover:bg-indigo-50'
                            : 'border-gray-200 bg-gray-50 text-gray-400'
                        )}
                      >
                        <input
                          name="size"
                          type="radio"
                          value={size.name}
                          checked={selectedSize === size.name}
                          onChange={() => setSelectedSize(size.name)}
                          disabled={!size.inStock}
                          className="peer sr-only"
                        />
                        <span className={classNames('uppercase peer-checked:bg-indigo-600 peer-checked:text-white peer-checked:border-indigo-600 px-2')}>{size.name}</span>
                        {!size.inStock && (
                          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="10" y1="90" x2="90" y2="10" stroke="#E5E7EB" strokeWidth="6" />
                          </svg>
                        )}
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-4 text-lg font-medium text-white hover:from-indigo-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to Cart
              </button>
            </form>

            <div className="mt-8">
              <p className="text-base text-gray-900">{product.description}</p>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
              <ul role="list" className="mt-4 list-disc space-y-2 pl-4 text-sm text-gray-600">
                {product.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>
              <p className="mt-4 text-sm text-gray-600">{product.details}</p>
            </div>
          </div>
        </section>
{/* this is for rating and reviews section */}
      <section> 
        <h1 className="font-semibold text-lg pb-4">Recent Review & Rating</h1>
        <div className="border p-5">
          <Grid container spacing={7}>
            <Grid item xs={7}>
              <div className="space-y-5">
                {[1,1,1].map((item) => (
                  <ProductReviewCard />
                ))}
              </div>
            </Grid>

            <Grid item xs={5}>
              <h1 className="text-xl-font-semibold pb-1">Product Rating</h1>

              <div className="flex items-center space-x-3">
                <Rating value={4.5} readOnly precision={0.5}></Rating>
                <p className="opacity-60 text-sm text-gray-600">54890 Ratings</p>
              </div>

              <Box className="mt-5 flex flex-col gap-3">
                {[
                  { label: 'Excellent', value: 90 },
                  { label: 'Very Good', value: 60 },
                  { label: 'Good', value: 40 },
                  { label: 'Average', value: 30 },
                  { label: 'Poor', value: 15 },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-4">
                    <div className="w-28 text-lg font-semibold">{row.label}</div>
                    <div className="flex-1">
                      <LinearProgress
                        variant="determinate"
                        value={row.value}
                        sx={{
                          backgroundColor: '#E5E7EB',
                          borderRadius: 4,
                          height: 8,
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: getProgressColor(row.value),
                            borderRadius: 4,
                          },
                        }}
                      />
                    </div>
                  </div>
                ))}
              </Box>
            </Grid>

          </Grid>
        </div>
      </section>

      {/* similar product section */}
      <section className="ml-8 pt-10">
        <h1 className="py-5 text-xl font-semibold">Similar Products</h1>
                <div className="flex flex-wrap justify-center  space-y-5">
                  {mens_kurta.map((item) => <HomeSectionCard product={item} />)}
                </div>
      
      </section>
       
      </div>
    </div>
  )
}
