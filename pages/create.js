import Head from 'next/head'
import Product from '../components/Product'
import { useRouter } from 'next/router'
import { useState } from 'react';
export default function Home() {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
  // const path = window.location.pathname
  const router = useRouter();
  // router.asPath
  const submitCB = () => {
    fetch("/api/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({ title, description, date: Date.now() })
    }).then(r=>r.json()).then((json) => {
      console.log(json)
        //  router.replace({
        //     pathname: '/products/'+json.id
        //  })
        alert("Created!!")
        setTitle("")
        setDescription("")
    })
  }
  return (
    <div>
      <Head>
        <title>Example DB app</title>
        <meta name="description" content="PlanetScale Quickstart for Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-10 mx-auto max-w-4xl">
        <h1 className="text-6xl font-bold mb-4 text-center">Create Post</h1>
        <p className="mb-20 text-xl text-center">
      Create a post :)
        </p>
       
        <div
      className=" rounded overflow-hidden shadow-lg text-center"
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Title</div>
        <p className="text-base">Title of your post</p>
        {/* <p className="text-gray-900 text-xl">do we</p> */}
        <input onChange={(e) => setTitle(e.target.value)} className={`${process.browser && localStorage.getItem("theme") === "dark" ? "dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white " : "text-gray-700 focus:bg-white"} appearance-none block w-full bg-gray-200  border rounded py-3 px-4 mb-3 leading-tight focus:outline-none `} aria-title="Title of post" value={title} placeholder='New Entry of info..' maxLength={30} />
      </div>
      <br />
      <div
      className=" rounded overflow-hidden shadow-lg text-center"
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Description</div>
        <p className="text-base">The post description </p>
        {/* <p className="text-gray-900 text-xl">do we</p> */}
        <textarea onChange={(e) => setDescription(e.target.value)} value={description}className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 ${process.browser &&  localStorage.getItem("theme") === "dark" ? "dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white " : ""} dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500`} aria-title="Description of thing" placeholder='Your topic sentance or article info stay here..' />
      </div>
      </div>
      
    </div>
    <div
      className=" rounded overflow-hidden shadow-lg text-center"
    >
      <div className="px-6 py-4">
        <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={submitCB}> Create</button>
      </div>
      </div>
      </main>
    </div>
  )
}