// File: pages/team/[id].js
import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import Image from 'next/image';
import { useRouter } from 'next/router';
import { teamMembers5 } from '@/data/team';
import Link from 'next/link';

export default function TeamMemberDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Use state to manage the found member, initially null
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state

  // Use useEffect to run code after router.query is ready
  useEffect(() => {
    // Check if the router is ready and id is available
    if (router.isReady && id) {
      console.log("TeamMemberDetail - Router query ID (after ready):", id);
      const foundMember = teamMembers5.find((m) => m.slug === id);
      setMember(foundMember);
      setLoading(false); // Set loading to false once member is found or not found
    } else if (!router.isReady) {
      // Still loading router data, keep loading state true
      setLoading(true);
    }
  }, [router.isReady, id]); // Depend on router.isReady and id

  // --- Render based on loading and member state ---

  if (loading) {
    // Show a loading message while waiting for router to be ready
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-100 dark:bg-gray-900">
        <p className="text-gray-700 dark:text-gray-300">Loading team member details...</p>
      </div>
    );
  }

  if (!member) {
    // Member not found after router is ready
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-100 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Member Not Found</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6 px-4">
            The team member you are looking for does not exist.
          </p>
          <Link href="/innerpages/team" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
            Back to Team
          </Link>
        </div>
      </div>
    );
  }

  // If we reach here, member is found and router is ready
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        {/* Image display */}
        {member.imageSrc && (
          <Image
            src={member.imageSrc}
            alt={member.altText || member.name}
            width={200} // Adjust as per your design
            height={200} // Adjust as per your design
            className="rounded-full mx-auto mb-4 object-cover"
          />
        )}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h1>
        <p className="text-xl text-primary dark:text-white dark:text-opacity-70 mb-4">{member.position}</p>
        {member.description && (
          <p className="text-gray-700 dark:text-gray-300 mb-6 px-4">{member.description}</p>
        )}
        <Link href="/innerpages/team" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
          Back to Team
        </Link>
      </div>
    </div>
  );
}