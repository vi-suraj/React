export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

// forwarding props

// in the above ...props store the value key value pare that are not mention in destrutring and when we write ...props inside section there all the rest key value pare are seperatly added
