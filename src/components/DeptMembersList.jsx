
import { Link } from "react-router-dom";

// Function to generate dummy data for department members
function generateDummyData(count) {
  const names = ["Alice Johnson", "Bob Smith", "Charlie Brown", "David Lee", "Emma Davis"];
  const roles = ["Lead UI/UX Designer", "Senior Developer", "Junior Designer", "Product Manager", "Frontend Developer"];

  let dummyData = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * names.length);
    dummyData.push({
      id: i + 1,
      name: names[randomIndex],
      role: roles[randomIndex],
    });
  }
  return dummyData;
}

function DeptMembersList() {
  const data = generateDummyData(5); // Generate dummy data for 5 members

  return (
    <div className="card" style={{ display: "grid", gap: "2rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid var(--clr-border)",
          paddingBottom: "1rem",
          gap: "2rem",
        }}
      >
        <div>
          <h5>Design Department</h5>
          <p>
            <small>{data.length} Members</small>
          </p>
        </div>
        <Link to="/view-all" style={{ color: "var(--clr-accent)", textDecoration: "none" }}>
          View All
        </Link>
      </div>
      <div
        style={{
          display: "grid",
          gap: "1rem",
          maxHeight: "25rem",
          overflowY: "auto",
          paddingBlock: "1rem",
        }}
      >
        {data.map((member) => (
          <Link
            to={`/emp-details/${member.id}`}
            key={member.id}
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              paddingInline: "1rem",
            }}
          >
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <div
                style={{
                  height: "40px",
                  width: "40px",
                  backgroundColor: "var(--clr-border)",
                  borderRadius: "50%",
                }}
              ></div>
              <div>
                <p>{member.name}</p>
                <p>
                  <small>{member.role}</small>
                </p>
              </div>
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ alignSelf: "center" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.53151 6.41438C9.20806 6.67313 9.15562 7.1451 9.41438 7.46855L13.0396 12L9.41438 16.5315C9.15562 16.855 9.20806 17.3269 9.53151 17.5857C9.85495 17.8444 10.3269 17.792 10.5857 17.4685L14.5857 12.4685C14.8048 12.1946 14.8048 11.8054 14.5857 11.5315L10.5857 6.53151C10.3269 6.20806 9.85495 6.15562 9.53151 6.41438Z"
                fill="white"
              />
            </svg>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DeptMembersList;
