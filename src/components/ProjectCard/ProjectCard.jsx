import { Link } from 'react-router-dom'
import './ProjectCard.css'

const ProjectCard = ({ projejct }) => {
    const { name, description, image, tecnologies, url, github, id } = projejct

    return (
        <div className="ProjectCard grid gap-20 grid-cols-1 md:grid-cols-2 items-center">
            < div className={`layout text-center ${id % 2 === 0 && 'order-last'}`} >
                <img className='object-cover h-50 w-50 rounded-lg' src={`/src/assets/${image}.png`} alt={name} />
            </div>
            <div className="description line-clamp-4 text-center md:text-left">
                <Link to={`/projects/${id}`}><h1 className='mb-5'>{name}</h1></Link>
                <p className="line-clamp-4 mb-5">{description}</p>
                <section className='tecnologies'>Tecnologies used: <br />{tecnologies.map((e, i) => <span key={i}> ✦ {e}</span>)}</section>
            </div>
        </div >
    )
}

export default ProjectCard