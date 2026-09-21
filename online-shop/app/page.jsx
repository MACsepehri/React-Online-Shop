import { CatagoryBox, CatagoryBoxContent, FlexDiv,
  MainPageCatagoryProductBox, MainPageCatagoryProductBoxContent
} from "@/public/css/Index"
import RenderProductBox from "./components/RenderProductBox"
import { AllProducts } from "./product-data/data"
import Link from "next/link"

const CATEGORIES = [
    { fa: 'موبایل و تبلت',              en: 'mobile_and_tablet',    products: AllProducts.mobile },
    { fa: 'لپ تاپ و کامپیوتر',          en: 'computer',             products: AllProducts.computer },
    { fa: 'ایرپاد، هدفون و هنزفری',      en: 'headphone_and_airpod', products: AllProducts.headphone },
    { fa: 'ساعت',                       en: 'smart_watch',          products: AllProducts.watch },
    { fa: 'تجهیزات گیمینگ',              en: 'gaming_objects',       products: AllProducts.gaming },
]

export default function Home() {
    return (
        <>
            <div><h1>به سایت ما خوش آمدید!</h1></div>
            <div>
                {CATEGORIES.map((cat, index) => (
                    <CatagoryBox key={cat.en}>
                        <CatagoryBoxContent>
                        <h2>{cat.fa}</h2>
                        <FlexDiv>
                            <RenderProductBox sliceTo={4} products={cat.products} />
                            <div>
                            <Link href={`/product?catagory=${cat.en}`} className="no-decoration-link">
                                <MainPageCatagoryProductBox>
                                <MainPageCatagoryProductBoxContent style={{ marginTop: '115px' }}>
                                    <span>مشاهده ی بیشتر</span>
                                </MainPageCatagoryProductBoxContent>
                                </MainPageCatagoryProductBox>
                            </Link>
                            </div>
                        </FlexDiv>
                        <br />
                        </CatagoryBoxContent>
                    </CatagoryBox>
                ))}
            </div>
        </>
    )
}