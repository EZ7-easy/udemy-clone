import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import useTranslate from "@/hooks/use-translate";
import Link from "next/link";

function MainHero() {
  const t = useTranslate();

  // State to track loading state on refresh and user actions
  const [loading, setLoading] = useState(true);

  // Simulate loading on page refresh
  useEffect(() => {
    // Simulate a network request or initial data load
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
    }, 2000); // You can adjust the timeout duration as needed

    // Clean up the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  // Handle button click for additional loading state (e.g., navigating or fetching data)
  const handleButtonClick = () => {
    setLoading(true);
    // Simulate a network request or page transition
    setTimeout(() => setLoading(false), 2000); // Example: 2 seconds delay
  };

  return (
    <div className="flex flex-col space-y-4 self-center text-center sm:text-left">
      <h1
        className={`font-space-grotesk text-3xl sm:text-5xl font-bold ${
          loading ? "text-white bg-background animate-pulse" : "text-white"
        }`}
      >
        {t("heroTitle")}{" "}
        <span
          className={`${
            loading ? "text-blue-700 bg-background" : "text-blue-500"
          }`}
        >
          {t("heroTitleSpan")}
        </span>
      </h1>
      <p className="text-muted-foreground">{t("heroDescription")}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
        <Link href={"/courses"}>
          <Button
            variant={"outline"}
            size={"lg"}
            rounded={"full"}
            onClick={handleButtonClick}
            disabled={loading} // Disable the button when loading
          >
            {loading ? (
              <div className="loader" /> // Spinner for loading state
            ) : (
              t("findCourses")
            )}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default MainHero;
