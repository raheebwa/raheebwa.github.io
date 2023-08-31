import { ChakraProviderWrapper } from '@/components/providers'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Aheebwa Ramadhan\'s Portfolio',
  description: 'A portfolio showcasing my work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProviderWrapper>
          {children}
        </ChakraProviderWrapper>

      </body>
    </html>
  )
}
