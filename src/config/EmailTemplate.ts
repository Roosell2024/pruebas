export const EmailTemplate = (data: { name: string; email: string; message: string }) => {
  return `
  <div style="margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6;">
    <div style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #f4f4f4; border-radius: 8px;">
        <h2 style="color: #0A483A;">Información de contacto</h2>
        <p style="margin-bottom: 10px;"><strong style="color:#DCBF6F">Nombre:</strong> ${data.name}</p>
        <p style="margin-bottom: 10px;"><strong style="color:#DCBF6F">Correo:</strong> ${data.email}</p>
        <p><strong style="color:#DCBF6F">Mensaje:</strong></p>
        <p>${data.message}</p>
    </div>
    </div>
  `;
};
