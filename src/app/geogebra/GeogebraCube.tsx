"use client";

import Script from "next/script";
import { useRef } from "react";

declare global {
  interface Window {
    GGBApplet: new (
      parameters: Record<string, unknown>,
      version: string
    ) => { inject: (id: string) => void };
  }
}

export default function GeogebraCube() {
  const injected = useRef(false);

  function handleLoad() {
    if (injected.current) return;
    injected.current = true;

    const applet = new window.GGBApplet(
      {
        appName: "3d",
        width: 900,
        height: 506,
        showToolBar: false,
        showAlgebraInput: false,
        showMenuBar: false,
        showResetIcon: true,
        enableRightClick: true,
        appletOnLoad: (api: { evalCommand: (cmd: string) => void }) => {
          api.evalCommand("Cube((0,0,0),(4,0,0),(0,4,0))");
        },
      },
      "6.0"
    );
    applet.inject("geogebra-cube-applet");
  }

  return (
    <>
      <Script
        src="https://www.geogebra.org/apps/deployggb.js"
        strategy="afterInteractive"
        onLoad={handleLoad}
      />
      <div id="geogebra-cube-applet" className="w-full h-full" />
    </>
  );
}
