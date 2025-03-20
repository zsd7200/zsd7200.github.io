import { ReactNode } from "react"

type ProjectType = {
  image?: string,
  screenshot?: string,
  title: string,
  description: string | ReactNode,
  github?: string,
  demo?: string,
}

export const projects: Array<ProjectType> = [
  {
    image: "proj/cardle.png",
    screenshot: "proj/screenshot/cardle.png",
    title: "Cardle",
    description: <span>
      A daily game (like <a href="https://www.nytimes.com/games/wordle/index.html">Wordle</a>) where the
      user has to guess a blurred Pokémon card. Card gets less blurry as user guesses. Gets card data from the
      <a href="https://pokemontcg.io/">Pokémon TCG API</a> and stores it in a MongoDB database for less calls
      to an external API. Also uses MongoDB to store previous days' cards so users can play previous days.
      Built using React/Next and Tailwind.
    </span>,
    github: "https://github.com/zsd7200/cardle",
    demo: "https://cardle.wtf/",
  },
  {
    image: "proj/rcon.png",
    screenshot: "proj/screenshot/rcon.png",
    title: "RCON Web GUI",
    description: <span>
      A modern interface for connecting to game servers using the <a href="https://developer.valvesoftware.com/wiki/Source_RCON_Protocol">RCON Protocol</a>.
      Uses a SQLite database to store information for multiple servers, including encrypted login information, command history, and favorite commands.
      Able to be run as a Docker container using the included Dockerfile and docker-compose.yml files.
      Built using React/Next and Tailwind.
    </span>,
    github: "https://github.com/zsd7200/rcon",
  },
  {
    image: "proj/whosthat.png",
    screenshot: "proj/screenshot/whosthat.png",
    title: "Who's that Pocket Monster?",
    description: <span>
      A <a href="https://bulbapedia.bulbagarden.net/wiki/Who%27s_That_Pok%C3%A9mon%3F">"Who's that Pokémon?"</a> webgame. 
      Pokémon images taken from <a href="https://bulbapedia.bulbagarden.net/wiki/Main_Page">Bulbapedia</a> using 
      <a href="https://pypi.org/project/ImageScraper/">ImageScraper</a> and manipulated using either Canvas (if on desktop) 
      or CSS image filters (if on mobile). Built using Node.js, JavaScript with Babel and Gulp, and HTML/CSS with Handlebars 
      and SASS.</span>,
    github: "https://github.com/zsd7200/whosthatpocketmonster",
    demo: "https://whosthatpocket.monster/",
  },
  {
    image: "proj/bonesnode.png",
    screenshot: "proj/screenshot/bonesnode.png",
    title: "BonesNode",
    description: <span>
      A port of the game <a href="https://en.wikipedia.org/wiki/Dice_10000">Dice 10000</a> to web.
      Uses <a href="https://socket.io/">Socket.io</a> to create private online rooms to be able to play
      with others over the internet.
      Built using Node.js, JavaScript with Babel and Gulp, and HTML/CSS with Handlebars and SASS.
      </span>,
    github: "https://github.com/zsd7200/bonesnode",
    demo: "https://bonesga.me/",
  },
  {
    image: "proj/packrip.png",
    screenshot: "proj/screenshot/packrip.png",
    title: "Pokémon TCG Booster Pack Simulator",
    description: <span>
      A Pokémon TCG pack opening simulator. Uses the
      <a href="https://pokemontcg.io/">Pokémon TCG API</a> to get card/set data, and pull rate data
      from various sources in an attempt to be accurate to each set's own pull rates.
      Built using Node.js, JavaScript with Babel and Gulp, and HTML/CSS with Handlebars and SASS.
      </span>,
    github: "https://github.com/zsd7200/packrip",
  },
  {
    image: "proj/viewarr.png",
    screenshot: "proj/screenshot/viewarr.png",
    title: "Viewarr",
    description: <span>
      Connects to <a href="https://sonarr.tv/">Sonarr</a> and <a href="https://radarr.video/">Radarr</a>
      APIs to display movies and shows currently available or requested on each service.
      Built using React/Next and Tailwind. First project using Next.
    </span>,
    github: "https://github.com/zsd7200/viewarr",
  },
  {
    image: "proj/dbz.png",
    screenshot: "proj/screenshot/dbz.png",
    title: "Dragon Ball Audio VisualiZer",
    description: <span>
      A Dragon Ball Z-themed audio visualizer project.
      Audio frequencies are displayed using HTML5 canvas in conjunction with an audio context object.
      Built using JavaScript, Bootstrap, and HTML/CSS.
      Team project with <a href="https://github.com/tam8217">Tristan Marshall</a>.
    </span>,
    github: "https://github.com/zsd7200/IGME330-Project1",
  },
]