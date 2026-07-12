import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rony | Full Stack Software Engineer",
  description:
    "Portfolio of Rony Barua, a backend-focused Full Stack Software Engineer specializing in building modern, scalable web applications. Explore my projects, skills, and experience.",
};

// Sets the theme class before paint to avoid a flash of the wrong theme.
// Defaults to the visitor's OS preference; a manual toggle is persisted.
const themeScript = `
(function(){try{
  var stored = localStorage.getItem('theme');
  var dark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.classList.toggle('dark', dark);
}catch(e){}})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
