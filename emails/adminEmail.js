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

<table width="100%" cellpadding="0" cellspacing="0" style="padding:48px 20px;">
<tr>
<td align="center">

<table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;">

<!-- Header -->
<tr>
<td style="padding-bottom:32px;border-bottom:1px solid #eaeaea;">
<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td>
<span style="font-size:15px;font-weight:600;letter-spacing:0.3px;color:#0F7B43;">
MetCare
</span>
<div style="font-size:12px;color:#9a9a9a;margin-top:2px;">
Biomedical Engineering Solutions
</div>
</td>
<td align="right" style="font-size:12px;color:#9a9a9a;">
New Inquiry
</td>
</tr>
</table>
</td>
</tr>

<!-- Title -->
<tr>
<td style="padding:32px 0 8px;">
<h1 style="margin:0;font-size:20px;font-weight:600;color:#111111;">
Website Contact Form
</h1>
<p style="margin:6px 0 0;font-size:14px;color:#767676;">
A visitor just reached out through the site.
</p>
</td>
</tr>

<!-- Details -->
<tr>
<td style="padding:24px 0;">
<table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;">

<tr>
<td style="padding:10px 0;color:#9a9a9a;width:110px;vertical-align:top;">Name</td>
<td style="padding:10px 0;color:#111111;font-weight:500;">${name}</td>
</tr>

<tr style="border-top:1px solid #f0f0f0;">
<td style="padding:10px 0;color:#9a9a9a;vertical-align:top;">Email</td>
<td style="padding:10px 0;color:#111111;font-weight:500;">${email}</td>
</tr>

<tr style="border-top:1px solid #f0f0f0;">
<td style="padding:10px 0;color:#9a9a9a;vertical-align:top;">Number</td>
<td style="padding:10px 0;color:#111111;font-weight:500;">${subject}</td>
</tr>

</table>
</td>
</tr>

<!-- Message -->
<tr>
<td style="padding-top:8px;">
<div style="font-size:12px;color:#9a9a9a;margin-bottom:8px;text-transform:uppercase;letter-spacing:0.5px;">
Message
</div>
<div style="font-size:14px;line-height:1.7;color:#333333;background:#fafafa;padding:16px;border-left:2px solid #0F7B43;">
${message.replace(/\n/g, "<br>")}
</div>
</td>
</tr>

<!-- Footer -->
<tr>
<td style="padding-top:40px;border-top:1px solid #eaeaea;margin-top:32px;">
<p style="font-size:12px;color:#b3b3b3;margin:24px 0 0;">
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