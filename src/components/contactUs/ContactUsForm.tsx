import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useTransition } from 'transition-hook';
import { sendEmail } from '../../services/email.service';
import { Loading } from '../shared/layout/Loading';
import { EmailTemplate } from '../../config/EmailTemplate';
import { useMediaQuery } from '@uidotdev/usehooks';
import { mobileBreakpoint } from '../../config/constants';

const alertBgColor: { [key: string]: string } = {
  error: 'bg-error-700',
  success: 'bg-success-700',
};

export const ContactUsForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [alert, setAlert] = useState({ show: false, message: '', type: 'error' });
  const [isLoading, setIsLoading] = useState(false);
  const { stage, shouldMount } = useTransition(alert.show, 100);
  const { t } = useTranslation();
  const isSmallDevice = useMediaQuery(mobileBreakpoint);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const data = {
        subject: `Nuevo Mensaje de ${formData.name}`,
        html: EmailTemplate(formData),
      };
      const response = await sendEmail(data);
      if (response) {
        setAlert({ show: true, message: t('email_sent'), type: 'success' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setAlert({ show: true, message: t('email_not_sent'), type: 'error' });
      }
      setIsLoading(false);
    } catch (error) {
      setAlert({ show: true, message: t('email_not_sent'), type: 'error' });
      setIsLoading(false);
    }
  };
  return (
    <div
      className={`${isSmallDevice ? 'mt-20' : 'mt-96 h-sm:mt-72'}  relative grid-cols-2 gap-10 px-10 sm:grid xl:px-24`}
    >
      <div className="mb-10 sm:mb-0 lg:w-80 lg:h-sm:w-96 xl:h-md:w-114">
        <h1 className="text-5xl font-extrabold uppercase text-gold sm:text-green-300">{t('contact_us.title')}</h1>
        <p className="pt-5 text-justify text-lg font-normal text-green-300">{t('contact_us.form_text')}</p>
      </div>

      {isLoading && <Loading />}

      <form onSubmit={handleSubmit} className="relative lg:w-96 xl:w-144">
        <div className="mb-4">
          <label className="mb-2 block font-bold uppercase text-green-300" htmlFor="name">
            {t('contact_us.full_name')}
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-green-300 shadow focus:outline-none"
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block font-bold uppercase text-green-300" htmlFor="email">
            {t('contact_us.email')}
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-green-300 shadow focus:outline-none"
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block font-bold uppercase text-green-300" htmlFor="message">
            {t('contact_us.message')}
          </label>
          <textarea
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-green-300 shadow focus:outline-none"
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChangeTextArea}
          />
        </div>
        <div className="flex items-center justify-center gap-10 sm:justify-end">
          <button
            className="focus:shadow-outline w-36 rounded border border-green-300 bg-white-50 px-4 py-2 font-bold uppercase text-green-300 hover:bg-green-300 hover:text-white-50 focus:outline-none"
            type="button"
            onClick={() => setFormData({ name: '', email: '', message: '' })}
          >
            {t('contact_us.clean')}
          </button>
          <button
            className="focus:shadow-outline w-36 rounded bg-green-300 px-4 py-2 font-bold uppercase text-white-50 hover:bg-green-200 focus:outline-none"
            type="submit"
          >
            {t('contact_us.send')}
          </button>
        </div>

        {shouldMount && (
          <div
            className={`relative my-4 rounded border-0 px-6 py-4 text-white-50 ${alertBgColor[alert.type]}`}
            style={{
              transition: '.3s',
              opacity: stage === 'enter' ? 1 : 0,
            }}
          >
            <span className="mr-8 inline-block align-middle">{alert.message}</span>
            <button
              className="bg-transparent absolute right-0 top-0 mr-6 mt-4 text-2xl font-semibold leading-none outline-none focus:outline-none"
              onClick={() => setAlert({ show: false, message: '', type: 'error' })}
              type="button"
            >
              <span>×</span>
            </button>
          </div>
        )}
      </form>
    </div>
  );
};
