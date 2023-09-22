import React, { useState, useEffect } from "react";
import { Form, Input, Select, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Layout/Spinner";
import { Option } from "antd/es/mentions";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //form submit
  const submitHandler = async (values) => {
    try { 
      console.log("values");
      // console.log(values);
      setLoading(true);
      const { data } = await axios.post("/users/login", values);
      // console.log(data);
      setLoading(false);
      message.success("Login Success");
      localStorage.setItem('user', JSON.stringify({ ...data.user, password: "" }));
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("Something went wrong");
    }
  };

  //prevent for login user
  useEffect(() => {
    if(localStorage.getItem('user')) {
      navigate("/")
    }
  }, [navigate])

  return (
    <>
      <div className="register-page">
        {loading && <Spinner />}
        <Form layout="vertical" onFinish={submitHandler}>
          <h1>Login Form</h1>
          <Form.Item label="Email" name="email">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" />
          </Form.Item>
          <Form.Item label="User Role" name="role" initialValue="pi">
            <Select>
              <Option value="pi">Project PI</Option>
              <Option value="cwdb">CWDB Personnel</Option>
            </Select>
          </Form.Item>
          <div className="d-flex justify-content-between">
            <Link to="/register">Not a user? Click here</Link>
            <button className="btn btn-primary">Login</button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;