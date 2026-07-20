export function adminEmail({ name, email, subject, message }) {
  const date = new Date().toLocaleString("en-PH", {
    dateStyle: "full",
    timeStyle: "short",
  });

  return `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body style="margin:0;padding:0;background:#f4f7f6;font-family:Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
<tr>
<td align="center">

<table width="650" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;">

<tr>
<td align="center" style="background:#0F7B43;padding:40px;">

<img
src="https://metcare-alpha.vercel.app/logo.jpg"
width="90"
alt="MetCare"
/>

<h1 style="margin:20px 0 0;color:#fff;font-size:28px;">
MetCare
</h1>

<p style="margin-top:8px;color:#d8f3dc;">
Biomedical Engineering Solutions
</p>

</td>
</tr>

<tr>
<td style="padding:40px;">

<h2 style="margin-top:0;color:#111827;">
📩 New Website Inquiry
</h2>

<p style="color:#6b7280;">
A visitor submitted the contact form.
</p>

<hr style="margin:30px 0;">

<table width="100%" cellpadding="10">

<tr>
<td width="150"><strong>Name</strong></td>
<td>${name}</td>
</tr>

<tr>
<td><strong>Email</strong></td>
<td>${email}</td>
</tr>

<tr>
<td><strong>Subject</strong></td>
<td>${subject}</td>
</tr>

<tr>
<td valign="top"><strong>Message</strong></td>

<td style="
background:#f8fafc;
padding:20px;
border-radius:8px;
line-height:1.7;
">
${message.replace(/\n/g, "<br>")}
</td>

</tr>

</table>

<hr style="margin:30px 0;">

<p style="font-size:13px;color:#9ca3af;">
Received on ${date}
</p>

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`;
}