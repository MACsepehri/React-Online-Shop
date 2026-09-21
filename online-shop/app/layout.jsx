import '@/public/css/base.css'
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
    return (
        <html lang="en" dir='rtl'>
            <body>
                <Header/>
                <main>
                    {children}
                    <Footer/>
                </main>
            </body>
        </html>
    );
}
