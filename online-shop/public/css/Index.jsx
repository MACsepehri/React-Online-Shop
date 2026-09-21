import styled from 'styled-components'

export const CatagoryBox = styled.div`
    width: 100%;
    margin-bottom: 30px;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    margin: auto;
    justify-content: center;
    border-bottom: 2px solid #e3e3e39a;
`;

export const CatagoryBoxContent = styled.div`
    margin: autp;
    text-align: center;
    justify-content: center;
`
export const FlexDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const MainPageCatagoryProductBox = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 10px;
    border: 2px solid #e0e0e0;
    background: #eeeeee;
    margin-right: 10px;
    margin-left: 10px;
    position: relative;
    overflow: hidden;
    margin-bottom: 20px;
`

export const MainPageCatagoryProductBoxContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    box-sizing: border-box;
`

export const ProductName = styled.span``
export const ProductDesc = styled.span`
    font-size: 14px;
    color: black;
`
export const ProductPrice = styled.span`
    position: absolute;
    bottom: 10px;
    justify-content: center;
    text-align: center;
    margin: auto;
    right: 50%;
    transform: translateX(50%)
`
export const ProductImage = styled.img`
    max-width: 128px;
    max-height: 128px;
    margin-bottom: 20px;
    object-fit: contain;
    mix-blend-mode: multiply;
`;