import { users } from "@/data/users";
import UserList from "@/components/user/UserList";

export default function UsersList() {
  return (
    <div>
      <h1 className="sr-only">User Management Dashboard</h1>
      <UserList users={users} />
    </div>
  );
}
