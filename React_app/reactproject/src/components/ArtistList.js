import React, { useEffect, useState } from 'react';

const ArtistList = () => {
    const [artists, setArtists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch artists from the backend
        fetch('http://localhost:8080/user/getuserbyrole?roleId=2')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Convert boolean status to string for display
                const formattedArtists = data.map(artist => ({
                    ...artist,
                    status: artist.status ? 'enabled' : 'disabled'
                }));
                setArtists(formattedArtists);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    // Handle toggle status action
    const handleToggleStatus = (id, currentStatus) => {
        const newStatus = currentStatus === 'enabled' ? false : true; // Toggle between true and false

        // Send the updated status to the server
        fetch(`http://localhost:8080/user/status?u_id=${id}&status=${newStatus}`, {
            method: 'PUT', // Ensure this matches your backend API
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update status');
            }
            return response.json();
        })
        .then(() => {
            // Update the local state with the new status
            setArtists(prevArtists =>
                prevArtists.map(artist =>
                    artist.id === id ? { ...artist, status: newStatus ? 'enabled' : 'disabled' } : artist
                )
            );
        })
        .catch(error => console.error('Error updating status:', error));
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h2>Artist List</h2>
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
                    {artists.map((artist) => (
                        <tr key={artist.id}>
                            <td>{artist.id}</td>
                            <td>{artist.first_name}</td>
                            <td>{artist.last_name}</td>
                            <td>{artist.email_id}</td>
                            <td>{artist.contact}</td>
                            <td>{artist.username}</td>
                            <td>{artist.status === 'enabled' ? 'Enabled' : 'Disabled'}</td>
                            <td>{artist.address}</td>
                            <td>
                                <button
                                    className={`btn ${artist.status === 'disabled' ? 'btn-success' : 'btn-danger'} btn-sm`}
                                    onClick={() => handleToggleStatus(artist.id, artist.status)}
                                >
                                    {artist.status === 'disabled' ? 'Enable' : 'Disable'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ArtistList;
