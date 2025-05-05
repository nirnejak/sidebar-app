"use client"
import * as React from "react"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

import { AgentIcon, CreditIcon } from "./Icons"

import ProfileImage from "@/assets/profile.png"
import classNames from "@/utils/classNames"

interface Props {}

const LINKS = [
  {
    label: "Agent Store",
    href: "/",
    icon: <AgentIcon />,
  },
  {
    label: "Credits and Billing",
    href: "/",
    icon: <CreditIcon />,
  },
]

const Sidebar: React.FC<Props> = () => {
  const [active, setActive] = React.useState(0)

  return (
    <aside className="font-instrument-sans">
      <div className="flex items-center gap-2 mb-8">
        <div
          className="size-9 rounded-lg"
          style={{
            background:
              "linear-gradient(137.77deg, #212121 2.19%, #989898 54.14%, #212121 97.81%)",
          }}
        >
          <Image
            src={ProfileImage}
            alt="Markus"
            width={100}
            height={100}
            className="rounded-lg"
            style={{
              border: "1px solid",
            }}
          />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-sm font-medium tracking-tight leading-3.5 text-white mb-2">
            Markus
          </span>
          <span className="text-xs tracking-tight leading-3 text-secondary">
            markusklaus22@gmail.com
          </span>
        </div>
        <div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="#939393"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <nav className="relative flex flex-col gap-2 font-medium tracking-tight text-white text-sm leading-3.5">
        <motion.div
          transition={{ type: "spring", bounce: 0 }}
          animate={{
            top: active * 48,
          }}
          className="absolute h-10 w-full -z-10 p-px rounded-r-[5px]"
          style={{
            backgroundImage:
              "linear-gradient(269.96deg, #5A5A5A -6.43%, #111111 5.32%, #1D1D1D 51.76%, #939393 85.93%, #1C1C1C 103.01%)",
          }}
        >
          <div
            style={{
              background: `radial-gradient(60.22% 201.48% at -8.44% 63.16%, #202020 0%, #141414 79.33%)`,
            }}
            className="size-full rounded-r-sm border-l-3 border-l-white relative"
          >
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(14.89% 79.76% at 100% 50%, rgba(255, 255, 255, 0.13) 0%, rgba(109, 109, 109, 0.055625) 57.21%, rgba(0, 0, 0, 0) 100%)`,
              }}
            ></div>
          </div>
        </motion.div>

        {LINKS.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setActive(index)}
            className={classNames(
              "flex items-center gap-2 py-3 pl-4 w-[225px] transition-colors",
              active === index ? "text-white" : "text-sidebar-link"
            )}
          >
            {link.icon}
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
