var Employee = React.createClass({
    render: function () {
        return (
            <tr>
                <td>{this.props.employee.name}</td>
                <td>{this.props.employee.age}</td>
                <td>{this.props.employee.year}</td>
            </tr>
        );
    }
});

var EmployeeTable = React.createClass({
    render: function () {
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
});

var App = React.createClass({
    getInitialState: function () {
        return {employees: []};
    },
    loadEmployeesFromServer: function () {

        var self = this;
        $.ajax({
            url: "http://localhost:8080/employee",
        }).then(function (data) {
            self.setState({employees: data});
        });
    },

    componentDidMount: function () {
        this.loadEmployeesFromServer();
    },

    render() {
        return ( <EmployeeTable employees={this.state.employees}/> );
    }
});

ReactDOM.render(<App/>, document.getElementById('root'));