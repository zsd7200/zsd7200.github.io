import { ReactNode } from "react"

type ProjectType = {
  image?: string,
  screenshot?: string,
  title: string,
  short: string,
  description: string | ReactNode,
  github?: string,
  demo?: string,
}

const basePath = '';

export const projectData: Array<ProjectType> = [
  {
    image: basePath + "/proj/cardle.png",
    screenshot: basePath + "/proj/screenshot/cardle.png",
    title: "Cardle",
    short: 'card',
    description: <span>
      A daily game (like <a className="underline transition text-lime-600 hover:text-lime-700" href="https://www.nytimes.com/games/wordle/index.html">Wordle</a>) where the
      user has to guess a blurred Pokémon card. Card gets less blurry as user guesses. Gets card data from 
      the <a className="underline transition text-lime-600 hover:text-lime-700" href="https://pokemontcg.io/">Pokémon TCG API</a> and stores it in a MongoDB database for less calls
      to an external API. Also uses MongoDB to store previous days&apos; cards so users can play previous days.
      <br />
      Built using React/Next and Tailwind.
    </span>,
    github: "https://github.com/zsd7200/cardle",
    demo: "https://cardle.wtf/",
  },
  {
    image: basePath + "/proj/rcon.png",
    screenshot: basePath + "/proj/screenshot/rcon.png",
    title: "RCON Web GUI",
    short: 'rcon',
    description: <span>
      A modern interface for connecting to game servers using the <a className="underline transition text-lime-600 hover:text-lime-700" href="https://developer.valvesoftware.com/wiki/Source_RCON_Protocol">RCON Protocol</a>.
      Uses a SQLite database to store information for multiple servers, including encrypted login information, command history, and favorite commands.
      Able to be run as a Docker container using the included Dockerfile and docker-compose.yml files.
      <br />
      Built using React/Next and Tailwind.
    </span>,
    github: "https://github.com/zsd7200/rcon",
  },
  {
    image: basePath + "/proj/whosthat.png",
    screenshot: basePath + "/proj/screenshot/whosthat.png",
    title: "Who's that Pocket Monster?",
    short: 'who',
    description: <span>
      A <a className="underline transition text-lime-600 hover:text-lime-700" href="https://bulbapedia.bulbagarden.net/wiki/Who%27s_That_Pok%C3%A9mon%3F">&quot;Who&apos;s that Pokémon?&quot;</a> webgame. 
      Pokémon images taken from <a className="underline transition text-lime-600 hover:text-lime-700" href="https://bulbapedia.bulbagarden.net/wiki/Main_Page">Bulbapedia</a> using <a className="underline transition text-lime-600 hover:text-lime-700" href="https://pypi.org/project/ImageScraper/">ImageScraper</a> and
      manipulated using either Canvas (if on desktop) or CSS image filters (if on mobile). 
      <br/>
      Built using Node.js, JavaScript with Babel and Gulp, and HTML/CSS with Handlebars 
      and SASS.</span>,
    github: "https://github.com/zsd7200/whosthatpocketmonster",
    demo: "https://whosthatpocket.monster/",
  },
  {
    image: basePath + "/proj/bonesnode.png",
    screenshot: basePath + "/proj/screenshot/bonesnode.png",
    title: "BonesNode",
    short: 'bones',
    description: <span>
      A port of the game <a className="underline transition text-lime-600 hover:text-lime-700" href="https://en.wikipedia.org/wiki/Dice_10000">Dice 10000</a> to web.
      Uses <a className="underline transition text-lime-600 hover:text-lime-700" href="https://socket.io/">Socket.io</a> to create private online rooms to be able to play
      with others over the internet.
      <br />
      Built using Node.js, JavaScript with Babel and Gulp, and HTML/CSS with Handlebars and SASS.
      </span>,
    github: "https://github.com/zsd7200/bonesnode",
    demo: "https://bonesga.me/",
  },
  {
    image: basePath + "/proj/packrip.png",
    screenshot: basePath + "/proj/screenshot/packrip.png",
    title: "Pokémon TCG Booster Pack Simulator",
    short: 'packrip',
    description: <span>
      A Pokémon TCG pack opening simulator. Uses the <a className="underline transition text-lime-600 hover:text-lime-700" href="https://pokemontcg.io/">Pokémon TCG API</a> to
      get card/set data, and pull rate data from various sources in an attempt to be accurate to each set&apos;s own pull rates.
      <br />
      Built using Node.js, JavaScript with Babel and Gulp, and HTML/CSS with Handlebars and SASS.
      </span>,
    github: "https://github.com/zsd7200/packrip",
  },
  {
    image: basePath + "/proj/viewarr.png",
    screenshot: basePath + "/proj/screenshot/viewarr.png",
    title: "Viewarr",
    short: 'view',
    description: <span>
      Connects to <a className="underline transition text-lime-600 hover:text-lime-700" href="https://sonarr.tv/">Sonarr</a> and <a className="underline transition text-lime-600 hover:text-lime-700" href="https://radarr.video/">Radarr</a> APIs
      to display movies and shows currently available or requested on each service.
      <br />
      Built using React/Next and Tailwind. First project using Next.
    </span>,
    github: "https://github.com/zsd7200/viewarr",
  },
  {
    image: basePath + "/proj/dbz.png",
    screenshot: basePath + "/proj/screenshot/dbz.png",
    title: "Dragon Ball Audio VisualiZer",
    short: 'dbz',
    description: <span>
      A Dragon Ball Z-themed audio visualizer project.
      Audio frequencies are displayed using HTML5 canvas in conjunction with an audio context object.
      <br />
      Built using JavaScript, Bootstrap, and HTML/CSS.
      Team project with <a className="underline transition text-lime-600 hover:text-lime-700" href="https://github.com/tam8217">Tristan Marshall</a>.
    </span>,
    github: "https://github.com/zsd7200/IGME330-Project1",
  },
]