import React from "react";
import { User as UserIcon } from "lucide-react";
import Link from "next/link";
import { User } from "@/types/User";
import { Badge } from "../ui/Badge";
import Image from "next/image";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <li className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <Link
        href={`/users/${user.id}`}
        className="block p-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
        aria-label={`View details for ${user.name}`}
      >
        <div className="flex items-center">
          <div className="flex-shrink-0 h-12 w-12">
            {user.avatar ? (
              <Image
                src={user.avatar}
                width={100}
                height={100}
                alt="Picture of the author"
              />
            ) : (
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <UserIcon
                  size={24}
                  className="text-blue-500 dark:text-blue-300"
                  aria-hidden="true"
                />
              </div>
            )}
          </div>
          <div className="ml-4 flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {user.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {user.role}
                </p>
              </div>
              <Badge
                variant={user.status === "active" ? "default" : "secondary"}
              />
            </div>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              <p>{user.email}</p>
              <p className="mt-1">{user.department}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default UserCard;
