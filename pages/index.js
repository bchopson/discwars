import Head from 'next/head'

function Home() {
  return (
    <>
      <Head>
        <title>Discwars</title>
        <link href="/static/marx.min.css" rel="stylesheet" />
      </Head>
      <div>Welcome</div>
      <p>Hello. this is some text</p>
      <table style={{ border: '1px solid black' }}>
        <thead>
          <tr>
            <th>1</th>
          </tr>
        </thead>
      </table>
    </>
  )
}

export default Home
