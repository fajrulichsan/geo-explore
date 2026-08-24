"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import ShapeDropdown from "./ShapeDropdown";
import { SHAPES, type ShapeId } from "./shapes";

type GgbApi = {
  evalCommand: (cmd: string) => void;
  newConstruction: () => void;
};

declare global {
  interface Window {
    GGBApplet: new (
      parameters: Record<string, unknown>,
      version: string
    ) => { inject: (id: string) => void };
  }
}

function buildShape(api: GgbApi, shapeId: ShapeId) {
  api.newConstruction();
  const shape = SHAPES.find((s) => s.id === shapeId);
  shape?.commands.forEach((command) => api.evalCommand(command));
}

export default function GeogebraCube() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);
  const apiRef = useRef<GgbApi | null>(null);
  const [shapeId, setShapeId] = useState<ShapeId>("kubus");
  const shapeIdRef = useRef(shapeId);
  shapeIdRef.current = shapeId;

  function injectApplet() {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";
    const mount = document.createElement("div");
    mount.id = "geogebra-cube-applet";
    container.appendChild(mount);

    const applet = new window.GGBApplet(
      {
        appName: "3d",
        width: container.clientWidth,
        height: container.clientHeight,
        showToolBar: false,
        showAlgebraInput: false,
        showMenuBar: false,
        showResetIcon: true,
        enableRightClick: true,
        perspective: "T",
        language: "en",
        appletOnLoad: (api: GgbApi) => {
          apiRef.current = api;
          buildShape(api, shapeIdRef.current);
        },
      },
      "6.0"
    );
    applet.inject("geogebra-cube-applet");
  }

  function handleScriptLoad() {
    scriptLoaded.current = true;
    injectApplet();
  }

  function handleSelectShape(id: ShapeId) {
    setShapeId(id);
    if (apiRef.current) buildShape(apiRef.current, id);
  }

  useEffect(() => {
    function handleResize() {
      if (scriptLoaded.current) injectApplet();
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full h-full">
      <Script
        src="https://www.geogebra.org/apps/deployggb.js"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />
      <ShapeDropdown selected={shapeId} onSelect={handleSelectShape} />
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
}
