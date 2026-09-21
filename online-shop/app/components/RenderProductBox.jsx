import { AllProducts } from "../product-data/data"
import {
  MainPageCatagoryProductBox, MainPageCatagoryProductBoxContent,
  ProductName, ProductDesc, ProductPrice, ProductImage
} from "@/public/css/Index"
import Link from "next/link"

export default function RenderProductBox({ sliceTo = 4, products = [] }) {
    return (
        <>
            {products.slice(0, sliceTo).map((info) => (
                <Link
                href={`/product?id=${info.id}`}
                className="no-decoration-link"
                key={info.id}
                style={{ display: 'block' }}
                >
                <MainPageCatagoryProductBox>
                    <MainPageCatagoryProductBoxContent>
                    <ProductImage src={info.image} alt={info.name} />
                    <ProductName className="product-name">{info.name}</ProductName>
                    <ProductDesc className="product-desc">{info.desc}</ProductDesc>
                    <ProductPrice className="product-price">{info.price} تومان</ProductPrice>
                    </MainPageCatagoryProductBoxContent>
                </MainPageCatagoryProductBox>
                </Link>
            ))}
        </>
    )
}