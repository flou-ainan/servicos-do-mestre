import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Dosis:wght@200;300;400;500;600;700&family=Mohave&family=Playfair+Display:wght@400;500;700&family=Quicksand:wght@300;400;500&family=Rubik:wght@300;400&family=Young+Serif&display=swap" rel="stylesheet" />
      <meta name="google-site-verification" content="oR1WRvSgY82ve5JJq7jY4NfLwXQq9f0frPMs7IPc5aw" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
