import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <div className="py-5 border-b">
        <h1 className="text-[20px] font-bold mb-5">Price</h1>
        <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-[100%]", className)}
      {...props}
    />
    <div className="flex justify-around items-start mt-2">
        <h1 className="font-bold text-[14px]">$50</h1>
        <h1 className="font-bold text-[14px]">$200</h1>
    </div>
    </div>
  )
}
