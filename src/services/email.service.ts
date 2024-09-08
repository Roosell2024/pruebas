export const sendEmail = async (data: { subject: string; html: string; file?: File }) => {
  const formData = new FormData();
  formData.append('subject', data.subject);
  formData.append('html', data.html);
  if (data.file) formData.append('file', data.file);

  const response = await fetch(`${import.meta.env.VITE_URL_API}/sendEmailFunction`, {
    method: 'POST',
    body: formData,
  });
  return response.ok;
};
