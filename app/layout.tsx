import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Vital Sphere 360 | 2.0 ATA Walk-In Hard Shell Hyperbaric Oxygen Chamber | Oxygen Health Systems',
  description:
    'The Vital Sphere 360 2.0 ATA hard-shell walk-in hyperbaric oxygen chamber. ASME-certified, single- or dual-seat, optional modular cabin, dual all-in-one oxygen system. Request pricing and a demo.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0A2F6B',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background light`}>
      <body className="font-sans antialiased">
        {children}
        <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
        {process.env.NODE_ENV === 'production' && (
          <>
            <Analytics />
            {/* GTM: initialized inside requestIdleCallback so the container's
                tags execute only when the browser is genuinely idle, keeping
                them off the Total Blocking Time measurement window. */}
            <Script id="gtm-script" strategy="lazyOnload">
              {`(function(){
  function loadGTM(){
    var w=window,d=document,s='script',l='dataLayer',i='GTM-K289KFHV';
    w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
    var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
    j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
    f.parentNode.insertBefore(j,f);
  }
  if('requestIdleCallback' in window){
    requestIdleCallback(loadGTM,{timeout:4000});
  } else {
    setTimeout(loadGTM,3000);
  }
})();`}
            </Script>
            <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-K289KFHV"
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
                title="Google Tag Manager"
              />
            </noscript>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-K443MH7SVM"
              strategy="lazyOnload"
            />
            <Script id="ga-inline" strategy="lazyOnload">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-K443MH7SVM');`}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
