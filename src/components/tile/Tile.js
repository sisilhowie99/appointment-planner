import React from "react";

export const Tile = ({ object }) => {
	return (
		<div className="tile-container">
			{Object.values(object).map((obj, index) => (
				<p className={index === 0 ? "tile-title" : "tile"} key={index}>
					{obj}
				</p>
			))}
		</div>
	);
};
