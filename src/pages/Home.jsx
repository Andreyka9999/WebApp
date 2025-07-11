import React from "react";


// Main page
export default function Home() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow p-8">
        <h1 className="text-4xl font-extrabold mb-4">Main Page</h1>
        <h2 className="text-lg font-semibold mb-2">Welcome to my store!</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ullam quaerat quae ipsam dignissimos odio doloremque repellendus quia consequuntur neque veniam eum, cupiditate vero facere corporis voluptatum nisi nostrum dolores?
        </p>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="font-semibold mb-2">Welcome to my store!</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi ullam quaerat quae ipsam dignissimos odio doloremque repellendus quia consequuntur neque veniam eum, cupiditate vero facere corporis voluptatum nisi nostrum dolores?
        </p>
      </div>
    </div>
  );
}
