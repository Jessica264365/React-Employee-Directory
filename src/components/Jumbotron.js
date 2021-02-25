import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const styles = {
  jumbotron: {
    background: "#3c6e71",
    height: "250px",
    marginBottom: "30px",
    color: "white",
  },
};

export default function TheJumbotron() {
  return (
    <Jumbotron
      className="justify-content-center text-center"
      style={styles.jumbotron}
    >
      <Container style={styles.container}>
        <h1>Employee Directory</h1>
        <p>Use the search bar to find an employee</p>
      </Container>
    </Jumbotron>
  );
}
