import Header from "@/components/header/index";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      <Header />
      {children}
    </section>
  );
}
