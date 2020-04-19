const onInputChange = ({name, value, error}) => {
	const fields = Object.assign({}, this.state.fields);
	const fieldErrors = Object.assign({}, this.state.fieldErrors);

	fields[name] = value;
	fieldErrors[name] = error;

	this.setState({fields, fieldErrors})
};

validate() {
	const person = this.state.fields;
	const fieldErrors = this.state.fieldErrors;
	const errMessages = Object.keys(fieldErrors).filters((k) => fieldErrors[k])

	if (!person.name) return true;
	if (!person.email) return true;
	if (errMessages.length) return true;
	return false;
}


onFormSubmit = evt => {
	const people = this.state.people;
	const person = this.state.fields;

	evt.preventDefault();
	
	if (this.validte()) return;

	this.setState({
		people: people.concat(person),
		fields: {
			name: '',
			email: '',
		}
	})
}


export default onInputChange;