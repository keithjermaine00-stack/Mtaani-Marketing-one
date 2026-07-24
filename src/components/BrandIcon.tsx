import {
  siReact,
  siNodedotjs,
  siExpress,
  siSupabase,
  siTiktok,
  siInstagram,
  siX,
  siGooglesearchconsole,
  siGoogleads,
  siMeta,
  siBlender,
  siFlutter,
  siKotlin,
  siMailchimp,
  siGoogleanalytics,
  siLighthouse,
  siPagespeedinsights,
  siGoogle,
  siSemrush,
  type SimpleIcon,
} from 'simple-icons';

type BrandKey =
  | 'react'
  | 'nodedotjs'
  | 'express'
  | 'supabase'
  | 'tiktok'
  | 'instagram'
  | 'x'
  | 'googlesearchconsole'
  | 'googleads'
  | 'meta'
  | 'blender'
  | 'flutter'
  | 'kotlin'
  | 'mailchimp'
  | 'googleanalytics'
  | 'lighthouse'
  | 'pagespeedinsights'
  | 'google'
  | 'semrush'
  | 'photoshop'
  | 'illustrator'
  | 'canva'
  | 'premierepro'
  | 'aftereffects'
  | 'mpesa';

const simpleIconMap: Record<Exclude<BrandKey, 'photoshop' | 'illustrator' | 'canva' | 'premierepro' | 'aftereffects' | 'mpesa'>, SimpleIcon> = {
  react: siReact,
  nodedotjs: siNodedotjs,
  express: siExpress,
  supabase: siSupabase,
  tiktok: siTiktok,
  instagram: siInstagram,
  x: siX,
  googlesearchconsole: siGooglesearchconsole,
  googleads: siGoogleads,
  meta: siMeta,
  blender: siBlender,
  flutter: siFlutter,
  kotlin: siKotlin,
  mailchimp: siMailchimp,
  googleanalytics: siGoogleanalytics,
  lighthouse: siLighthouse,
  pagespeedinsights: siPagespeedinsights,
  google: siGoogle,
  semrush: siSemrush,
};

const customIcons: Record<'photoshop' | 'illustrator' | 'canva' | 'premierepro' | 'aftereffects' | 'mpesa', { hex: string; path: string }> = {
  photoshop: {
    hex: '#31A8FF',
    path: 'M9.13 8.6c.06-.4-.08-.4-.42-.4H6.7c-.34 0-.48 0-.42.4l.6 6.86c.06.4.2.4.54.4h1.2c.34 0 .48 0 .54-.4L9.13 8.6zm.6 8.6c.06.4-.08.4-.42.4H5.5c-.34 0-.48 0-.42-.4L5.9 6.4C5.96 6 6.1 6 6.44 6h3.06c.34 0 .48 0 .54.4L9.73 17.2zM19 8.6c.06-.4-.08-.4-.42-.4h-2.42c-.34 0-.48 0-.42.4l.6 6.86c.06.4.2.4.54.4h1.2c.34 0 .48 0 .54-.4L19 8.6zm.6 8.6c.06.4-.08.4-.42.4h-3.7c-.34 0-.48 0-.42-.4L15.8 6.4C15.86 6 16 6 16.34 6h3.06c.34 0 .48 0 .54.4L19.6 17.2zM24 12c0 6.6-5.4 12-12 12S0 18.6 0 12 5.4 0 12 0s12 5.4 12 12zm-1.2 0c0-5.96-4.84-10.8-10.8-10.8S1.2 6.04 1.2 12 6.04 22.8 12 22.8 22.8 17.96 22.8 12z',
  },
  illustrator: {
    hex: '#FF9A00',
    path: 'M4.5 15.3l-.6 2.1c-.06.2-.12.24-.36.24H2.4c-.24 0-.3-.06-.24-.36L5.1 6.06c.06-.24.12-.3.36-.3h1.86c.24 0 .3.06.36.3l3 11.16c.06.3 0 .36-.24.36H9.06c-.24 0-.3-.06-.36-.24l-.66-2.1H4.5zm2.4-1.92c-.3-1.2-.96-3.78-1.2-4.92h-.06c-.24 1.14-.78 3.42-1.14 4.92H6.9zm6.3-7.32c0-.78.54-1.26 1.26-1.26.72 0 1.26.48 1.26 1.26 0 .78-.54 1.26-1.26 1.26-.72 0-1.26-.48-1.26-1.26zm.18 3.42c0-.24.06-.3.3-.3h1.62c.24 0 .3.06.3.3v8.04c0 .24-.06.3-.3.3h-1.62c-.24 0-.3-.06-.3-.3V9.48zM24 12c0 6.6-5.4 12-12 12S0 18.6 0 12 5.4 0 12 0s12 5.4 12 12zm-1.2 0c0-5.96-4.84-10.8-10.8-10.8S1.2 6.04 1.2 12 6.04 22.8 12 22.8 22.8 17.96 22.8 12z',
  },
  canva: {
    hex: '#00C4CC',
    path: 'M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 21.6C6.6 21.6 2.4 17.4 2.4 12S6.6 2.4 12 2.4 21.6 6.6 21.6 12 17.4 21.6 12 21.6zm5.4-9.6c0 2.4-1.8 4.2-4.2 4.2-2.7 0-4.5-2.1-4.5-4.8 0-2.85 1.95-4.8 4.65-4.8 1.5 0 2.7.6 3.45 1.5l-1.2 1.05c-.45-.6-1.2-.9-2.1-.9-1.5 0-2.55 1.05-2.7 2.55.45-.6 1.35-1.05 2.4-1.05 2.1 0 3.6 1.35 3.6 3.3zm-1.8 0c0-1.05-.75-1.8-1.95-1.8-1.2 0-2.1.9-2.1 1.95 0 1.05.75 1.8 1.95 1.8 1.2 0 2.1-.9 2.1-1.95z',
  },
  premierepro: {
    hex: '#9999FF',
    path: 'M9.13 8.6c.06-.4-.08-.4-.42-.4H6.7c-.34 0-.48 0-.42.4l.6 6.86c.06.4.2.4.54.4h1.2c.34 0 .48 0 .54-.4L9.13 8.6zm.6 8.6c.06.4-.08.4-.42.4H5.5c-.34 0-.48 0-.42-.4L5.9 6.4C5.96 6 6.1 6 6.44 6h3.06c.34 0 .48 0 .54.4L9.73 17.2zM19 8.6c.06-.4-.08-.4-.42-.4h-2.42c-.34 0-.48 0-.42.4l.6 6.86c.06.4.2.4.54.4h1.2c.34 0 .48 0 .54-.4L19 8.6zm.6 8.6c.06.4-.08.4-.42.4h-3.7c-.34 0-.48 0-.42-.4L15.8 6.4C15.86 6 16 6 16.34 6h3.06c.34 0 .48 0 .54.4L19.6 17.2zM24 12c0 6.6-5.4 12-12 12S0 18.6 0 12 5.4 0 12 0s12 5.4 12 12zm-1.2 0c0-5.96-4.84-10.8-10.8-10.8S1.2 6.04 1.2 12 6.04 22.8 12 22.8 22.8 17.96 22.8 12z',
  },
  aftereffects: {
    hex: '#9999FF',
    path: 'M4.5 15.3l-.6 2.1c-.06.2-.12.24-.36.24H2.4c-.24 0-.3-.06-.24-.36L5.1 6.06c.06-.24.12-.3.36-.3h1.86c.24 0 .3.06.36.3l3 11.16c.06.3 0 .36-.24.36H9.06c-.24 0-.3-.06-.36-.24l-.66-2.1H4.5zm2.4-1.92c-.3-1.2-.96-3.78-1.2-4.92h-.06c-.24 1.14-.78 3.42-1.14 4.92H6.9zm6.3-7.32c0-.78.54-1.26 1.26-1.26.72 0 1.26.48 1.26 1.26 0 .78-.54 1.26-1.26 1.26-.72 0-1.26-.48-1.26-1.26zm.18 3.42c0-.24.06-.3.3-.3h1.62c.24 0 .3.06.3.3v8.04c0 .24-.06.3-.3.3h-1.62c-.24 0-.3-.06-.3-.3V9.48zM24 12c0 6.6-5.4 12-12 12S0 18.6 0 12 5.4 0 12 0s12 5.4 12 12zm-1.2 0c0-5.96-4.84-10.8-10.8-10.8S1.2 6.04 1.2 12 6.04 22.8 12 22.8 22.8 17.96 22.8 12z',
  },
  mpesa: {
    hex: '#41B549',
    path: 'M21.6 7.2c-.3-.6-.9-1-1.5-1.1L15 5.3l-1.4-3.2c-.3-.7-1-1.1-1.7-1.1s-1.4.4-1.7 1.1L8.8 5.3 3.7 6.1c-.6.1-1.2.5-1.5 1.1-.3.6-.3 1.3 0 1.9l2.5 4.3-2.5 4.3c-.3.6-.3 1.3 0 1.9.3.6.9 1 1.5 1.1l5.1.8 1.4 3.2c.3.7 1 1.1 1.7 1.1s1.4-.4 1.7-1.1l1.4-3.2 5.1-.8c.6-.1 1.2-.5 1.5-1.1.3-.6.3-1.3 0-1.9l-2.5-4.3 2.5-4.3c.3-.6.3-1.3 0-1.9zm-9.7 8.4c-2 0-3.6-1.6-3.6-3.6s1.6-3.6 3.6-3.6 3.6 1.6 3.6 3.6-1.6 3.6-3.6 3.6z',
  },
};

export type BrandIconSpec = {
  key: BrandKey;
  label: string;
};

export type ToolGroup = {
  title: string;
  icons: BrandIconSpec[];
};

export function BrandIcon({
  iconKey,
  size = 20,
  className = '',
  monochrome = false,
  monoColor = 'currentColor',
}: {
  iconKey: BrandKey;
  size?: number;
  className?: string;
  monochrome?: boolean;
  monoColor?: string;
}) {
  let hex: string;
  let path: string;

  if (iconKey in simpleIconMap) {
    const ic = simpleIconMap[iconKey as keyof typeof simpleIconMap];
    hex = '#' + ic.hex;
    path = ic.path;
  } else {
    const custom = customIcons[iconKey as keyof typeof customIcons];
    hex = custom.hex;
    path = custom.path;
  }

  const fill = monochrome ? monoColor : hex;

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill={fill}
      aria-label={iconKey}
    >
      <path d={path} />
    </svg>
  );
}
