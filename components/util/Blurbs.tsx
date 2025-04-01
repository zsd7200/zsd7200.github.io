import { ReactNode } from "react";
import Image from "next/image";

export const blurbs: Array<ReactNode> = [
  <span key="blurb-1">Nice to meet you!</span>,
  <span key="blurb-2">This is just like <span className="italic text-[#98C767]">Minecraft</span>!</span>,
  <span key="blurb-3">How&apos;s your day going?</span>,
  <span key="blurb-4">My favorite Pokémon is <span className="text-pink-300 drop-shadow-[0px_0px_2px_rgba(0,0,0,0.1)]">Sylveon</span>, what&apos;s yours?</span>,
  <span key="blurb-5">Want me to take a look at your controller? <Image src="/controller.svg" alt="Gamecube Controller" width={30} height={21} className="inline-flex" /></span>,
]