export default function handler(req: any, res: any) {
  res.status(200).json({
    success: true,
    message: "Test API is working!",
    method: req.method,
    query: req.query,
    body: req.body,
  });
}
