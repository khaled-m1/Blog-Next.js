import type { NextApiRequest, NextApiResponse } from "next";

export default function preview(req: NextApiRequest, res: NextApiResponse) {
  res.PreviewData({});
  res.writeHead(307, { Location: "/" });
  res.end();
}