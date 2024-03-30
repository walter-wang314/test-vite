import React, { memo } from "react";

const Header = () => {
	console.log(import.meta);
	console.log(import.meta.env.VITE_ENV);
	return (
		<div>This is Header</div>
	);
}

export default memo(Header);