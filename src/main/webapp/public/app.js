class Employee extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.employee.name}</td>
                <td>{this.props.employee.age}</td>
                <td>{this.props.employee.year}</td>
            </tr>
        );
    }
}

class EmployeeTable extends React.Component {
    render() {
        var rows = [];
        this.props.employees.forEach(function (employee) {
            rows.push(
                <Employee employee={employee} key={employee.name}/>);
        });

        if (this.props.employees.length === 0) {
            return <span>Empty for now</span>
        } else {
            return (
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Years</th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            );
        }
    }
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {employees: []};
    }

    loadEmployeesFromServer() {

        var self = this;
        $.ajax({
            url: "http://localhost:8080/employee",
        }).then(function (data) {
            self.setState({employees: data});
        });
    }

    componentDidMount() {
        this.loadEmployeesFromServer();
    }

    render() {
        return ( <EmployeeTable employees={this.state.employees}/> );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));