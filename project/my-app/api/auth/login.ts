import { adminAuth } from "../../lib/firebaseAdmin";

export default async function handler(req: any, res: any) {
  try {
    const { uid } = req.body;

    if (!uid) {
      return res.status(400).json({ success: false, error: "UID is required" });
    }

    const token = await adminAuth.createCustomToken(uid);

    res.status(200).json({ success: true, token });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
}
