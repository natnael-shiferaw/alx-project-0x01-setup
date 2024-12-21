import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-lg mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">Username: {username}</p>
      <p className="text-gray-600">Email: {email}</p>
      <p className="text-gray-600">
        Address: {address.street}, {address.suite}, {address.city} ({address.zipcode})
      </p>
      <p className="text-gray-600">Phone: {phone}</p>
      <p className="text-gray-600">Website: {website}</p>
      <p className="text-gray-600">Company: {company.name}</p>
      <p className="italic text-gray-500">{company.catchPhrase}</p>
    </div>
  );
};

export default UserCard;
