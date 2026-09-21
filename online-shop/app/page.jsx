import { CatagoryBox, CatagoryBoxContent, FlexDiv,
    MainPageCatagoryProductBox, MainPageCatagoryProductBoxContent,
    ProductName, ProductDesc, ProductPrice, ProductImage
 } from "@/public/css/Index"
import { AllProducts } from "./product-data/data"
import Link from "next/link"

export default function Home() {
    
    let catagories = [
        'موبایل و تبلت',
        'لپ تاپ و کامپیوتر',
        'ایرپاد، هدفون و هنزفری',
        'ساعت',
        'تجهیزات گیمینگ'
    ]

    let en_catagories = [
        'mobile_and_tablet',
        'computer',
        'headphone_and_airpod',
        'smart_watch',
        'gaming_objects',
    ]

    let productAsList = [
        AllProducts.mobile,
        AllProducts.computer,
        AllProducts.headphone,
        AllProducts.watch,
        AllProducts.gaming,
    ]

    return (
        <>
            <div>
                <h1>به سایت ما خوش آمدید!</h1>
            </div>
            <div>
                {
                    catagories.map((value,index)=>{
                        return (
                            <CatagoryBox key={index}>
                                <CatagoryBoxContent>
                                    <h2>{value}</h2>
                                    <FlexDiv>
                                        {
                                            productAsList[index].slice(0,5).map((info)=>{
                                                return (
                                                    <Link href={`/product?id=${info.id}`} className="no-decoration-link" key={index}>
                                                        <MainPageCatagoryProductBox>
                                                            <MainPageCatagoryProductBoxContent>
                                                                <ProductImage src={info.image} /><br />
                                                                <ProductName className="product-name">{info.name}</ProductName><br />
                                                                <ProductDesc className="product-desc">{info.desc}</ProductDesc><br />
                                                                <ProductPrice className="product-price">{info.price} تومان</ProductPrice>
                                                            </MainPageCatagoryProductBoxContent>
                                                        </MainPageCatagoryProductBox>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </FlexDiv>
                                    <br />
                                </CatagoryBoxContent>
                            </CatagoryBox>
                        )
                    })
                }
            </div>
        </>
    )
}