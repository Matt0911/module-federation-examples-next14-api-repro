export default async function handler(req, res) {
  try {
    const env = process.env.NODE_ENV;
    console.info('Running in environment', env);
    return res.status(200).send({ env });
  } catch (err) {
    return res.status(500).send({ status: res.status, error: err.message });
  }
}
