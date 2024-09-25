import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function Profile() {
  return (
    <main className="w-[870px] mb-8 mx-auto h-[630px] rounded-[4px] shadow-custom-shadow">
      <div className="px-[80px] pt-10">
        <h1 className="font-[500] mb-4 text-[20px] text-[#DB4444] leading-7">
          Edit Your Profile
        </h1>
        <form className="text-[1rem] text-[#000000] flex flex-col gap-6">
          <div className="flex gap-[3.125rem] ">
            <div>
              <Label>First Name</Label>
              <Input
                className="w-[330px] mt-[0.5rem]  bg-[#F5F5F5]"
                type="text"
                placeholder="Md"
              />
            </div>
            <div>
              <Label>Last Name</Label>
              <Input
                className="w-[330px] mt-[0.5rem]  bg-[#F5F5F5]"
                type="text"
                placeholder="Rimel"
              />
            </div>
          </div>
          <div className="flex gap-[3.125rem]">
            <div>
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="rimel111@gmail.com"
                className="w-[330px] mt-[0.5rem]  bg-[#F5F5F5]"
              />
            </div>
            <div>
              <Label>Address</Label>
              <Input
                className="w-[330px] mt-[0.5rem]  bg-[#F5F5F5]"
                type="text"
                placeholder="Kingston, 5236, United State"
              />
            </div>
          </div>
          <div className="flex flex-col ">
            <Label>Password Changes</Label>
            <Input
              className="w-[710px] mt-[0.5rem] mb-6 h-[50px] bg-[#F5F5F5]"
              type="text"
              placeholder="Current Password"
            />
            <Input
              className="w-[710px] mb-6 h-[50px] bg-[#F5F5F5]"
              type="password"
              placeholder="New Password"
            />
            <Input
              className="w-[710px] h-[50px] bg-[#F5F5F5]"
              type="password"
              placeholder="Confirm New Password"
            />
          </div>
          <div className="flex items-center gap-4 justify-end">
            <h1 className="text-[#000000] cursor-pointer text-[1rem] leading-6 font-normal">
              Cancel
            </h1>
            <Button className="rounded-[4px] h-[56px] w-[214px] font-medium text-[1rem] leading-6 px-12 py-4 bg-[#DB4444] text-[#FAFAFA]">
              Save Changes
            </Button>
          </div>
        </form>
        
      </div>
    </main>
  );
}
