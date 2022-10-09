import Head from 'next/head'
import Product from '../components/Product'
import prisma from '../lib/prisma'
import { useRouter } from 'next/router'
export default function Home({ posts, theme }) {
  // const path = window.location.pathname
  const router = useRouter();
  // router.asPath
  return (
    <>
    <div>
      <Head>
        <title>PlanetScale Next.js Quickstart</title>
        <meta name="description" content="PlanetScale Quickstart for Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-10 mx-auto max-w-4xl">
        <h1 className="text-6xl font-bold mb-4 text-center">Posts</h1>
        <p className="mb-20 text-xl text-center">
         List of all the posts
        </p>
       
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center  gap-4">
        {posts.map((product) => (
            <a href={`/${product.id}`} key={product.id}><Product product={product}  /></a>
          ))}
        </div>
        <br />
      </main>
    </div>
    </>
  )
}

export async function getStaticProps(context) {
  const data = await prisma.posts.findMany({ 
    where: {}
   })

  //convert decimal value to string to pass through as yarn start

  const posts = data.map((product) => ({
    ...product,
    date: product.date.toString(),
  }))
  return {
    props: { posts },
  }
}