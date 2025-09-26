import ParticlesContainer from "./ParticlesContainer";
import { SiTailwindcss, SiPostgresql, SiExpress } from "react-icons/si";
import { FaNodeJs, FaDatabase } from "react-icons/fa"; // Correct import for Node.js icon

const About = () => {
  return (
    <div
      id="about"
      className=" min-h-screen  text-green-400 flex justify-center items-center "
    >
      {/* Content Grid */}
      <div className=" z-10 grid grid-cols-1 mt-[100px] md:grid-cols-2 gap-8 p-10 mx-h-9xl max-w-6xl">
        {/* First Column */}
        <div className="bg-gray-900 p-8 rounded-[50px] shadow-lg h-[750px]">
          <div className="text-[#00ff00] flex items-center flex-col animate-pulse w-full">
            {" "}
            {/* Added w-full */}
            <div className="LINE  text-lg">
              <b> -------------------------------</b>{" "}
            </div>
            <div className="LINE2 text-xl tracking-wide py-2 font-bold">
              I&apos;am Enjoying
            </div>
            <div className="LINE text-lg">
              <b> -------------------------------</b>{" "}
            </div>
          </div>

          <ul className="space-y-4 mt-8">
            {" "}
            {/* Added mt-8 for spacing */}
            <li>
              <h3 className="font-semibold">🛠️ Web Developpement</h3>
              <ul className="list-disc pl-5">
                <li>Frontend Development </li>
                <li>Backend Development </li>
                <li>Database Management</li>
              </ul>
            </li>
            <li>
              <h3 className="font-semibold">💻 Full Stack Web Development</h3>
              <p>Full stack</p>
            </li>
            <li>
              <h3 className="font-semibold">📱 Mobile Application</h3>
              <ul className="list-disc pl-5">
                <li>Android</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Second Column */}
        <div className="bg-gray-900 p-8 rounded-[50px]  shadow-lg h-[750px]">
          <div className="text-[#00ff00] flex items-center flex-col animate-pulse w-full">
            {" "}
            {/* Added w-full */}
            <div className="LINE text-lg">
              <b> -------------------------------</b>{" "}
            </div>
            <div className=" text-xl tracking-wide py-2 font-bold">
              My World
            </div>
            <div className="LINE text-lg">
              <b> -------------------------------</b>{" "}
            </div>
          </div>
          <ul className="space-y-5 mt-8">
            <li>
              <h3 className="font-semibold">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  alt="React.js logo"
                  className="inline-block w-5 h-5 mr-2"
                />{" "}
                React.js
              </h3>
            </li>
            <li>
              <h3 className="font-semibold">
                <img
                  src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
                  alt="MongoDB logo"
                  className="inline-block w-5 h-5 mr-2"
                />{" "}
                MongoDB
              </h3>
            </li>
            <li>
              <h3 className="font-semibold">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                  alt="JavaScript logo"
                  className="inline-block w-5 h-5 mr-2"
                />
                JavaScript
              </h3>
            </li>

            <li>
              <h3 className="font-semibold">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg"
                  alt=".NET logo"
                  className="inline-block w-5 h-5 mr-2"
                />
                .NET
              </h3>
            </li>

            <li>
              <h3 className="font-semibold">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg"
                  alt="C# logo"
                  className="inline-block w-5 h-5 mr-2"
                />{" "}
                CSharp
              </h3>
            </li>
            <li>
              <h3 className="font-semibold">
                <SiExpress className="inline-block w-5 h-5 mr-2" /> express Js
              </h3>
            </li>
            <li>
              <h3 className="font-semibold">
                <SiPostgresql className="inline-block w-5 h-5 mr-2" />{" "}
                Postgresql
              </h3>
            </li>
            <li>
              <h3 className="font-semibold">
                <FaNodeJs className="inline-block w-5 h-5 mr-2" /> Node.js
              </h3>
            </li>
            <li>
              <h3 className="font-semibold">
                <FaDatabase className="inline-block w-5 h-5 mr-2" />{" "}
                Microsoftsqlserver
              </h3>
            </li>
            <li>
              <h3 className="font-semibold">
                <SiTailwindcss className="inline-block w-5 h-5 mr-2" />{" "}
                Tailwindcss
              </h3>
            </li>
          </ul>
        </div>
      </div>
      <ParticlesContainer />{" "}
    </div>
  );
};

export default About;
