import React from "react";
import * as t from "prop-types";
import CSSTransition from 'react-transition-group/CSSTransition';

import Container, { PropTypes as ContainerPropTypes, EXIT_TIMEOUT, ENTER_TIMEOUT } from "./container";
import Alert, { PropTypes as AlertPropTypes } from "./alert-timer";

const classes = {
	enter: "alert-container_enter",
	enterActive: "alert-container_enterActive",
	leave: "alert-container_exit",
	leaveActive: "alert-container_exitActive"
}

const AlertList = ({ position, alerts, onDismiss, ...props }) => (
	<Container position={position}>
		{alerts.map((item, ix) => {
			const dismiss = onDismiss ? () => onDismiss(item) : null;

			const { message, ...alertProps } = item;

			return (
				<CSSTransition
				key={ ix }
				classNames={classes}
				timeout={{EXIT_TIMEOUT, ENTER_TIMEOUT}}
				>
		
				<Alert key={item.id} {...props} {...alertProps} onDismiss={dismiss}>
					{message}
				</Alert>
				</CSSTransition>
			);
		})}
	</Container>
);

AlertList.propTypes = {
	...ContainerPropTypes,
	alerts: t.arrayOf(
		t.shape({
			id: t.any.isRequired,
			type: AlertPropTypes.type,
			headline: AlertPropTypes.headline,
			message: t.oneOfType([t.string, t.node, t.object]).isRequired
		})
	).isRequired,
	onDismiss: t.func,
	timeout: AlertPropTypes.timeout
};

export default AlertList;
