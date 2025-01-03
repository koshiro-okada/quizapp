import BaseLayout from "@/components/base_layout";
import "@/styles/global.css";
import { NextUIProvider } from "@nextui-org/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
          <BaseLayout>{children}</BaseLayout>
        </NextUIProvider>
      </body>
    </html>
  );
}
