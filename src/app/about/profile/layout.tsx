export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>TITLE</h1>
      <div>{children}</div>
    </>
  );
}
