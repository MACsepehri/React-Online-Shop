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
    const productID = searchParams.get("id")
    const allProductsFlat = Object.values(AllProducts).flat()
    const product = allProductsFlat.find((p) => p.id === productID)

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

    if (productID !== null) {
        if (product) {
            return (
                <div>
                    <img src={product.image} alt="" />
                    <h1>{product.name}</h1>
                    <p>{product.desc}</p>
                    <p>{product.price} تومان</p>
                    <p>{product.made_by}</p>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>محصول پیدا نشد.</h1>
                </div>
            )
        }
    }

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
                            <RenderProductBox slice_to={1} productAsList={product} index={index} />
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