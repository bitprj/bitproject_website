// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    let email = req.body.email
    res.status(200).json({ email: email })
  }
  