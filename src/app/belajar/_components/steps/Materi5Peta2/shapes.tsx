export function KubusSvg({ size, color }: { size: "kecil" | "besar"; color: string }) {
  const s = size === "kecil" ? 46 : 74;
  const o = size === "kecil" ? 16 : 24;
  const w = s + o + 14;
  const h = s + o + 14;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none">
      <path d={`M8 ${o + 8} L${8 + s} ${o + 8} L${8 + s} ${o + 8 + s} L8 ${o + 8 + s} Z`} fill={color} fillOpacity="0.28" stroke={color} strokeWidth="2" />
      <path d={`M8 ${o + 8} L${8 + o} 8 L${8 + o + s} 8 L${8 + s} ${o + 8} Z`} fill={color} fillOpacity="0.5" stroke={color} strokeWidth="2" />
      <path d={`M${8 + s} ${o + 8} L${8 + o + s} 8 L${8 + o + s} ${8 + s} L${8 + s} ${o + 8 + s} Z`} fill={color} fillOpacity="0.38" stroke={color} strokeWidth="2" />
    </svg>
  );
}

export function BalokSvg({ size, color }: { size: "kecil" | "besar"; color: string }) {
  const w0 = size === "kecil" ? 60 : 100;
  const h0 = size === "kecil" ? 38 : 58;
  const o = size === "kecil" ? 14 : 20;
  const w = w0 + o + 14;
  const h = h0 + o + 14;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none">
      <path d={`M8 ${o + 8} L${8 + w0} ${o + 8} L${8 + w0} ${o + 8 + h0} L8 ${o + 8 + h0} Z`} fill={color} fillOpacity="0.28" stroke={color} strokeWidth="2" />
      <path d={`M8 ${o + 8} L${8 + o} 8 L${8 + o + w0} 8 L${8 + w0} ${o + 8} Z`} fill={color} fillOpacity="0.5" stroke={color} strokeWidth="2" />
      <path d={`M${8 + w0} ${o + 8} L${8 + o + w0} 8 L${8 + o + w0} ${8 + h0} L${8 + w0} ${o + 8 + h0} Z`} fill={color} fillOpacity="0.38" stroke={color} strokeWidth="2" />
    </svg>
  );
}

export function PrismaSvg({ size, color }: { size: "kecil" | "besar"; color: string }) {
  const s = size === "kecil" ? 1 : 1.6;
  const w = 100 * s + 20;
  const h = 70 * s + 20;
  const alasKiri = 10;
  const alasKanan = 10 + 90 * s;
  const puncakDepan = 10 + 45 * s;
  const dy = 40 * s;
  const dxBelakang = 20 * s;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none">
      <path
        d={`M${alasKiri} ${10 + dy} L${alasKanan} ${10 + dy} L${puncakDepan} 10 Z`}
        fill={color}
        fillOpacity="0.3"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d={`M${alasKiri} ${10 + dy} L${alasKiri + dxBelakang} ${10 + dy - dxBelakang * 0.5} L${alasKanan + dxBelakang} ${10 + dy - dxBelakang * 0.5} L${alasKanan} ${10 + dy}`}
        fill={color}
        fillOpacity="0.16"
        stroke={color}
        strokeWidth="1.6"
      />
      <path
        d={`M${puncakDepan} 10 L${alasKiri + dxBelakang} ${10 + dy - dxBelakang * 0.5}`}
        stroke={color}
        strokeWidth="1.6"
        strokeDasharray="3 3"
      />
    </svg>
  );
}

export function LimasSvg({ size, color }: { size: "kecil" | "besar"; color: string }) {
  const s = size === "kecil" ? 1 : 1.6;
  const w = 96 * s + 24;
  const h = 90 * s + 20;
  const cx = w / 2;
  const puncakY = 8;
  const alasY = 10 + 60 * s;
  const halfW = 44 * s;
  const dip = 14 * s;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none">
      <path
        d={`M${cx} ${puncakY} L${cx + halfW} ${alasY - dip} L${cx} ${alasY} L${cx - halfW} ${alasY - dip} Z`}
        fill={color}
        fillOpacity="0.3"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d={`M${cx} ${puncakY} L${cx} ${alasY} M${cx} ${puncakY} L${cx - halfW} ${alasY - dip}`}
        stroke={color}
        strokeWidth="1.4"
        strokeDasharray="3 3"
      />
    </svg>
  );
}
