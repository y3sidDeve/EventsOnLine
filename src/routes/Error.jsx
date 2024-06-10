import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  return (
    <div>
      <h1>Error</h1>
      <p> {error.statusText || error.message} </p>

      <p> {error.data} </p>

      {console.log(error)}
    </div>
  );
}

