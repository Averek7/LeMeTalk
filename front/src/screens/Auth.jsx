import React, { useState } from "react"
import Login from "../components/Login"
import Register from "../components/Register"
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  CardHeader,
  Nav,
  NavItem,
  NavLink
} from "reactstrap"

const Auth = () => {
  const [tab, setTab] = useState(0)

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Card
        style={{
          width: "25rem",
          backgroundColor: "#cccccc"
        }}
      >
        <CardHeader>
          <Nav fill pills>
            <NavItem onClick={() => setTab(0)}>
              <NavLink active={tab===0?true:false}>
                Login
              </NavLink>
            </NavItem>
            <NavItem onClick={() => setTab(1)}>
              <NavLink active={tab===1?true:false}>Register</NavLink>
            </NavItem>
          </Nav>
        </CardHeader>
        <CardBody>{tab === 0 ? <Login /> : <Register />}</CardBody>
      </Card>
    </div>
  )
}

export default Auth
