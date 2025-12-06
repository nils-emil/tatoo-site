// app/[locale]/store/giftcard/page.tsx (or wherever this page is located)

import GiftCardContent from './GiftCardContent'; // Update path if necessary

export default async function GiftCardPage({params}: { params: any }) {
  const {locale} = await params;
  return <GiftCardContent locale={locale}/>;
}