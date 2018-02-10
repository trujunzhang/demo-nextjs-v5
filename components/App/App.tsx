import Head from 'next/head';
import Link from 'next/link';

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
        <link rel="stylesheet" href="/_next/static/style.css" />
      </Head>
      <Link href={'/'}><a>Home</a></Link>&nbsp;
        <Link as={`/people`} href={`/ping`}>
        <a>People</a>
      </Link>&nbsp;
        <Link as={`/people/developers`} href={`/ping?slug=developers`}>
        <a>Developers</a>
      </Link>&nbsp;
        <Link as={`/people/developers/rob`} href={`/ping?slug=developers&name=rob`}>
        <a>Rob</a>
      </Link>&nbsp;
      {children}
    </div>
  );
};
