// app/[locale]/aftercare/page.tsx
import AftercareContent from './AftercareContent';

export default async function AftercarePage({params}: { params: any }) {
  const {locale} = await params;

  return <AftercareContent locale={locale}/>;
}