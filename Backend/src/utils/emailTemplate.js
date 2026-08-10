const escapeHtml = (value) => {
  if (value === null || value === undefined || value === '') return '&mdash;';
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/\n/g, '<br/>');
};

// fields: array of { label, value }
export const renderNotificationEmail = ({ heading, fields }) => {
  const rows = fields
    .map(
      ({ label, value }, i) => `
        <tr style="background-color:${i % 2 === 0 ? '#FFFFFF' : '#F3F5F8'};">
          <td style="padding:12px 20px; font-family:Arial, Helvetica, sans-serif; font-size:13px; font-weight:bold; color:#14294D; width:140px; vertical-align:top; border-bottom:1px solid #EAEDF1;">
            ${label}
          </td>
          <td style="padding:12px 20px; font-family:Arial, Helvetica, sans-serif; font-size:14px; color:#2D3748; vertical-align:top; border-bottom:1px solid #EAEDF1;">
            ${escapeHtml(value)}
          </td>
        </tr>`
    )
    .join('');

  return `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F3F5F8; padding:32px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#FFFFFF; border-radius:8px; overflow:hidden; box-shadow:0 1px 3px rgba(0,0,0,0.1);">
          <tr>
            <td style="background-color:#14294D; padding:24px 32px;">
              <span style="font-family:Arial, Helvetica, sans-serif; font-size:18px; font-weight:bold; color:#FFFFFF; letter-spacing:0.5px;">
                SAFE Core Company Limited
              </span>
            </td>
          </tr>
          <tr>
            <td style="height:4px; background-color:#2E9D42; line-height:4px; font-size:4px;">&nbsp;</td>
          </tr>
          <tr>
            <td style="padding:28px 32px 8px 32px;">
              <span style="font-family:Arial, Helvetica, sans-serif; font-size:20px; font-weight:bold; color:#14294D;">
                ${heading}
              </span>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 28px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #EAEDF1; border-radius:6px; overflow:hidden;">
                ${rows}
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color:#F3F5F8; padding:16px 32px;">
              <span style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#6E767F;">
                Automated notification from the SAFE Core website &middot; ${new Date().toLocaleString('en-GB', { timeZone: 'Africa/Dar_es_Salaam' })}
              </span>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`;
};
