import React,{useContext} from 'react';
import Cards from './Cards';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {findIndexById} from '../Common/Helper'
import {useNavigate} from 'react-router-dom'
import {UserContext} from '../App'

function Dashboard() { 
    let { user, setUser } = useContext(UserContext);
    // Use destructuring for props
    let navigate=useNavigate()
    const handleDelete=(id)=>{
        let index = findIndexById(user,id)
        if(index!==-1){
            user.splice(index,1)
            setUser([...user])
        }
        else{
            alert("Invalid Id")
        }
        //splice(index,count) to delete the array element on a specifies index
    }
    const data = [
        {
            title: 'Earnings (Monthly)',
            value: '$40,000',
            color: 'primary',
            icon: 'fa-calendar',
            isProgress: false,
        },
        {
            title: 'Earnings (Annual)',
            value: '$215,000',
            color: 'success',
            icon: 'fa-dollar-sign',
            isProgress: false,
        },
        {
            title: 'Task',
            value: '50%',
            color: 'info',
            icon: 'fa-clipboard-list',
            isProgress: true,
        },
        {
            title: 'Pending Requests',
            value: '18',
            color: 'warning',
            icon: 'fa-comments',
            isProgress: false,
        },
    ];

    return (
        <div className="container-fluid">
            {/* Page Heading */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
               
            </div>
            {/* Content Row */}
            <div className="row">
                {data.map((item, index) => (
                    <Cards key={index} data={item} />
                ))}
            </div>
            {/* Content Row */}
            <div className="row">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>S/NO</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>D.O.B</th>
                            <th>Subscription</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((e) => (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.gender}</td>
                                <td>{e.dob}</td>
                                <td>{e.subscription ? 'Active' : 'Inactive'}</td>
                                <td>
                                    <Button variant='primary' onClick={()=>navigate(`/edit-user/${e.id}`)}>Edit</Button>
                                    &nbsp;
                                    <Button variant='danger' onClick={()=>handleDelete(e.id)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Dashboard;
