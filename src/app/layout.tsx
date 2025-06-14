import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SpatialSDK Demo",
  description: "WebSpatial SDK demonstration app",
  manifest: `${__XR_ENV_BASE__}/manifest.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={process.env.XR_ENV === "avp" ? "is-spatial" : ""}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script id="sw-register" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                const basePath = document.documentElement.classList.contains('is-spatial') ? '/webspatial/avp' : '';
                navigator.serviceWorker.register(basePath + '/sw.js')
                  .then(function(registration) {
                    console.log('SW registered: ', registration);
                  })
                  .catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                  });
              });
            }
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
