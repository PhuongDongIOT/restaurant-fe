"use client";

import {
    Dialog,
    DialogContent
} from "@/components/ui/dialog"
import { useModal } from "./modal-provider"
import ProductOverview from "./product-overviews";

export function DialogDemo() {
    const { modal, setModal } = useModal()
    return (
        <Dialog open={modal} onOpenChange={() => setModal(false)}>
            <DialogContent className="h-screen max-w-6xl">
                <div className="h-screen overflow-y-scroll">
                    <ProductOverview />
                </div>
            </DialogContent>
        </Dialog>
    )
}
