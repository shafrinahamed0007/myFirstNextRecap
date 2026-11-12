import Link from "next/link";

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <div className="my-5">
      <h2 className="text-3xl text-green-500">Users are comming soon...</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-10/12 mx-auto my-5">
        {users.map((user) => (
          <div
            key={user.id}
            className="card border-2 border-green-500 text-primary-content w-96"
          >
            <div className="card-body">
              <h2 className="card-title">Name: {user?.name || " "}</h2>
              <p>e-mail: {user?.email || " "}</p>
              <p>Phone Number: {user?.phone || " "}</p>
              <div className="card-actions justify-end">
                <Link href={`/users/${user.id}`}>
                  <button className="btn">More Details...</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
