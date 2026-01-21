import Border from "../Border"
import Code from "../Code"



const ProjectConfiguration = () => {
  return (
    <article id="ProjectConfiguration" className="w-full min-h-screen">
      <h1 className="text-2xl font-bold">Project Configuration</h1>
      <p className=" my-4">Colors</p>
      <Border>
        <h2 className="text-xl font-semibold">1. Color Customization</h2>
        <p className="teact-accent">To modify colors: tailwind.config.ts</p>
        <Code>
          <pre>
            <p>primary: "#99E39E",</p>
            <p>secondary: "#1DC8CD",</p>
            midnight_text: "#263238", <br />
            muted: "#D8DBDB", <br />
            error: "#CF3127", <br />
            warning: "#F7931A", <br />
            light_grey: "#505050", <br />
            grey: "#F5F7FA", <br />
            dark_grey: "#1E2229", <br />
            border: "#E1E1E1", <br />
            success: "#3CD278", <br />
            section: "#737373", <br />
            darkmode: "#000510", <br />
            darklight: "#0C372A", <br />
            dark_border: "#959595", <br />
            tealGreen: "#477E70", <br />
            charcoalGray: "#666C78", <br />
            deepSlate: "#282C36", <br />
            slateGray: "#2F3543", <br />
          </pre>
        </Code>
      </Border>


      <Border>
        <h2 className="text-xl font-semibold">2. Theme Color Adjustment</h2>
        <p className="text-accent">To adjust: tailwind.config.ts</p>
        <Code>
          <pre>
            primary: "#2CDD9B", <br />
            secondary: "#1DC8CD",
          </pre>
        </Code>
      </Border>

      <h2 className="text-xl">Typography</h2>
      <Border>
        <p className="text-accent">1. Modify font family here: src/app/layout.tsx</p>
        <Code>
          <pre>
            import {`{Montserrat}`} from "next/font/google"; <br />
            const montserrat = Montserrat{`({subsets: ["latin"] })`}; <br />
          </pre>
        </Code>
      </Border>

      <h2 className="text-xl">Logo</h2>
      <Border>
        <p className="text-accent">1. Update logo here: src/components/Layout/Header/Logo/index.tsx</p>
        <Code>
          {`<Link href="/">`} <br />
          {`<Image`} <br/>
          {`src="/images/logo/logo.svg"`} <br/>
          {`alt="logo"`} <br/>
          {`width=160`} <br/>
          {`height=50`} <br/>
          {`quality=100`} <br/>
          {`style={width: "auto", height: "auto"}`} <br/>
          {`/>`} <br/>       
        </Code>
      </Border>

    </article>
  )
}

export default ProjectConfiguration