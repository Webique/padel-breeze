export default function SectionDivider() {
    return (
      <div className="w-full overflow-hidden leading-[0] rotate-180 -mb-1">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,40.39c58.28,0,114.13-14.12,172.39-14.12,60.46,0,113.37,16.12,173.44,16.12,56.93,0,111.53-13.46,167.26-13.46,60.24,0,113.39,16.12,173.4,16.12,30.71,0,60.31-4.67,91.12-6.42V80H0V48.58c30.75,1.75,60.39,6.42,91.12,6.42,60.01,0,113.16-16.12,173.4-16.12,55.73,0,110.33,13.46,167.26,13.46Z"
            fill="currentColor"
            className="text-black"
          ></path>
        </svg>
      </div>
    );
  }
  