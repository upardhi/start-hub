export default function UserDetails({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>User Details {params.id}</h1>
    </div>
  );
}
