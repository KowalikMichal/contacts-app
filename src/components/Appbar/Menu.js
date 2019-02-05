import React from 'react';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';


import { Link, withRouter } from 'react-router-dom';
import routes from '../../routing/routers'

import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";


const styles = {
	list: {
		width: 250,
	}
};

class SwipeableTemporaryDrawer extends React.Component {
	state = {
		open: false
	};

	toogleMenu = () => {
		this.setState(prevState => (
			{
				open: !prevState.open
			}
		))
	}
	activeRoute = (routeName) => {
		return this.props.location.pathname.indexOf(routeName) > -1 ? true : false;
	}

	render() {

		return (
			<div>
				<MenuIcon onClick={() => { this.toogleMenu() }} />
				<SwipeableDrawer
					open={this.state.open}
					onClose={() => { this.toogleMenu() }}
					onOpen={() => { this.toogleMenu() }}
				>
					<div
						tabIndex={0}
						role="button"
						onClick={() => { this.toogleMenu() }}
						onKeyDown={() => { this.toogleMenu() }}
						style={{ marginTop: '25px' }}
					>



						<MenuList>
							{routes.map((prop, key) => {
								const divider = (prop.navbarName === 'Settings')

								return (
									<div key={key}>
										{(divider) && <Divider />}
										<Link to={prop.path} style={{ textDecoration: 'none' }} >
											<MenuItem >
												<ListItemIcon children={<prop.icon />} />
												<ListItemText primary={prop.sidebarName} />
											</MenuItem>
										</Link>
									</div>
								);
							})}
						</MenuList>
					</div>
				</SwipeableDrawer>
			</div>
		);
	}
}

SwipeableTemporaryDrawer.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(SwipeableTemporaryDrawer));