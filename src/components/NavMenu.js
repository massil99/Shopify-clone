import "./NavMenu.css"


function NavMenu(props) {
	const handleItemSelected = (index) => {
		props.onSelect(index)
	}

	const links = props.links

	return (
		<nav className="nav-container">
			{links.map(section => {
				return <div key={section.section}>
					<h3>{section.section}</h3>
					<ul className="nav-list">
						{section.items.map((link, index) => {
							const classn = "nav-list-item" + ((props.selected === index) ? " selected-nav-list-item" : "");

							return <li
								key={link.label}
								className={classn}
								onClick={() => handleItemSelected(index)}> <div className="inner-nav-list-item">{link.label}</div></li>
						})}
					</ul>
				</div>
			})}
		</nav>
	)
}

export default NavMenu;