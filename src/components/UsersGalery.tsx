import React from "react";
import User from "./ui/User";
import { UserProps } from "./ui/User";

export default function UsersGalery({ allUsers }: UserProps[]) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12 lg:mt-24">
      {allUsers.map((user, index) => (
        <User
          key={index}
          name={user.name}
          subject={user.subject}
          image={user.image}
          slug={user.slug}
        />
      ))}
    </div>
  );
}
