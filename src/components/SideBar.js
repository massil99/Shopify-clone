import "./SideBar.css";
import { useState } from 'react';

function SearchList(props) {
	const handleOnchange = (e) => {
		props.onSearch(e.target.value);
	}

	const handleSelection = (index) => {
		props.onSelection(index);
	}

	const list = props.items.map((item, index) => {
		const itemClassName = (index === props.selected) ? "selected-item" : "item";
		const innerItemClass = (index === props.selected) ? "inner-selected-item" : "inner-item";
		return (
			<li className={itemClassName}
				key={item.abrv}
				onClick={() => handleSelection(index)}>
				<div className={innerItemClass}>
					<div style={{ display: "inline" }}>{item.abrv}</div>
					{' '}
					{(!props.reduce) && (<span>{item.name}</span>)}
				</div>
			</li>
		)
	}
	);

	const serachIco = (
		<svg
			style={{ fill: "white", width: "24px", height: "24px" }}
			viewBox="0 0 20 20"
			focusable="false"
			aria-hidden="true">
			<path
				d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm9.707 4.293-4.82-4.82A5.968 5.968 0 0 0 14 8 6 6 0 0 0 2 8a6 6 0 0 0 6 6 5.968 5.968 0 0 0 3.473-1.113l4.82 4.82a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414z">
			</path>
		</svg>
	)

	return (
		<div>
			{(props.title) && (
				(props.reduce) ?
					<hr className="separator" /> :
					<h3 className="listname">{props.title}</h3>)}
			<div className="searchebar-container">
				{serachIco}
				{(!props.reduce) && (
					<input
						value={props.searchBarValue}
						onChange={handleOnchange}
						className="searchebar"
						placeholder={props.placeholder} />
				)}
			</div>
			<nav>
				<ul className="items">
					{list}
				</ul>
			</nav>
		</div>
	)
}

function UsresMenu(props) {
	const [showUsers, setShowusers] = useState(false);

	return (
		<div
			className="users-container">
			<span
				className="users"
				onClick={() => setShowusers(!showUsers)}>
				<div className="name-logo" >
					<img
						alt=""
						style={{ width: "35px", height: "35px" }}
						src="https://cdn.shopify.com/shopifycloud/web/assets/v1/2e6c49e2a0828a1d532799b14ede5080.svg" />
					{(!props.reduce) && (<span style={{ margin: "0 5px", }}>{props.selectedUser}</span>)}
				</div>
				{(!props.reduce) && (<span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						style={{ fill: "white" }}
						width="10"
						height="10"
						viewBox="0 0 24 24">
						<path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
					</svg>
				</span>)}
			</span>
			{(!props.reduce && showUsers) && (
				<div className="users-list-container">
					<ul
						className="users-ulist">
						{props.items.map(item =>
							<li
								key={item}
								onClick={() => setShowusers(false)}
								className="users-list-item">
								{item}
							</li>)
						}
					</ul>
				</div>)
			}
		</div>
	)
}

function SideBar(props) {
	const [selected, setSelected] = useState(0);
	const [reduce, setReduce] = useState(false);

	return (
		<div
			onMouseEnter={() => {
				setTimeout(() => {
					setReduce(false)
				}, 500)
			}}
			onMouseLeave={() => {
				setTimeout(() => {
					setReduce(true)
				}, 500)
			}}
			className={(reduce) ? "reduced-sidebar" : "sidebar"}>
			<div>
				<UsresMenu
					selectedUser={props.username}
					items={props.users}
					reduce={reduce} />
				<div className="sotreList">
					<SearchList
						reduce={reduce}
						searchBarValue={props.serachVal}
						onSearch={props.onSearchChange}
						title="Boutiques"
						placeholder="Rechercher des boutiques"
						items={props.stores}
						selected={selected}
						onSelection={setSelected} />
				</div>
			</div>
			<div
				className="close-menu"
				onClick={() => setReduce(!reduce)}>
				<span>
					{(reduce) ?
						<svg
							className="close-menu-icon"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fillRule="evenodd"
							clipRule="evenodd">
							<path
								d="m21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
						</svg>
						: <svg className="close-menu-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" /></svg>}
				</span>
				{(!reduce) && (
					<div
						className="close-menu-text">
						Fermer le menu
					</div>)}
			</div>
		</div >
	)
}

export default SideBar;