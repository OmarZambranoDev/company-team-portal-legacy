import { Component } from "react";

class TeamForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            team: Object.keys(this.props.team).length > 0
                ? this.props.team
                : {
                    id: this.props.teams + 1,
                    name: "",
                    description: "",
                    project: "",
                    members: []
                }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleMembers = this.handleMembers.bind(this);
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState((prevState) => ({
            team: {
                ...prevState.team,
                [name]: value,
            }
        }));
    }

    handleMembers = (event) => {
        const { value, checked } = event.target;

        this.setState((prevState) => {
            if (checked) {
                return {
                    team: {
                        ...prevState.team,
                        members: [...prevState.team.members, parseInt(value)]
                    },
                };
            } else {
                return {
                    team: {
                        ...prevState.team,
                        members: prevState.team.members.filter((id) => id !== parseInt(value))
                    },
                };
            }
        });
    }

    render() {
        const { onClose, onSave, employees, add } = this.props;
        const { team } = this.state;

        return (
            <form onSubmit={(event) => {
                event.preventDefault();
                onSave(this.state.team, add);
            }}>
                <div className="team-form-container">
                    <label htmlFor="name">Team Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={team.name}
                        onChange={this.handleChange}
                        required={true}
                    />

                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        name="description"
                        value={team.description}
                        onChange={this.handleChange}
                        required
                    />

                    <label htmlFor="project">Project Assignment:</label>
                    <input
                        type="text"
                        name="project"
                        value={team.project}
                        onChange={this.handleChange}
                        required
                    />

                    <label htmlFor="members">Members:</label>
                    {employees && employees.map((employee) => (
                        <label key={employee.id}>
                            <input
                                className="radio-button"
                                type="checkbox"
                                id={employee.id}
                                name="members"
                                value={employee.id}
                                checked={this.state.team.members?.includes(employee.id)}
                                onChange={this.handleMembers}
                            />
                            {employee.name}
                        </label>
                    ))}

                    <button
                        className="team-form-cancel-button"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="team-form-save-button"
                        type="submit"
                    >
                        Save
                    </button>
                </div>
            </form>
        )
    }
}

export default TeamForm;