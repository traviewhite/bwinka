import Link from 'next/link'

const ProjectNav = ({ list }) => {
  const projectNavList = list && list.map((p) => 
    <Link href={p.fields.slug} key={p.sys.id}>
      <a>
        <li key={p.sys.id}>{p.fields.title}</li>
      </a>
    </Link>
  )
  return <ul className='project-nav'>{projectNavList}</ul>
}

export default ProjectNav