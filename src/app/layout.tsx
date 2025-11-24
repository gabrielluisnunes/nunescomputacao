import type { Metadata } from "next";
import StyleProvider from "../styles/StyledProvider";

export const metadata: Metadata = {
  title: "Nunes Computação | Soluções de Software Sob Medida",
  description: "Desenvolvimento de módulos, integrações e websites profissionais para otimizar processos empresariais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <StyleProvider>
          {children}
        </StyleProvider>
      </body>
    </html>
  );
}