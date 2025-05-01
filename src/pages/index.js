import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>AR.js in Next.js</title>
        <script src="https://aframe.io/releases/0.6.0/aframe.min.js"></script>
        <script src="https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js"></script>
      </Head>
      <div style={{ margin: 0, overflow: 'hidden' }}>
        <a-scene embedded arjs>
          <a-marker preset="hiro">
            <a-box position="-1 0.5 1" rotation="0 45 0" color="#4CC3D9"></a-box>
            <a-sphere position="0 1.25 -1" radius="1.25" color="#EF2D5E"></a-sphere>
            <a-cylinder position="1 0.75 1" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
            <a-plane position="0 0 0" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
          </a-marker>
          <a-entity camera></a-entity>
        </a-scene>
      </div>
    </>
  );
}
