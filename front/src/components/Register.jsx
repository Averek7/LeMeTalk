import React, { useState } from "react"
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Alert
} from "reactstrap"
import axios from "axios"

const Register = () => {
  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  })
  const [error, setError] = useState(null)

  const handleClick = () => {
    const { email, username, password, confirmPassword } = data
    if (
      email === "" ||
      password === "" ||
      username === "" ||
      confirmPassword === ""
    ) {
      setError("All Fields are required")
      return
    }
    if (password !== confirmPassword) {
      setError("Password and Confirm Password should match")
      return
    }

    const PostInfo = async () => {
      await axios
        .post("register", data)
        .then(() => {
          setError(null)
          window.alert("Success")
        })
        .catch((e) => {
          setError(e.message)
        })
    }

    PostInfo()
  }

  return (
    <Form>
      {error ? (
        <Alert color={error ? "danger" : "primary"}>
          <h4 className="alert-heading">Error</h4>
          <p>{error}</p>
        </Alert>
      ) : null}
      <Row>
        <Col md={12}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              id="email"
              name="email"
              value={data.email}
              placeholder="with a placeholder"
              type="email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              id="username"
              name="username"
              placeholder="Hello23"
              value={data.username}
              type="text"
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <FormGroup>
            <Label for="Password">Password</Label>
            <Input
              id="Password"
              name="password"
              placeholder="password"
              type="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <FormGroup>
            <Label for="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              placeholder="password"
              type="password"
              value={data.confirmPassword}
              onChange={(e) =>
                setData({ ...data, confirmPassword: e.target.value })
              }
            />
          </FormGroup>
        </Col>
      </Row>
      <Button color="primary" onClick={handleClick}>
        Register
      </Button>
    </Form>
  )
}

export default Register
