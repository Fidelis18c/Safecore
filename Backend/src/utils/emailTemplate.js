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

const FONT = "Arial, Helvetica, sans-serif";

// fields: array of { label, value }
export const renderNotificationEmail = ({ heading, subtitle, fields }) => {
  const rows = fields
    .map(
      ({ label, value }, i) => `
        <tr style="background-color:${i % 2 === 0 ? '#FFFFFF' : '#F8FAFB'};">
          <td style="padding:14px 20px; font-family:${FONT}; font-size:11px; font-weight:bold; letter-spacing:0.6px; text-transform:uppercase; color:#6E767F; width:150px; vertical-align:top; border-left:3px solid #2E9D42; border-bottom:1px solid #EAEDF1;">
            ${label}
          </td>
          <td style="padding:14px 20px; font-family:${FONT}; font-size:14px; line-height:1.5; color:#2D3748; vertical-align:top; border-bottom:1px solid #EAEDF1;">
            ${escapeHtml(value)}
          </td>
        </tr>`
    )
    .join('');

  return `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#EEF1F5; padding:40px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#FFFFFF; border-radius:10px; overflow:hidden; box-shadow:0 4px 16px rgba(20,41,77,0.08);">
          <tr>
            <td style="background-color:#14294D; padding:28px 32px;">
              <span style="font-family:${FONT}; font-size:19px; font-weight:bold; color:#FFFFFF; letter-spacing:0.4px;">
                SAFE Core Company Limited
              </span>
              <br/>
              <span style="font-family:${FONT}; font-size:12px; color:#9FB0CC; letter-spacing:0.3px;">
                Safety First, Productivity Always
              </span>
            </td>
          </tr>
          <tr>
            <td style="height:4px; background-color:#2E9D42; line-height:4px; font-size:4px;">&nbsp;</td>
          </tr>
          <tr>
            <td style="padding:32px 32px 8px 32px;">
              <span style="font-family:${FONT}; font-size:21px; font-weight:bold; color:#14294D;">
                ${heading}
              </span>
              ${subtitle ? `<br/><span style="font-family:${FONT}; font-size:13px; color:#6E767F;">${subtitle}</span>` : ''}
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px 32px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #EAEDF1; border-radius:8px; overflow:hidden;">
                ${rows}
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color:#F8FAFB; padding:20px 32px; border-top:1px solid #EAEDF1;">
              <span style="font-family:${FONT}; font-size:12px; color:#6E767F; line-height:1.6;">
                Automated notification from the SAFE Core website &middot; ${new Date().toLocaleString('en-GB', { timeZone: 'Africa/Dar_es_Salaam' })}
                <br/>
                Dar es Salaam, Tanzania &middot; +255 694 007 665 &middot; info@safecoretanzania.co.tz
              </span>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`;
};
