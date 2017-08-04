import React from "react";

import Icon from "./icon";

// import "./styles.less";


const classes = {
	alert: "alert",
	msgContainer: "alert__msg-container",
	dismissable: "alert-dismissable",
	info: "alert-info",
	success: "alert-success",
	warning: "alert-warning",
	danger: "alert-danger",
	close: "alert__close close",
	icon: "alert__icon",
	headline: "alert__headline",
	body: "alert__body",
}

const Alert = ({
	type = "info",
	children,
	headline,
	onDismiss,
	dismissTitle = "Dismiss",
	showIcon = true
}) => {
	const isDismissable = !!onDismiss;
	const css = `${isDismissable ? classes.dismissable : ""} ${classes[type]} ${classes.alert}`;
	const dismiss = isDismissable
		? <button
				type="button"
				className={classes.close}
				title={dismissTitle}
				onClick={onDismiss}
			>
				×
			</button>
		: null;

	return (
		<div>
			{" "}
			{/* this classless container div is used by the transition group above... don't delete it */}
			<div className={css}>
				{dismiss}

				{showIcon ? <Icon className={classes.icon} type={type} /> : null}
				<div className={classes.msgContainer}>
					{headline ? <h4 className={classes.headline}>{headline}</h4> : null}
					<div className={classes.body}>{children}</div>
				</div>
			</div>
		</div>
	);
};

export default Alert;
