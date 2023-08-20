import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { sponsoredProjects } from "@/constants"
import { consultancyProjects } from "@/constants"

const page = () => {
  return (
    <div>
      <Navbar />
      <section className="mb-10">
        <h1 className="text-3xl font-bold ml-8 mt-8">Sponsored Projects</h1>
        <ul style={{ listStyle: 'disc' }} className="ml-8 mt-4">
            {sponsoredProjects.map((project, index) => {
                return (
                    <li className="mt-2">
                       <p>{project.Project_Name} - {project.Funding_Agency} ({project.Funding_Amount})</p> 
                    </li>             
                )
            })}
        </ul>
        <h1 className="text-3xl font-bold ml-8 mt-8">Consultancy Projects</h1>
        <ul style={{ listStyle: 'disc' }} className="ml-8 mt-4">
            {consultancyProjects.map((project, index) => {
                return (
                    <li className="mt-2">
                       <p>{project.Project_Name} - {project.Funding_Agency} ({project.Funding_Amount})</p> 
                    </li>             
                )
            })}
        </ul>
      </section>
      <Footer />
    </div>
  )
}

export default page
