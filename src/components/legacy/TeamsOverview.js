import { Component } from 'react'
import { connect } from 'react-redux'

class TeamsOverview extends Component {
    constructor(props) {
        super(props)
    }

    //placeholder function, needed for modal
    handleTeamClick = (team) => {
        console.log("Team clicked ", team.name)
    }

    render() {
        const { teams } = this.props;

        return (
            <div className="team-list">
                <h2>Teams ({teams.length})</h2>
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
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    employees: state.employees,
    teams: state.teams
})

export default connect(mapStateToProps)(TeamsOverview)