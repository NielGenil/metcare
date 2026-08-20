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

<body style="margin:0;padding:0;background:#fafafa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#1a1a1a;">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:64px 20px;">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;">

<!-- Header -->
<tr>
<td style="padding:10px 48px 10px;">
<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td>
<img
src="https://metcare-nine.vercel.app/logo.jpg"
width="120"
alt="MetCare"
/>
</td>
<td align="right" style="font-size:12px;color:#a3a3a3;">
New Website Inquiry
</td>
</tr>
</table>
</td>
</tr>

<tr>
<td style="padding:0 48px 44px;border-top:1px solid #eeeeee;">

<h1 style="margin:36px 0 10px;font-size:19px;font-weight:600;color:#111111;">
You've received a new message
</h1>
<p style="margin:0 0 36px;font-size:14px;line-height:1.6;color:#767676;">
A visitor submitted the contact form on your website. Details are below.
</p>

<!-- Details -->
<table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;margin-bottom:36px;">

<tr>
<td style="padding:16px 0;color:#a3a3a3;width:100px;vertical-align:top;">Name</td>
<td style="padding:16px 0;color:#111111;">${name}</td>
</tr>

<tr style="border-top:1px solid #f2f2f2;">
<td style="padding:16px 0;color:#a3a3a3;vertical-align:top;">Email</td>
<td style="padding:16px 0;color:#111111;">${email}</td>
</tr>

<tr style="border-top:1px solid #f2f2f2;">
<td style="padding:16px 0;color:#a3a3a3;vertical-align:top;">Number</td>
<td style="padding:16px 0;color:#111111;">${subject}</td>
</tr>

</table>

<!-- Message -->
<div style="font-size:12px;color:#a3a3a3;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">
Message
</div>
<div style="font-size:14px;line-height:1.8;color:#333333;padding:24px 28px;border-left:2px solid #0F7B43;background:#fafafa;">
${message.replace(/\n/g, "<br>")}
</div>

</td>
</tr>

<!-- Footer -->
<tr>
<td style="padding:28px 48px 44px;border-top:1px solid #eeeeee;">
<p style="font-size:12px;color:#bfbfbf;margin:24px 0 0;">
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