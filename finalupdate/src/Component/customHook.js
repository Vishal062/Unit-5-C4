import { Timeout } from "./TimeInterval";

export default function () {
  const isReady = Timeout(5000);

  return (
    <div>
      <h2>User registration Hook Represent</h2>
      {isReady && "User Registration Start in 10 sec With hooks"}
    </div>
  );
}
