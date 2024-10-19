import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function MessageBox() {
  return (
    <div className="h-[457px] w-[800px] rounded-[4px] shadow-custom-shadow">
      <form className="px-[32px] py-10 font-poppins" action="">
        <div className="flex gap-[1rem]">
          <Input
            placeholder="Your Name"
            required
            className="h-[50] w-[235px] rounded-none bg-secondary"
            type="text"
          />
          <Input
            placeholder="Your Email"
            className="h-[50] w-[235px] rounded-none bg-secondary"
            type="email"
          />
          <Input
            placeholder="Your Phone"
            className="h-[50] w-[235px] rounded-none bg-secondary"
            type="number"
          />
        </div>
        <div className="my-[2rem]">
          <Textarea
            className="h-[207px] w-[737px] bg-secondary"
            placeholder="Type your message here."
          />
        </div>
        <div className="flex justify-end">
          <Button className="h-[56px] w-[215px] rounded-[4px] px-12 py-4 font-poppins text-[1rem] font-medium leading-6">
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
}
