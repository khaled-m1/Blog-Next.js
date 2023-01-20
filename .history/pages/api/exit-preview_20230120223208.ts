import type { NextApiRequest, NextApiResponse } from "next";

export default function preview(req: NextApiRequest, res: NextApiResponse) {
  res.clearPrevi ewData({});
  res.writeHead(307, { Location: "/" });
  res.end();
}
