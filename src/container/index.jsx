import React from "react";
import * as t from "prop-types";
import TransitionGroup  from "react-transition-group/TransitionGroup";

// import "./styles.less";

export const ENTER_TIMEOUT = 500;
export const EXIT_TIMEOUT = 300;

const classes = {
	container: "alert-container",
	"top-right": "alert-container_top-right",
	"top-left": "alert-container_top-left",
	"bottom-right": "alert-container_bottom-right",
	"bottom-left": "alert-container_bottom-left",
};

const AlertContainer = ({
	position = "top-right",
	children,
}) => {
	return (
		<div className={`${classes.container} ${classes[position]}`}>
			<TransitionGroup>
				{children}
			</TransitionGroup>
		</div>
	);
};

export const PropTypes = {
	position: t.oneOf(["top-right", "top-left", "bottom-right", "bottom-left"])
};

AlertContainer.propTypes = PropTypes;

export default AlertContainer;
