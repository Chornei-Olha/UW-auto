import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  const cookieLocale = (await cookies()).get('MYNEXTAPP_LOCALE')?.value || 'uk';
  const locale = cookieLocale;

  return await getMessages(locale); // используем функцию с fallback
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
      locale: 'uk',
      messages: (await import(`../messages/uk.json`)).default,
    };
  }
}
