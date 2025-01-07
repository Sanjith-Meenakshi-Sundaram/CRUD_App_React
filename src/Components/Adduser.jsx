import React, { useState,useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; // Import the Button component
import { useNavigate } from 'react-router-dom';
import {UserContext} from '../App'

function Adduser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDOB] = useState("");
    const [gender, setGender] = useState("");
    const [subscription, setSub] = useState(false);
    const{user,setUser}=useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the form from reloading the page
        const newUser = { name, email, dob, gender, subscription };
        newUser.id = user.length ? user[user.length - 1].id + 1 : 1; // Auto-increment id
        
        // Add the new user by updating the state
        setUser((prevUsers) => [...prevUsers, newUser]);

        // Redirect to the home page
        navigate('/');
    };

    return (
        <div>
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Add User</h1>
                </div>
                <div className="row">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Name"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>D.O.B</Form.Label>
                            <Form.Control
                                type="date"
                                onChange={(e) => setDOB(e.target.value)}
                                value={dob}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select
                                defaultValue="null"
                                onChange={(e) => setGender(e.target.value)}
                                value={gender}
                            >
                                <option value="null">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check
                                type="checkbox"
                                label="Subscription"
                                checked={subscription}
                                onChange={(e) => setSub(e.target.checked)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Adduser;
