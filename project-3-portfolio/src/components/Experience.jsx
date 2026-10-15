function Experience() {
  return (
    <section className="section" id="experience">
      <h3 style={{ borderLeft: "4px solid #2563eb", paddingLeft: "10px" }}>Work History</h3>
      
      {/* Timeline Container */}
      <div style={{ borderLeft: "2px solid #e5e7eb", paddingLeft: "20px", marginLeft: "10px", display: "flex", flexDirection: "column", gap: "25px" }}>
        
        <div>
          <h4 style={{ color: "#1f2937", margin: "0 0 5px 0" }}>Software Developer and IT Student</h4>
          <p style={{ color: "#6b7280", fontSize: "0.9rem", fontStyle: "italic", margin: "0 0 10px 0" }}>Skåne County, Sweden (Present)</p>
          <p style={{ color: "#4b5563", fontSize: "0.95rem", margin: 0 }}>
            I am completing an IT engineering program while building real world web applications. My daily focus is writing reliable code for backend systems that handle recurring payments, European tax calculations, and delivery routing.
          </p>
        </div>

        <div>
          <h4 style={{ color: "#1f2937", margin: "0 0 5px 0" }}>Founder and Director | EQ Labs</h4>
          <p style={{ color: "#6b7280", fontSize: "0.9rem", fontStyle: "italic", margin: "0 0 10px 0" }}>Huntsville, AL and Landskrona, Sweden (1999 to Present)</p>
          <p style={{ color: "#4b5563", fontSize: "0.95rem", margin: 0 }}>
            I built a music company from the ground up, starting with three locations in the US and expanding to a flagship studio and school in Sweden. Beyond managing the studio, I build our internal web tools to handle bookings and client scheduling.
          </p>
        </div>

        <div>
          <h4 style={{ color: "#1f2937", margin: "0 0 5px 0" }}>Foreman and Logistics | Asplundh</h4>
          <p style={{ color: "#6b7280", fontSize: "0.9rem", fontStyle: "italic", margin: "0 0 10px 0" }}>Huntsville, AL (2006 to 2011)</p>
          <p style={{ color: "#4b5563", fontSize: "0.95rem", margin: 0 }}>
            I started out driving trucks and eventually moved up to Foreman. I managed work crews, daily business operations, and equipment routing for city utility contracts.
          </p>
        </div>

        <div>
          <h4 style={{ color: "#1f2937", margin: "0 0 5px 0" }}>Delivery Driver | Just In Time Cartage</h4>
          <p style={{ color: "#6b7280", fontSize: "0.9rem", fontStyle: "italic", margin: "0 0 10px 0" }}>US and Canada (2002 to 2006)</p>
          <p style={{ color: "#4b5563", fontSize: "0.95rem", margin: 0 }}>
            I drove box trucks to deliver time sensitive freight across state lines and into Canada. This role gave me hands on experience with strict delivery deadlines and international route planning.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Experience;
