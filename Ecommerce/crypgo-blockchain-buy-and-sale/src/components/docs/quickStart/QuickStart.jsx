import Border from "../Border"
import Code from "../Code"


const QuickStart = () => {
  return (
    <div id="QuickStart" className="w-full min-h-screen">
      <h1 className="text-2xl font-bold">Quick Start</h1>
      <Border>
        <h1 className="text-xl font-semibold">1. Requirements</h1>
        <p className="text-lg text-accent">Before proceeding, ensure you have the latest stable <span className="text-tertiary">Node.js</span> installed</p>
        <br />
        <h2 className="text-xl">Recommended environment</h2>
        <ul className="list-disc text-lg text-accent pl-5">
          <li>Node.js 20+</li>
          <li>npm 10+</li>
        </ul>
      </Border>

      <Border>
        <h2 className="text-xl font-semibold">2. Installation</h2>
        <p className="text-lg text-accent">Navigate to the project directory and install dependencies. We recommend using yarn or npm.</p>
        <br />
        <h3 className="text-lg font-semibold">1{')'} Install using npm:</h3>
        <Code>
          <p className=""><span className="text-orange-500">cd</span>{" "} project-folder</p> <br />
          <p>npm install</p>
        </Code>

        <h3 className="text-lg font-semibold">2{')'} Install using yarn:</h3>
        <Code>
          <p className=""><span className="text-orange-500">cd</span>{" "} project-folder</p> <br />
          <p>yarn install</p>
        </Code>
      </Border>

      <Border>
        <h2 className="text-xl font-semibold">3. Start Development Server</h2>
        <p className="text-lg text-accent">After installing dependencies, you can launch the development server.</p>

        <Code>
          <pre>npm run dev or yarn run dev</pre>
        </Code>

        <p className="text-lg text-accent">This command initiates a local development server at http://localhost:3000</p>
        <Code>
          <p>{"> "} project_name@0.1.0 dev</p>
          <p>{"> "} next dev</p> <br />
          <p>-Next.js 14.2.4</p>
          <p>-Local: http://localhost:3000</p>
        </Code>
      </Border>


      <Border>
        <h2 className="text-xl font-semibold">4. Build & Deployment</h2>
        <p className="text-lg text-accent">After configuring your environment, run the build command to create a production-ready application.</p>
        <Code>
          npm run build or yarn build
        </Code>
        <p className="text-lg text-accent">Your application is now ready for deployment. 🥳</p>
      </Border>
    </div>
  )
}

export default QuickStart