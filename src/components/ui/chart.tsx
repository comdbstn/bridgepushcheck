import * as React from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { cn } from "@/lib/utils";

export type ChartConfig = {
    [k in string]: {
        label?: React.ReactNode;
        color?: string;
    };
};

const ChartContainer = React.forwardRef<
    HTMLDivElement,
    React.ComponentProps<"div"> & {
        config: ChartConfig;
        children: React.ReactNode;
    }
>(({ className, children, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "flex aspect-video justify-center text-xs",
                className
            )}
            {...props}
        >
            <ResponsiveContainer>{children}</ResponsiveContainer>
        </div>
    );
});
ChartContainer.displayName = "Chart";

export { ChartContainer };
