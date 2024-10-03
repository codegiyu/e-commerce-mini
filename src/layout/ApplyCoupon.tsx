import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ApplyCoupon() {
  return (
    <div className="flex items-center gap-4">
      <Input
        className="w-[300px] text-[1rem] font-normal leading-6 placeholder:opacity-50 h-[56px]"
        type="text"
        placeholder="Coupon Code"
      />
      <Button className="bg-[#DB4444] text-[1rem] leading-6 font-medium w-[211px] text-[#FAFAFA] px-12 py-4 rounded-[4px] h-[56px]">Apply Coupon</Button>
    </div>
  );
}
