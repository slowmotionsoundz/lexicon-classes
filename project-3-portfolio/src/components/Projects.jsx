function Projects() {
  return (
    <section className="section" id="projects">
      <h3 style={{ borderLeft: "4px solid #2563eb", paddingLeft: "10px" }}>Recent Work</h3>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        
        <div style={{ background: "#fff", padding: "20px", borderRadius: "6px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <h4 style={{ color: "#1f2937", marginBottom: "10px" }}>Studio Booking System</h4>
          <p style={{ color: "#4b5563", fontSize: "0.95rem" }}>
            I built a custom web application for EQ Labs to handle internal studio bookings, client scheduling, and digital asset tracking. It replaces messy spreadsheets with a clean interface that makes daily operations run smoothly.
          </p>
        </div>

        <div style={{ background: "#fff", padding: "20px", borderRadius: "6px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <h4 style={{ color: "#1f2937", marginBottom: "10px" }}>Logistics Routing Engine</h4>
          <p style={{ color: "#4b5563", fontSize: "0.95rem" }}>
            Drawing directly from my background in freight and transport, I developed a backend tool designed to manage live delivery routing and crew scheduling for time sensitive cargo.
          </p>
        </div>

        <div style={{ background: "#fff", padding: "20px", borderRadius: "6px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <h4 style={{ color: "#1f2937", marginBottom: "10px" }}>European VAT Billing Tool</h4>
          <p style={{ color: "#4b5563", fontSize: "0.95rem" }}>
            A production ready application that manages recurring subscription payments while automatically calculating complex cross border European taxes.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Projects;
