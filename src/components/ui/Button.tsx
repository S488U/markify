import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-slate-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variantStyles = {
  default: "bg-violet-600 text-white hover:bg-violet-500 active:bg-violet-700",
  destructive: "bg-red-600 text-white hover:bg-red-500 active:bg-red-700",
  outline:
    "border border-violet-400 text-violet-300 hover:bg-violet-950 hover:text-violet-100 active:bg-violet-900",
  secondary:
    "bg-slate-700 text-slate-100 hover:bg-slate-600 active:bg-slate-800",
  ghost:
    "text-violet-300 hover:bg-violet-950 hover:text-violet-100 active:bg-violet-900",
  link: "text-violet-400 underline-offset-4 hover:underline",
};

const sizeStyles = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3 text-xs",
  lg: "h-11 rounded-md px-8 text-base",
  icon: "h-10 w-10",
};

export const Button = ({
  children,
  className,
  variant = "default",
  size = "default",
  href,
  ...props
}: ButtonProps) => {
  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
