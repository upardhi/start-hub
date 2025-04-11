import UserCard from "./UserCard";
import { UsersRound } from "lucide-react";
import { User } from "@/types/User";

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <section aria-labelledby="user-list-heading" className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center">
          <UsersRound
            className="h-6 w-6 text-blue-500 mr-2"
            aria-hidden="true"
          />
          <h2
            id="user-list-heading"
            className="text-xl font-semibold text-gray-900 dark:text-white"
          >
            Users
          </h2>
        </div>
      </div>

      {users.length > 0 ? (
        <ul
          role="list"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </ul>
      ) : (
        <div
          role="status"
          aria-live="polite"
          className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg"
        >
          <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-200">
            No users found
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Try adjusting your search parameters.
          </p>
        </div>
      )}
    </section>
  );
};

export default UserList;
