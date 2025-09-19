import { adminAuth } from "../../lib/firebaseAdmin";

export default async function handler(req: any, res: any) {
  try {
    const { token } = req.body;

    if (!token) {
      return res
        .status(400)
        .json({ success: false, error: "Token is required" });
    }

    const decoded = await adminAuth.verifyIdToken(token);

    res
      .status(200)
      .json({ success: true, uid: decoded.uid, email: decoded.email });
  } catch (error: any) {
    res.status(401).json({ success: false, error: error.message });
  }
}
