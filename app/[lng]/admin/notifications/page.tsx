import { getNotifications } from "@/actions/notification.action";
import NotificationCard from "@/components/cards/notification.card";
import Header from "@/components/shared/header";
import NoResult from "@/components/shared/no-result";
import { translation } from "@/i18n/server";
import { LngParams } from "@/types";
import { auth } from "@clerk/nextjs";
import ClearButton from "./_components/clear-button";
import { getRole } from "@/actions/user.action";
import { redirect } from "next/navigation";

async function Page({ params }: LngParams) {
  const { userId } = auth();
  const user = await getRole(userId!);

  if (!user.isAdmin) return redirect("/");
  const { t } = await translation(params.lng);
  const notifications = await getNotifications(userId!);

  return (
    <>
      <Header
        title={t("notifications")}
        description={t("notificationDescription")}
      />

      <div className="mt-4 flex flex-col space-y-2">
        {notifications.length === 0 && (
          <NoResult
            title={t("noNotifications")}
            description={t("noNotificationsDescription")}
          />
        )}
        {notifications.map((n) => (
          <NotificationCard key={n._id} item={JSON.parse(JSON.stringify(n))} />
        ))}
        {notifications.length > 0 && <ClearButton />}
      </div>
    </>
  );
}

export default Page;
