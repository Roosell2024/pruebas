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
    <div className={`${isSmallDevice ? 'mt-20' : 'mt-56'}  xl:px-24 px-10 sm:grid grid-cols-2 gap-10`}>
      <div className="xl:h-md:w-114 lg:h-sm:w-96 lg:w-80 sm:mb-0 mb-10">
        <h1 className="uppercase text-5xl font-extrabold sm:text-green-300 text-gold">{t('contact_us.title')}</h1>
        <p className="pt-5 text-green-300 text-lg font-normal text-justify">{t('contact_us.form_text')}</p>
      </div>

      {isLoading && <Loading />}

      <form onSubmit={handleSubmit} className="xl:w-144 lg:w-96 relative">
        <div className="mb-4">
          <label className="block text-green-300 font-bold mb-2 uppercase" htmlFor="name">
            {t('contact_us.full_name')}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-green-300 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-4">
          <label className="block text-green-300 font-bold mb-2 uppercase" htmlFor="email">
            {t('contact_us.email')}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-green-300 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-4">
          <label className="block text-green-300 font-bold mb-2 uppercase" htmlFor="message">
            {t('contact_us.message')}
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-green-300 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChangeTextArea}
          />
        </div>
        <div className="flex items-center sm:justify-end justify-center gap-10">
          <button
            className="bg-white-50 hover:bg-green-300 w-36 hover:text-white-50 text-green-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline border border-green-300 uppercase"
            type="button"
            onClick={() => setFormData({ name: '', email: '', message: '' })}
          >
            {t('contact_us.clean')}
          </button>
          <button
            className="bg-green-300 w-36 hover:bg-green-200 text-white-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase"
            type="submit"
          >
            {t('contact_us.send')}
          </button>
        </div>

        {shouldMount && (
          <div
            className={`text-white-50 px-6 py-4 border-0 rounded relative my-4 ${alertBgColor[alert.type]}`}
            style={{
              transition: '.3s',
              opacity: stage === 'enter' ? 1 : 0,
            }}
          >
            <span className="inline-block align-middle mr-8">{alert.message}</span>
            <button
              className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
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
