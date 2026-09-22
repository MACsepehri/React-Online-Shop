import '@/public/css/base.css'
import StyledComponentsRegistry from '@/lib/registry'
import Header from './components/Header'
import Footer from './components/Footer'

export default function RootLayout({ children }) {
    return (
        <html lang="en" dir="rtl">
            <body>
                <StyledComponentsRegistry>
                    <Header />
                    <main>
                        {children}
                        <Footer />
                    </main>
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}