import { Suspense } from "react"
import Render from './Render'

export default function Page() {
    return (
        <Suspense fallback={<div>در حال بارگذاری...</div>}>
            <Render />
        </Suspense>
    )
}