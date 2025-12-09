import "../styles/globals.css";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head"; // Import Head from next/head
import { AppProvider } from "../lib/context";
import dynamic from "next/dynamic";

// Chargement dynamique (ne sera pas inclus dans le bundle initial)
const HeavyComponent = dynamic(() => import("../components/Heavy"), {
  ssr: false, // ❌ désactive le rendu côté serveur (optionnel)
  loading: () => <p>Chargement...</p>, // affiché pendant le chargement
});
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="icon" href="/weblogo.png" />
        <title>Yassine Charrada - Full Stack Developer</title>{" "}
        {/* Preload LCP image for faster rendering */}
        <link
          rel="preload"
          as="image"
          href="/Photo.webp"
          fetchPriority="high"
        />
        <meta
          name="description"
          content="Welcome to my world, I'm Yassine Charrada a Full Stack Developer"
        ></meta>
        <meta
          name="keywords"
          content="yassine charrada, full stack developer, yassine charrada portfolio, web developer, software engineer, yassine charrada website, yassine charrada cv, yassine charrada resume, yassine charrada projects, yassine charrada skills, yassine charrada experience, yassine charrada education, yassine charrada contact"
        ></meta>
        {/* Set your custom title here */}
      </Head>
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
          <HeavyComponent />
        </Layout>
      </AppProvider>
    </>
  );
}

export default MyApp;
