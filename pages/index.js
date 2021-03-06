import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Shyndard.eu</title>
        <meta name="description" content="Shyndard.eu informations website" />
        <meta name="keywords" content="Shyndard, Information, Shyndard.eu, Github, Twitter"/>
        <meta name="author" content="Shyndard"/>
        <link rel="icon" href="/favicon.ico" />s
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://shyndard.eu">Shyndard.eu</a>
        </h1>

        <p className="description">
          You can find me on <a href="https://github.com/Shyndard">Github 🐙</a> and <a href="https://twitter.com/Shyndard">Twitter 🐦</a>
        </p>

      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
