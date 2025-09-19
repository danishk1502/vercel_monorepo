import { adminAuth } from "../../lib/firebaseAdmin";

export default async function handler(req: any, res: any) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, error: "Email and password are required" });
    }

    const user = await adminAuth.createUser({ email, password });

    res.status(200).json({ success: true, uid: user.uid });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
}
