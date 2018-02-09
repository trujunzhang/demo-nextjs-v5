import Head from 'next/head'
export default ({ children }) => {
  return (
    <div>
      <Head>
        {/*
          NextJS will correctly import .scss files when running in development mode. For
          production usage, though, the SCSS will be compiled into a single asset that
          will be available at /_next/static/style.css

          Please see the link below for more information:
          https://github.com/zeit/next-plugins/tree/master/packages/next-sass#production-usage
        */}
        <link rel='stylesheet' href='/_next/static/style.css' />
      </Head>
      {children}
    </div>
  )
}
