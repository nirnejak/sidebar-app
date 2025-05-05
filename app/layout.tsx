import * as React from "react"

import type { Viewport } from "next"
import { ViewTransitions } from "next-view-transitions"

import { Instrument_Sans } from "next/font/google"
import localFont from "next/font/local"

import classNames from "@/utils/classNames"
import { renderSchemaTags } from "@/utils/schema"

import "../styles/main.css"

const sansFont = Instrument_Sans({
  variable: "--sans-font",
  subsets: ["latin"],
  display: "swap",
})

const monoFont = localFont({
  variable: "--mono-font",
  src: [
    {
      path: "../fonts/JetBrainsMono-Regular.ttf",
      weight: "regular",
      style: "normal",
    },
  ],
})

export const viewport: Viewport = {
  themeColor: "#000000",
}

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={classNames(sansFont.variable, monoFont.variable)}
      >
        <head>{renderSchemaTags()}</head>

        <body className={"overflow-x-hidden bg-background font-sans"}>
          {children}
        </body>
      </html>
    </ViewTransitions>
  )
}

export default RootLayout
