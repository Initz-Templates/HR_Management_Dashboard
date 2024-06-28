// import React from 'react';
import Badge from '../components/Badge';
import DashboardLayout from '../components/DashboardLayout';
import TopBar from '../components/TopBar';

function Payroll() {
  // Dummy data for 7 employees
  const employees = [
    {
      name: 'Dina Smith',
      designation: 'Team Lead - Design',
      type: 'Office',
      checkInTime: '09:27 AM',
      status: 'On Time',
    },
    {
      name: 'John Doe',
      designation: 'Senior Developer',
      type: 'Remote',
      checkInTime: '10:15 AM',
      status: 'On Time',
    },
    {
      name: 'Emma Johnson',
      designation: 'HR Manager',
      type: 'Office',
      checkInTime: '09:00 AM',
      status: 'Late',
    },
    {
      name: 'Michael Brown',
      designation: 'Software Engineer',
      type: 'Office',
      checkInTime: '09:30 AM',
      status: 'On Time',
    },
    {
      name: 'Sarah Wilson',
      designation: 'Marketing Specialist',
      type: 'Remote',
      checkInTime: '10:05 AM',
      status: 'On Time',
    },
    {
      name: 'Alex Green',
      designation: 'UI/UX Designer',
      type: 'Office',
      checkInTime: '09:20 AM',
      status: 'On Time',
    },
    {
      name: 'Chris Lee',
      designation: 'Content Writer',
      type: 'Office',
      checkInTime: '09:45 AM',
      status: 'On Time',
    },
  ];

  return (
    <DashboardLayout>
      <TopBar pryTitle="All Employees" secTitle="All Employee Information" />
      <div>
        <div className="card">
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Employee Name</th>
                  <th>Designation</th>
                  <th>Type</th>
                  <th>Check In Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, index) => (
                  <tr key={index}>
                    <td>{employee.name}</td>
                    <td>{employee.designation}</td>
                    <td>{employee.type}</td>
                    <td>{employee.checkInTime}</td>
                    <td>
                      <Badge
                        style={{ fontSize: '1rem' }}
                        text={employee.status}
                        variant={employee.status === 'On Time' ? 'success' : 'error'}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Payroll;
