import GiftCardContent from './GiftCardContent';

export default async function GiftCardPage({params}: { params: any }) {
  const {locale} = await params;
  return <GiftCardContent locale={locale}/>;
}