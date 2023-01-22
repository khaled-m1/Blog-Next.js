import Link from "next/link";
import React from "react";

function ClientSideRoute({ children, route, }: { children: React.ReactNode; rou }) {
  return <Link>{children}</Link>;
}

export default ClientSideRoute;
