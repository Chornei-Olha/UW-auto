import React from 'react';
import '../styles/index.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';
import { AbstractIntlMessages } from 'next-intl';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const messages: AbstractIntlMessages = await getMessages({ locale: params.locale });
  const title = messages.TabTitles?.home;
  return {
    title,
    icons: {
      icon: [
        { url: '/favicon.png', type: 'image/png' }, // или image/x-icon, если .ico
      ],
    },
  };
}
// export const metadata = {
//   title: 'Senso',
//   description: 'Ihre vertrauenswürdige Reinigungsfirma mit System, Plan und VerantwortungS',
//   icons: {
//     icon: [{ url: '/favicon.png', type: 'image/x-icon' }],
//   },
// };

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
