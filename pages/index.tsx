import Head from 'next/head'
import { Header } from './component/Header'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'





export default function Home() {
  // redirect('/login');


  return (
    <>
      <Header title="Home - Alldone" />
      <div className="btn btn-danger">Hello</div>


    </>
  )
}


