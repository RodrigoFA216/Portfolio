import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='es'>
        <Head />
            <title>Rodrigo's Portfolio</title>
            <meta name='description' content="Rodrigo Flores's Portfolio website"></meta>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"></link>
        <body>
            <Main />
            <NextScript />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
        </body>
        </Html>
    )
}
