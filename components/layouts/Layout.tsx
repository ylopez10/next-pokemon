import Head from "next/head"
import {Navbar} from "../ui"
import { FC } from "react"
import { useRouter } from "next/router"

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<LayoutProps>= ({children, title}) =>{

  const router = useRouter()

  return(
    <>
    <Head>
      <title>{title || 'Pokemon App'}</title>
      <meta name="author" content="Yelsyns Lopez" />
      <meta name="description" content="Información dobre el pokemon" />
      <meta property="og:title" content={`Información sobre ${title}`} />
      <meta property="og:description" content={`Esta es la página sobre ${title}`} />
      <meta property="og:image" content={`${origin}/images/banner.png`} />
    </Head>
    <Navbar />
    <main style={{
      padding: '0px 20px'
    }}>
      {children}
    </main>
    </>
  )
}