// pages/index.js
import dynamic from "next/dynamic";
import Head from "next/head";
import Script from "next/script";

// Dynamically import ARScene component with no SSR
const ARScene = dynamic(() => import("../components/ARScene"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>AR.js in Next.js</title>
      </Head>
       

      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <Script
        src="https://aframe.io/releases/0.6.0/aframe.min.js"
        strategy="beforeInteractive"
      />
      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <Script
        src="https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js"
        strategy="beforeInteractive"
      />

      {/* Render ARScene component */}
      <ARScene />
    </>
  );
}
