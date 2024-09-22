"use client";
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import RoveroLayout from "@/layouts/RoveroLayout";
import Link from 'next/link';

const AdminPage = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [rooms, setRooms] = useState([]);
  const [totalBookings, setTotalBookings] = useState(0);

  useEffect(() => {
    if (!user || !user.is_admin) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user || !user.is_admin) return null;

  return (
    <RoveroLayout>
      <div className="admin-page-area mt-120 mb-120">
        <div className="container">
          <h1>Welcome, Admin {user.nickname}</h1>
          <p>This is your admin dashboard.</p>
          
          <div className="admin-dashboard mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="mb-0">Rooms</h2>
              <div>
                <button className="btn btn-outline-secondary me-2">Export</button>
                <button className="btn btn-primary">Add Room</button>
              </div>
            </div>
            
            <div className="booking-indicator mb-4">
              <h3>Total Bookings: <span className="badge bg-primary">{totalBookings}</span></h3>
            </div>

            <div className="room-filters mb-4">
              <button className="btn btn-light me-2">All</button>
              <button className="btn btn-light me-2">Active</button>
              <button className="btn btn-light me-2">Draft</button>
              <button className="btn btn-light">Archived</button>
            </div>

            <div className="room-list">
              <p>Manage your rooms and view their booking performance.</p>
              
              <table className="table">
                <thead>
                  <tr>
                    <th>Booked By</th>
                    <th>Room Name</th>
                    <th>Status</th>
                    <th>Price</th>
                    <th>Created at</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {rooms.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="text-center">No rooms added yet.</td>
                    </tr>
                  ) : (
                    rooms.map(room => (
                      <tr key={room.id}>
                        <td>{room.bookedBy || 'Not booked'}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img src={room.image} alt={room.name} style={{width: '50px', height: '50px', marginRight: '10px'}} />
                            {room.name}
                          </div>
                        </td>
                        <td>{room.status}</td>
                        <td>${room.price.toFixed(2)}</td>
                        <td>{room.createdAt}</td>
                        <td>...</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </RoveroLayout>
  );
};

export default AdminPage;