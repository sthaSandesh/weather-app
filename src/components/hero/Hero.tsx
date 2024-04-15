import { cn } from "@/lib/utils";
import Image from "next/legacy/image";

export function Hero({
  image,
  video,
  children,
  className,
  noOverlay,
  childClass,
}: {
  image: string;
  children?: React.ReactNode;
  className?: string;
  noOverlay?: boolean;
  childClass?: string;
  video?: string;
}) {
  return (
    <div className={"relative h-screen"}>
      <div className="absolute inset-0">
        {video ? (
          <video
            className="w-full h-full object-cover"
            src={video}
            controls={false}
            loop
            muted
            autoPlay
            poster={image}
          />
        ) : (
          <Image
            className="w-full h-full object-cover"
            src={image}
            layout="fill"
            alt="hero"
            priority
          />
        )}
      </div>
      {!noOverlay && (
        <div className="absolute inset-0 backdrop-blur-sm sm:backdrop-none" />
      )}
      {children && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            className
          )}
        >
          <div className={cn("text-center", childClass)}>{children}</div>
        </div>
      )}
    </div>
  );
}
