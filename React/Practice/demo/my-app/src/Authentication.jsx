// conditional rendering

import React from "react";

export const Authentication = () => {
  const isUserAuthenticated = true; //login
  return (
    <div>
      {isUserAuthenticated ? (
        <h1>User Authenticated</h1>
      ) : (
        <h1>User not authenticated</h1>
      )}
    </div>
  );
};
