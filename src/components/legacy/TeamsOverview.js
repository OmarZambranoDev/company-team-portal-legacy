import { Component } from 'react'
import { connect } from 'react-redux'
import Modal from './Modal'
import TeamForm from './TeamForm'
import { addTeam, updateTeam } from '../../state/redux/actions'

class TeamsOverview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            addTeam: false,
            selected: {}
        }

        this.handleTeamClick = this.handleTeamClick.bind(this)
        this.onClose = this.onClose.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    handleTeamClick = (team) => {
        this.setState({
            selected: team,
            isOpen: true,
            addTeam: false,
        });
    }

    onClose = () => {
        this.setState({
            isOpen: false,
            selected: {},
            addTeam: false,
        });
    }

    onSave = (team, add) => {
        this.setState({
            isOpen: false,
            selected: {},
            addTeam: false
        });

        if (add) {
            this.props.addTeam(team);
        } else {
            this.props.updateTeam(team.id, team);
        }

    }

    render() {
        const { teams, employees } = this.props;
        const { isOpen, selected, addTeam } = this.state;

        return (
            <div className="team-list">
                <h2>Teams ({teams.length})</h2>
                <button
                    className="button"
                    onClick={() => this.setState({
                        isOpen: true,
                        addTeam: true
                    })}
                >
                    Add Team
                </button>
                {teams.map(team => (
                    <div
                        key={team.id}
                        className="team-card"
                        onClick={() => this.handleTeamClick(team)}
                    >
                        <h3>{team.name}</h3>
                        <p>{team.description}</p>
                        <p>Project: {team.project}</p>
                        <p>Members: {team.members.length}</p>
                    </div>
                ))}
                {isOpen &&
                    <Modal
                        onClose={this.onClose}
                        title={addTeam ? "Add New Team" : "Edit Team"}
                    >
                        <TeamForm
                            onSave={this.onSave}
                            onClose={this.onClose}
                            employees={employees}
                            team={selected}
                            teams={teams.length}
                            add={addTeam}
                        />
                    </Modal>}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    employees: state.employees,
    teams: state.teams
});

const mapDispatchToProps = {
    addTeam,
    updateTeam
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamsOverview)