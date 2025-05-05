import * as React from "react"

import Sidebar from "@/components/Sidebar"
import { getMetadata } from "@/utils/metadata"

export const metadata = getMetadata({
  path: "/",
  title: "Next.js App",
  description: "Next.js TypeScript SaaS Starter",
})

const Home: React.FC = () => {
  return (
    <main className="grid h-dvh place-content-center">
      <Sidebar />
    </main>
  )
}

export default Home
