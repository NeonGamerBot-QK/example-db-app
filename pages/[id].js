import Head from 'next/head'
import Product from '../components/Product'
import prisma from '../lib/prisma'
export default function Home({ post }) {
  // const path = window.location.pathname
  // router.asPath
  return (
    <div>
      <Head>
        <title>PlanetScale Next.js Quickstart</title>
        <meta name="description" content="PlanetScale Quickstart for Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-10 mx-auto max-w-4xl">
        <h1 className="text-6xl font-bold mb-4 text-center">Post</h1>
        <p className="mb-20 text-xl text-center">
         List of all the posts
        </p>
       
        {post ? 
            <Product product={post} key={post.id} />
           : <Product product={{}} loading={true} />}
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
  try {

const path = context.params.id;
  const data = await prisma.posts.findMany({
    where: {
    id: parseInt(path)
  }
})
  //convert decimal value to string to pass through as json
  let posts = data
posts[0].date = posts[0].date.toString()
  return {
    props: { post: posts[0] },
  }
 } catch (e) {
    console.error(e)
    return {
        props: { posts: [] },
      }
  }
}
export async function getStaticPaths() {
    return {
      paths: [],
      fallback: true
    }
  }