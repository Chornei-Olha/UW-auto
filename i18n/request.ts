import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  const cookieLocale = (await cookies()).get('MYNEXTAPP_LOCALE')?.value || 'ua';
  const locale = cookieLocale;
  // const locale = 'uk';

  return { locale, messages: (await import(`../messages/${locale}.json`)).default };
});

export async function getMessages(locale: string) {
  try {
    return {
      locale,
      messages: (await import(`../messages/${locale}.json`)).default,
    };
  } catch {
    // если файла для локали нет → подставляем uk.json
    return {
      locale: 'ua',
      messages: (await import(`../messages/ua.json`)).default,
    };
  }
}
