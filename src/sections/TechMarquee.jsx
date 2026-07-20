const techs = [
  { name: 'React', icon: <circle cx="12" cy="12" r="10"/> },
  { name: 'Next.js', icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/> },
  { name: 'Node.js', icon: <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/> },
  { name: 'Python', icon: <><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></> },
  { name: 'TypeScript', icon: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></> },
  { name: 'Tailwind CSS', icon: <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/> },
  { name: 'PostgreSQL', icon: <><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></> },
  { name: 'Docker', icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/> },
  { name: 'AWS', icon: <><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></> },
  { name: 'GraphQL', icon: <><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></> },
]

function TechMarquee() {
  const allTechs = [...techs, ...techs]

  return (
    <div className="tech-marquee">
      <div className="marquee-track">
        {allTechs.map((tech, i) => (
          <div className="tech-item" key={i}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {tech.icon}
            </svg>
            {tech.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechMarquee
