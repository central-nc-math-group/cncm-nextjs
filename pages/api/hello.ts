import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse<{ name: string }>) => {
  res.status(200).json({ name: 'John Doe' })
}
