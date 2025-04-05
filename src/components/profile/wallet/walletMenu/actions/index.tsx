"use client";
import FinancialAccount from "@/components/profile/privacy/financialAccount";
import { Box, Button } from "@mui/material";
import dynamic from "next/dynamic";
import { useState } from "react";
const Deposit = dynamic(
  () =>
    import(
      "@/components/profile/activities/activitiesMenu/deposit&withdraw/deposit"
    )
);
const Withdraw = dynamic(
  () =>
    import(
      "@/components/profile/activities/activitiesMenu/deposit&withdraw/withdraw"
    )
);

const WalletActions = () => {
  const [status, setStatus] = useState<"deposit" | "withdraw" | "none">("none");
  return (
    <>
      {status === "deposit" && <Deposit withBackground setStatus={setStatus} />}
      {status === "withdraw" && <Withdraw setStatus={setStatus} />}
      {status === "none" && (
        <Box sx={{ width: "100%", display: "flex", gap: 2, my: 4.5 }}>
          <Button
            onClick={() => setStatus("deposit")}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              color: "icon.main",
              fontSize: "16px",
              fontWeight: "600",
              width: "100%",
              borderRadius: "5px",
              bgcolor: "hover.main",
              ":hover": {
                bgcolor: "hover.main",
              },
            }}
            className="profileMenuButtons"
          >
            <Box
              sx={{
                color: "icon.main",
                display: "flex",
                alignItems: "center",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 20V4M12 4L6 10M12 4L18 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            واریز
          </Button>
          <Button
            onClick={() => setStatus("withdraw")}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              color: "icon.main",
              fontSize: "16px",
              fontWeight: "600",
              width: "100%",
              borderRadius: "5px",
              bgcolor: "hover.main",
              ":hover": {
                bgcolor: "hover.main",
              },
            }}
            className="profileMenuButtons"
          >
            <Box
              sx={{
                color: "icon.main",
                display: "flex",
                alignItems: "center",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4V20M12 20L18 14M12 20L6 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            برداشت
          </Button>
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              color: "icon.main",
              fontSize: "16px",
              fontWeight: "600",
              width: "100%",
              borderRadius: "5px",
              bgcolor: "hover.main",
              ":hover": {
                bgcolor: "hover.main",
              },
            }}
            className="profileMenuButtons"
          >
            <Box
              sx={{
                color: "icon.main",
                display: "flex",
                alignItems: "center",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 7L14.1314 14.8686C13.7354 15.2646 13.5373 15.4627 13.309 15.5368C13.1082 15.6021 12.8918 15.6021 12.691 15.5368C12.4627 15.4627 12.2646 15.2646 11.8686 14.8686L9.13137 12.1314C8.73535 11.7354 8.53735 11.5373 8.30902 11.4632C8.10817 11.3979 7.89183 11.3979 7.69098 11.4632C7.46265 11.5373 7.26465 11.7354 6.86863 12.1314L2 17M22 7H15M22 7V14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            گزارشات
          </Button>
        </Box>
      )}
      <FinancialAccount />
    </>
  );
};

export default WalletActions;
