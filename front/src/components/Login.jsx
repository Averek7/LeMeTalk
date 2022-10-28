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
  FormFeedback,
  Alert
} from "reactstrap"
import axios from 'axios';

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState(null)

  const handleClick = () => {
    const { email, password } = data
    if(email === "" || password === ""){
      setError("All Fields are required")
      return
    }

    const PostInfo = async() => {
      await axios.post("login", data)
      .then(() => {
        setError(null)
        window.alert("Success");
      })
      .catch((e) => {
        setError(e.message)
      });
      
    }
    
    PostInfo();

  }

  return (
    <>
      <Form>
        {error ? (
          <Alert color={error ? "danger" : "primary"}>
            <h4 className="alert-heading">Error</h4>
            <p>
              {error}
            </p>
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
        <Button color="primary" onClick={handleClick}>Sign in</Button>
      </Form>
    </>
  )
}

export default Login
