import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  const cookieLocale = (await cookies()).get('MYNEXTAPP_LOCALE')?.value || 'ua';
  const locale = cookieLocale;

  try {
    return {
      locale,
      messages: (await import(`../messages/${locale}.json`)).default,
    };
  } catch {
    // fallback, если файла нет
    return {
      locale: 'ua',
      messages: (await import(`../messages/ua.json`)).default,
    };
  }
});
