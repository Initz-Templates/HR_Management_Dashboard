// import React from "react";
import Badge from "../components/Badge";
import DashboardLayout from "../components/DashboardLayout";
import TopBar from "../components/TopBar";

// Function to generate dummy data
function generateDummyData(count) {
  const names = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack"];
  const designations = ["Team Lead - Application", "Senior Developer", "Junior Developer", "Project Manager", "Designer"];
  const types = ["Office", "Remote"];
  const statuses = ["On Time", "Late"];

  let dummyData = [];
  for (let i = 0; i < count; i++) {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomDesignation = designations[Math.floor(Math.random() * designations.length)];
    const randomType = types[Math.floor(Math.random() * types.length)];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    const checkInTime = `${Math.floor(Math.random() * 12) + 1}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')} ${Math.random() < 0.5 ? 'AM' : 'PM'}`;

    dummyData.push({
      id: i + 1,
      name: randomName,
      designation: randomDesignation,
      type: randomType,
      checkInTime: checkInTime,
      status: randomStatus,
    });
  }
  return dummyData;
}

function Attendance() {
  const dummyData = generateDummyData(10);

  return (
    <DashboardLayout>
      <TopBar pryTitle="Attendance" secTitle="All Employee Information" />
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
                {dummyData.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.name}</td>
                    <td>{employee.designation}</td>
                    <td>{employee.type}</td>
                    <td>{employee.checkInTime}</td>
                    <td>
                      <Badge
                        style={{ fontSize: "1rem" }}
                        text={employee.status === "On Time" ? "On Time" : "Late"}
                        variant={employee.status === "On Time" ? "success" : "danger"}
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

export default Attendance;
