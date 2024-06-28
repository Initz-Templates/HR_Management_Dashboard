// import React from "react";
import Badge from "../components/Badge";
import DashboardLayout from "../components/DashboardLayout";
import SearchInput from "../components/SearchInput";
import TopBar from "../components/TopBar";

// Function to generate dummy data for candidates
function generateDummyData(count) {
  const names = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack"];
  const designations = ["Team Lead - Design", "Senior Developer", "Junior Designer", "UI/UX Specialist", "Frontend Developer"];
  const types = ["Office", "Remote"];
  const statuses = ["On Time", "Late"];

  let dummyData = [];
  for (let i = 0; i < count; i++) {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomDesignation = designations[Math.floor(Math.random() * designations.length)];
    const randomType = types[Math.floor(Math.random() * types.length)];
    const checkInTime = `${Math.floor(Math.random() * 12) + 1}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')} ${Math.random() < 0.5 ? 'AM' : 'PM'}`;
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

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

function Candidates() {
  const dummyData = generateDummyData(7); // Generate dummy data for 7 candidates

  return (
    <DashboardLayout>
      <TopBar pryTitle="Candidates" secTitle="Show All Candidates" />
      <div>
        <div className="card">
          <SearchInput />
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
                {dummyData.map((candidate, index) => (
                  <tr key={index}>
                    <td>{candidate.name}</td>
                    <td>{candidate.designation}</td>
                    <td>{candidate.type}</td>
                    <td>{candidate.checkInTime}</td>
                    <td>
                      <Badge
                        style={{ fontSize: "1rem" }}
                        text={candidate.status === "On Time" ? "On Time" : "Late"}
                        variant={candidate.status === "On Time" ? "success" : "danger"}
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

export default Candidates;
