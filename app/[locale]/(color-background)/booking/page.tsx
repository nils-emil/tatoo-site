import BookingForm from './BookingForm'; // Adjust path as necessary to where you saved the file above

export default async function BookingPage({params}: { params: any }) {
  const {locale} = await params;
  return <BookingForm locale={locale}/>;
}