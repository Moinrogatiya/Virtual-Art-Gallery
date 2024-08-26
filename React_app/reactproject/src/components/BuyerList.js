import React, { useEffect, useState } from 'react';

const BuyerList = () => {
    const [buyers, setBuyers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch buyers from the backend
        fetch('http://localhost:8080/user/getuserbyrole?roleId=3') // Ensure roleId matches the role ID you want
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setBuyers(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    // Handle toggle status action
    const handleToggleStatus = (id, currentStatus) => {
        const newStatus = currentStatus === 'Enabled' ? 'Disabled' : 'Enabled';
        const statusCode = newStatus === 'Enabled' ? true : false;

        // Send the updated status to the server
        fetch(`http://localhost:8080/user/status?u_id=${id}&status=${statusCode}`, {
            method: 'PUT', // Ensure this matches your backend API
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: statusCode })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update status');
            }
            return response.json();
        })
        .then(data => {
            // Update the local state with the new status
            setBuyers(prevBuyers =>
                prevBuyers.map(buyer =>
                    buyer.id === id ? { ...buyer, status: statusCode } : buyer
                )
            );
            console.log('Status updated successfully:', data);
        })
        .catch(error => console.error('Error updating status:', error));
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h2>Buyer List</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email ID</th>
                        <th>Contact</th>
                        <th>Username</th>
                        <th>Status</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {buyers.map((buyer) => (
                        <tr key={buyer.id}>
                            <td>{buyer.id}</td>
                            <td>{buyer.first_name}</td>
                            <td>{buyer.last_name}</td>
                            <td>{buyer.email_id}</td>
                            <td>{buyer.contact}</td>
                            <td>{buyer.username}</td>
                            <td>{buyer.status ? 'Enabled' : 'Disabled'}</td>
                            <td>{buyer.address}</td>
                            <td>
                                <button
                                    className={`btn ${buyer.status ? 'btn-danger' : 'btn-success'} btn-sm`}
                                    onClick={() => handleToggleStatus(buyer.id, buyer.status ? 'Enabled' : 'Disabled')}
                                >
                                    {buyer.status ? 'Disable' : 'Enable'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BuyerList;
