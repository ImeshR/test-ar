// pages/index.js
import dynamic from "next/dynamic";
import Head from "next/head";

const ARScene = dynamic(() => import("../components/ARScene"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>AR.js in Next.js</title>
      </Head>
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <script src="https://aframe.io/releases/0.6.0/aframe.min.js"></script>
            <script src="https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js"></script>
          `,
        }}
      />
      <ARScene />
    </>
  );
}
