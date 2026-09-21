"use client"

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { AllProducts } from "../product-data/data";
import {
    CatagoryBox, CatagoryBoxContent, FlexDiv,
    MainPageCatagoryProductBox, MainPageCatagoryProductBoxContent,
    ProductName, ProductDesc, ProductPrice, ProductImage
} from "@/public/css/Index"

export default function Product() {
    const searchParams = useSearchParams()
    const catagory_res = searchParams.get("catagory")

    const catagories = [
        'موبایل و تبلت',
        'لپ تاپ و کامپیوتر',
        'ایرپاد، هدفون و هنزفری',
        'ساعت',
        'تجهیزات گیمینگ'
    ]

    const en_catagories = [
        'mobile_and_tablet',
        'computer',
        'headphone_and_airpod',
        'smart_watch',
        'gaming_objects',
    ]

    const productAsList = [
        AllProducts.mobile,
        AllProducts.computer,
        AllProducts.headphone,
        AllProducts.watch,
        AllProducts.gaming,
    ]

    const index = en_catagories.indexOf(catagory_res ?? "")
    const catagory = index !== -1 ? catagories[index] : null
    const products = index !== -1 ? productAsList[index] : []

    if (!catagory) {
        return <h1>دسته‌بندی یافت نشد</h1>
    }

    return (
        <>
            <div>
                <h1>{catagory}</h1>
            </div>
            <div>
                <CatagoryBox>
                    <CatagoryBoxContent>
                        <FlexDiv>
                            {products.map((info) => (
                                <Link
                                    href={`/product?id=${info.id}`}
                                    className="no-decoration-link"
                                    key={info.id}
                                >
                                    <MainPageCatagoryProductBox>
                                        <MainPageCatagoryProductBoxContent>
                                            <ProductImage src={info.image} /><br />
                                            <ProductName className="product-name">{info.name}</ProductName><br />
                                            <ProductDesc className="product-desc">{info.desc}</ProductDesc><br />
                                            <ProductPrice className="product-price">{info.price} تومان</ProductPrice>
                                        </MainPageCatagoryProductBoxContent>
                                    </MainPageCatagoryProductBox>
                                </Link>
                            ))}
                        </FlexDiv>
                        <br />
                    </CatagoryBoxContent>
                </CatagoryBox>
                <span>
                    برای مشاهده ی دسته بنده های بیشتر <Link href={'/'}>کلیک کنید!</Link>
                </span>
            </div>
        </>
    )
}