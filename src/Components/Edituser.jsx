import React, { useEffect, useState,useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { findIndexById } from '../Common/Helper';
import { UserContext } from '../App';


function Edituser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDOB] = useState('');
    const [gender, setGender] = useState('');
    const [subscription, setSub] = useState(false);

    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const { id } = useParams();
    const userId = Number(id);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !dob || gender === 'null') {
            alert('Please fill in all fields correctly.');
            return;
        }

        const updatedUser = { id: userId, name, email, dob, gender, subscription };
        const updatedUsers = user.map((u) => (u.id === userId ? updatedUser : u));
        setUser(updatedUsers);

        navigate('/');
    };

    useEffect(() => {
        const userToEdit = user.find((u) => u.id === userId);
        if (userToEdit) {
            setName(userToEdit.name);
            setEmail(userToEdit.email);
            setDOB(userToEdit.dob);
            setGender(userToEdit.gender);
            setSub(userToEdit.subscription);
        } else {
            alert('Invalid user ID');
            navigate('/');
        }
    }, [user, userId, navigate]);

    return (
        <div>
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
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
                            Update User
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Edituser;
