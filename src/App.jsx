import "./App.css";

function CourseCard({ icon, title, instructor, progress, color }) {
  return (
    <div className="card">
      <div className="icon" style={{ backgroundColor: color }}>
        {icon}
      </div>

      <h2>{title}</h2>

      <p> {instructor}</p>

      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${progress}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>

      <span>{progress}% Completed</span>

      <button>Continue Learning</button>
    </div>
  );
}

export default function App() {
  return (
    <div className="container">
      <h1> My Learning Dashboard</h1>

      <div className="cards">
        <CourseCard
          icon=""
          title="React Basics"
          instructor="John Smith"
          progress={80}
          color="#2196f3"
        />

        <CourseCard
          icon=""
          title="UI/UX Design"
          instructor="Emma Wilson"
          progress={55}
          color="#ff9800"
        />

        <CourseCard
          icon=""
          title="Cloud Computing"
          instructor="David Lee"
          progress={35}
          color="#4caf50"
        />
      </div>
    </div>
  );
}