import React from "react";

function ErrorPage(err) {
  console.log(err.err);

  return !err.err ? (
    <h1>Uh oh 404 invalid URL</h1>
  ) : (
    <div>
      <h1>ERROR</h1>
      <p>{err.err.response.status}</p>
      <p>{err.err.response.data.msg}</p>
    </div>
  );
}

export default ErrorPage;
