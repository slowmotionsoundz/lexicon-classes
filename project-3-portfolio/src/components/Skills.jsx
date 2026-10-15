function Skills() {
  return (
    <section className="section" id="skills">
      <h3 style={{ borderLeft: "4px solid #2563eb", paddingLeft: "10px" }}>What I Do</h3>
      
      <ul style={{ listStyleType: "none", padding: 0, color: "#4b5563" }}>
        
        <li style={{ marginBottom: "10px", background: "#fff", padding: "15px", borderRadius: "6px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <strong>Web Development:</strong> I build fast and responsive websites using modern tools like React, Next.js, Node.js, and Tailwind CSS. I like to keep my designs clean and simple so they are easy for anyone to navigate.
        </li>

        <li style={{ marginBottom: "10px", background: "#fff", padding: "15px", borderRadius: "6px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <strong>Business Systems:</strong> I write code that handles real world business logic. Whether a company needs a custom booking system, a reliable way to handle subscription billing, or tools to calculate international taxes, I can build it.
        </li>

        <li style={{ marginBottom: "10px", background: "#fff", padding: "15px", borderRadius: "6px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <strong>Audio and Studio Production:</strong> Outside of programming, I have over two decades of experience designing studio spaces and working as a sound engineer. I know my way around classic studio hardware like the Juno 106 just as well as I know my way around code.
        </li>

      </ul>
    </section>
  );
}

export default Skills;
