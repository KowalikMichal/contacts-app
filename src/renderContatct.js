import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
	},
	paper: {
		margin: '20px'
	}
});
// paper wrzucic w grida
// jeżeli jest miejsce wyświetl userIcon
function renderContact(props) {
	const { data, addfavourite, classes } = props;
	return (
		data.map((contact, index) => {
			const favouriteStyle = (contact.favourite) ? 'red' : 'gray';
			const genderSign = (contact.gender === 'female') ? '♀️' : '♂️'
			return (
				<Paper key={index} className={classes.paper}>
					<Typography variant="h5">{contact.name.first} {contact.name.last} </Typography>
					<p> {genderSign}</p>
					<p> {contact.phone}</p>
					<p> {contact.email}</p>
					<p> {contact.location.street}, {contact.location.postcode} {contact.location.city}</p>
					<button
						style={{ backgroundColor: 'transparent', border: 'none', outline: 'none' }}
						onClick={() => { addfavourite(index) }}>
						<span role="img" aria-label="heart" style={{ color: favouriteStyle, fontSize: '24px' }}>❤</span>
					</button>
				</Paper>
			)
		})
	)

}

renderContact.propTypes = {
	classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(renderContact);


