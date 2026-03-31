function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 30 }}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Section;