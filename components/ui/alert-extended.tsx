import type { BaseProps } from "@/types";

import * as React from "react";
import { cn } from "@/lib/utils";

import { CircleAlert, CircleCheck, Info } from "lucide-react";
import Link from "next/link";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const AlertError = React.forwardRef<HTMLDivElement, BaseProps>(
  ({ className, children, ...restProps }, ref) => {
    return (
      <Alert
        ref={ref}
        className={cn(
          "border-destructive-light bg-destructive-light text-destructive duration-300 animate-in fade-in-0 slide-in-from-bottom-2 [&>svg]:text-destructive",
          className,
        )}
        {...restProps}
      >
        <CircleAlert className="h-5 w-5" />
        {children}
      </Alert>
    );
  },
);
AlertError.displayName = "AlertError";

const AlertInfo = React.forwardRef<HTMLDivElement, BaseProps>(
  ({ className, children, ...restProps }, ref) => {
    return (
      <Alert
        ref={ref}
        className={cn(
          "border-info-light bg-info-light duration-300 animate-in fade-in-0 slide-in-from-bottom-2 [&>svg]:text-info",
          className,
        )}
        {...restProps}
      >
        <Info className="h-5 w-5" />
        {children}
      </Alert>
    );
  },
);
AlertInfo.displayName = "AlertInfo";

const AlertSuccess = React.forwardRef<HTMLDivElement, BaseProps>(
  ({ className, children, ...restProps }, ref) => {
    return (
      <Alert
        ref={ref}
        className={cn(
          "border-success-light bg-success-light duration-300 animate-in fade-in-0 slide-in-from-bottom-2 [&>svg]:text-success",
          className,
        )}
        {...restProps}
      >
        <CircleCheck className="h-5 w-5" />
        {children}
      </Alert>
    );
  },
);
AlertSuccess.displayName = "AlertSuccess";

export interface AlertErrorMessagesProps extends BaseProps {
  title?: string;
  message: string | string[] | undefined | null;
}

const FormattedAlertDescription = ({ children }: React.HTMLAttributes<HTMLParagraphElement>) => {
  if (
    children &&
    typeof children === "string" &&
    children.includes("contact our support channel")
  ) {
    const [part1, part2] = children.split("contact our support channel");
    return (
      <AlertDescription>
        <span>{part1}</span>{" "}
        <Link href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_CHANNEL_EMAIL}`} className="underline">
          contact our support channel
        </Link>
        {part2 && <span>{part2}</span>}
      </AlertDescription>
    );
  }
  return <AlertDescription>{children}</AlertDescription>;
};

const AlertErrorMessages = React.forwardRef<HTMLDivElement, AlertErrorMessagesProps>(
  ({ title = "Input error", message, children, ...restProps }, ref) => {
    if (!message || message.length === 0) return;

    return (
      <AlertError ref={ref} {...restProps}>
        {title && <AlertTitle>{title}</AlertTitle>}
        {Array.isArray(message) ? (
          message.map((v, index) => (
            <FormattedAlertDescription key={`${index}-${v}`}>{v}</FormattedAlertDescription>
          ))
        ) : (
          <FormattedAlertDescription>{message}</FormattedAlertDescription>
        )}
        {children}
      </AlertError>
    );
  },
);
AlertErrorMessages.displayName = "AlertErrorMessages";

export {
  AlertError,
  AlertInfo,
  AlertSuccess,
  AlertErrorMessages,
};
