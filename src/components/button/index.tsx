/**
 * Button component which uses tailwind for styling and cva to build type-safe UI component
 * Reference:
 *  cva - https://cva.style/docs
 *  video - https://youtu.be/eXRlVpw1SIQ
 */

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/utils";

const buttonVariants = cva(
  "flex items-center gap-x-2 justify-between rounded-md font-noto-sans font-[500] cursor-pointer disabled:cursor-default",
  {
    variants: {
      variant: {
        default:
          "bg-[#E0E0E0] text-[#3F3F3F] hover:bg-[#AEAEAE] focus:bg-[#AEAEAE] disabled:bg-[#E0E0E0] disabled:text-[#9E9E9E] drop-shadow-md disabled:filter-none",
        outline:
          "border border-[#3D5AFE] text-[#3D5AFE] bg-transparent hover:bg-[#2962FF1A] focus:bg-[#2962FF1A] drop-shadow-md disabled:filter-none",
        text: "outline-0 text-[#3D5AFE] hover:bg-[#2962FF1A] focus:bg-[#2962FF1A] disabled:bg-none disabled:text-[#9E9E9E] disabled:filter-none disabled:hover:bg-transparent drop-shadow-md",
      },
      size: {
        default: "w-fit h-[32px] px-5 py-5",
        sm: "w-fit h-[32px] px-2 py-3",
        md: "w-fit h-[36px] px-4 py-5",
        lg: "w-fit h-[42px] px-5 py-5",
      },
      intent: {
        default: "bg-[#E0E0E0] text-[#3F3F3F]",
        primary:
          "bg-[#2962FF] text-white hover:bg-[#0039CB] focus:bg-[#0039CB]",
        secondary:
          "bg-[#455A64] text-white hover:bg-[#1C313A] focus:bg-[#1C313A]",
        danger: "bg-[#D32F2F] text-white hover:bg-[#9A0007] focus:bg-[#9A0007]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  startIcon?: string;
  endIcon?: string;
  disableShadow?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      size,
      variant,
      intent,
      startIcon,
      endIcon,
      disableShadow,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          buttonVariants({ variant, className, size, intent }),
          disableShadow ? "filter-none" : ""
        )}
      >
        {startIcon && (
          <img
            className="w-4 h-4 fill-white"
            src={startIcon}
            alt="start icon"
          />
        )}
        {children}
        {endIcon && <img className="w-4 h-4" src={endIcon} alt="end icon" />}
      </button>
    );
  }
);

export { Button, buttonVariants };
