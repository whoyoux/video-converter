import React from "react";
import { ThemeSwitcher } from "./theme-switcher";

const Header = () => {
	return (
		<header className="w-full py-4 flex items-center justify-between border-b mb-4">
			<h1 className="text-lg font-semibold">Video converter</h1>
			<ThemeSwitcher />
		</header>
	);
};

export default Header;
