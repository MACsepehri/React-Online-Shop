import Link from "next/link"

export default function Header() {
    return (
        <header>
            <div className="header-left">
                <h2>React Online Shop</h2>
            </div>
            <div className="header-right">
                <nav>
                    <Link href={'/auth/login'} id="login-btn">ورود</Link>
                    <Link href={'/auth/register'} id="register-btn">ثبت نام</Link><br />
                    <Link href={'/'}>صفحه ی اصلی</Link>
                    <Link href={'/dashborad'}>پنل کاربری</Link>
                    <Link href={'/product/all'}>مشاهده ی تمامی محصولات</Link>
                </nav>
            </div>
        </header>
    )
}