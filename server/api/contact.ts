import type { IncomingMessage, ServerResponse } from 'http'
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Cấu hình transporter với Gmail (nên dùng App Password)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'phangiabaloc@gmail.com', // Thay bằng Gmail bạn muốn nhận
      pass: 'sqkv uvxn pckz vvwu'      // App password, KHÔNG dùng mật khẩu Gmail thường
    }
  })

  const mailOptions = {
    from: body.email,
    to: 'locphan90@gmail.com', // Gmail bạn muốn nhận
    subject: `[Liên hệ] ${body.subject}`,
    text: `
      Họ tên: ${body.name}
      Email: ${body.email}
      Số điện thoại: ${body.phone}
      Chủ đề: ${body.subject}
      Tin nhắn: ${body.message}
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    return { success: false, error }
  }
})