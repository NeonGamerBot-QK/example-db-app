import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Product({ product, loading }) {
  const { name, description, price, image, category, date } = product
const [periods, setPeriods] = useState(".")
useEffect(() => {
  const timeout = setTimeout(() => setPeriods(periods + "."), 1000)
  return () => clearTimeout(timeout)
})
  return ( !loading ? 
    <div
      className=" rounded overflow-hidden shadow-lg text-center product"
    >
      {/* <Image
        className="w-full"
        width={250}
        height={250}
        objectFit="cover"
        src={image}
        alt={name}
      /> */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-700 text-base">{description}</p>
        {/* <p className="text-gray-900 text-xl">do we</p> */}
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    Published: {new Date(parseInt(date)).toLocaleString('en-US', {
  // hour: 'numeric',
  // minute: 'numeric'
})}
        </span>
      </div>
    </div> :  <div
      className=" rounded overflow-hidden shadow-lg text-center"
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Loading.{periods.length > 4 ? "..." : periods}</div>
        <p className="text-gray-700 text-base">Should load data, waiting {periods.length} seconds </p>
        {/* <p className="text-gray-900 text-xl">do we</p> */}
      </div>
      {/* <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">

        </span>
      </div> */}
    </div>
  )
}
