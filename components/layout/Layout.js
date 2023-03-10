import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{`${title} - Shopping`}</title>
      </Head>
      <div className="flex min-h-screen flex-col justify-between ">
        <Header />
        <main className="container mt-10 m-auto px-1">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
