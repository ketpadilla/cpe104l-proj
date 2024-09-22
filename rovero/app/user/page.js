"use client";
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import RoveroLayout from "@/layouts/RoveroLayout";

const UserPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <RoveroLayout>
      <div className="user-page-area mt-120 mb-120">
        <div className="container">
          <h1>Welcome, {user.nickname}</h1>
          <p>This is your user dashboard.</p>
          {/* Add more user-specific content here */}
        </div>
      </div>
    </RoveroLayout>
  );
};

export default UserPage;
