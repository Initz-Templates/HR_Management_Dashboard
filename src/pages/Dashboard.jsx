
import Badge from "../components/Badge";
import DashboardLayout from "../components/DashboardLayout";
import StatsSummary from "../components/StatsSummary";
import UpcomingEvent from "../components/UpcomingEvent";
import TopBar from "../components/TopBar";
import Row from "../components/layout/Row";
import FlowContent from "../components/layout/FlowContent";
import Grid from "../components/layout/Grid";

// Function to generate dummy data for attendance
function generateAttendanceData(count) {
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

function Dashboard() {
  const attendanceData = generateAttendanceData(7); // Generate dummy data for attendance

  return (
    <DashboardLayout>
      <TopBar pryTitle="Hello, Jasmond" secTitle="Good Morning" />
      
      <Row split="2_5-1_5">
        {/* Left Column */}
        <FlowContent>
          <Grid>
            <StatsSummary />
            <StatsSummary />
            <StatsSummary />
            <StatsSummary />
          </Grid>
          <div className="card">
            <h4>Attendance Overview</h4>
            {/* Display more content here as needed */}
          </div>
        </FlowContent>
        
        {/* Right Column */}
        <div className="card">
          {/* Placeholder for calendar */}
          <div>Calendar Placeholder</div>
          <UpcomingEvent />
        </div>
      </Row>

      {/* Attendance Section */}
      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4>Attendance Overview</h4>
          <p>Aside content</p>
        </div>
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
              {attendanceData.map((employee, index) => (
                <tr key={index}>
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
    </DashboardLayout>
  );
}

export default Dashboard;
