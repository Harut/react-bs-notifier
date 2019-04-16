import React from "react";
import * as t from "prop-types";
import ReactCSSTransitionGroup from "react-transition-group/TransitionGroup";

// import "./styles.less";

export const ENTER_TIMEOUT = 500;
export const EXIT_TIMEOUT = 300;

const classes = {
	container: "alert-container",
	"top-right": "alert-container_top-right",
	"top-left": "alert-container_top-left",
	"bottom-right": "alert-container_bottom-right",
	"bottom-left": "alert-container_bottom-left",
	enter: "alert-container_enter",
	enterActive: "alert-container_enterActive",
	leave: "alert-container_leave",
	leaveActive: "alert-container_leaveActive"
};

const AlertContainer = ({
	position = "top-right",
	children,
}) => {
	return (
		<div className={`${classes.container} ${classes[position]}`}>
			<ReactCSSTransitionGroup
				transitionName={classes}
				transitionEnterTimeout={ENTER_TIMEOUT}
				transitionLeaveTimeout={EXIT_TIMEOUT}
			>
				{children}
			</ReactCSSTransitionGroup>
		</div>
	);
};

export const PropTypes = {
	position: t.oneOf(["top-right", "top-left", "bottom-right", "bottom-left"])
};

AlertContainer.propTypes = PropTypes;

export default AlertContainer;
