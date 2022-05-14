import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '../components/Home'



function Home({ data }: any) {
  return (
    <div className="flex min-h-screen flex-col items-center py-2 2xl:max-w-7xl m-auto shadow-xl">
      <Head>
        <title>Employee DataBase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container data={data.data} />
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:1337/api/employees/1`, {
    method: 'GET',
    headers: {
      key: 'Permissions-Policy',
      value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
      'Authorization': 'Bearer ef4c203b168d801219327f4d5ced7c6138a97c491e7de9b2d401a409e029025cc93079fe8d5f661e231a904070e7133b91f60d584418d984b25d376c3da8511780b0b4408cd21449b8642c4e08a42d2a14457d10d6ffae9aefef4d7afb22e96354debf72fe1d25ec88c98832a4dda3b0e78dc5e5b9c3d4911a432a89b1373d52',
    },
  })

  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Home
