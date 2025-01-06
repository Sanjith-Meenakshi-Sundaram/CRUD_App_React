import React from 'react';

function Profile() {
    return (
        <div>
            <div className="container-fluid">
                {/* Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">My Profile</h1>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">About Me</h6>
                            </div>
                            <div className="card-body">
                                <p><strong>Name:</strong> Meenakshi Sundaram</p>
                                <p><strong>Bio:</strong> A passionate individual eager to excel in software development and problem-solving, with a focus on full-stack development and emerging technologies.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Skills & Interests</h6>
                            </div>
                            <div className="card-body">
                                <ul>
                                    <li>Proficient in HTML, CSS, JavaScript, and React</li>
                                    <li>Backend Development: Node.js</li>
                                    <li>Database Management: SQL, MongoDB</li>
                                    <li>Problem-Solving: Data Structures and Algorithms</li>
                                    <li>Interests: Artificial Intelligence, Machine Learning, and Web Development</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
