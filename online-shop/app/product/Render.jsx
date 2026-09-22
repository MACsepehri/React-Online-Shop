"use client"

import { useMemo } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { AllProducts } from "../product-data/data"
import { CatagoryBox, CatagoryBoxContent, FlexDiv } from "@/public/css/Index"
import RenderProductBox from "../components/RenderProductBox"

const CATEGORIES = [
    { fa: 'موبایل و تبلت',           en: 'mobile_and_tablet',    products: AllProducts.mobile },
    { fa: 'لپ تاپ و کامپیوتر',       en: 'computer',             products: AllProducts.computer },
    { fa: 'ایرپاد، هدفون و هنزفری',  en: 'headphone_and_airpod', products: AllProducts.headphone },
    { fa: 'ساعت',                    en: 'smart_watch',          products: AllProducts.watch },
    { fa: 'تجهیزات گیمینگ',           en: 'gaming_objects',       products: AllProducts.gaming },
]

export default function Render() {
    const searchParams = useSearchParams()
    const catagory_res = searchParams.get("catagory")
    const productID = searchParams.get("id")

    const product = useMemo(() => {
        if (!productID) return null
        return Object.values(AllProducts)
            .flat()
            .find((p) => String(p.id) === productID)
    }, [productID])

    if (productID !== null) {
        if (!product) return <h1>محصول پیدا نشد.</h1>
        return (
            <div>
                <img src={product.image} alt={product.name} />
                <h1>{product.name}</h1>
                <p>{product.desc}</p>
                <p>{product.price} تومان</p>
                <p>{product.made_by}</p>
            </div>
        )
    }

    const cat = CATEGORIES.find((c) => c.en === catagory_res)
    if (!cat) return <h1>دسته‌بندی یافت نشد</h1>

    return (
        <>
            <div><h1>{cat.fa}</h1></div>
            <CatagoryBox>
                <CatagoryBoxContent>
                    <FlexDiv>
                        <RenderProductBox sliceTo={20} products={cat.products} />
                    </FlexDiv>
                </CatagoryBoxContent>
            </CatagoryBox>
            <br />
            <span>
                برای مشاهده‌ی دسته‌بندی‌های بیشتر <Link href={'/'}>کلیک کنید!</Link>
            </span>
        </>
    )
}