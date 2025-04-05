"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import CategoryAccordions from "../categoryAccaordions";
import { useState } from "react";

const AboutCategory = ({ brand }: { brand: BrandDetailsModel }) => {
  const [tab, setTab] = useState<"faq" | "guide" | "description">("faq");

  return (
<<<<<<< HEAD
    <>
      <Container>
        <Box
          sx={{
            bgcolor: "background.element",
            borderRadius: "12px",
            p: "24px",
          }}
        >
          <Box>
            <Box
              sx={{
                px: "6px",
                mb: 4,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "100%",
                  overflow: "hidden",
                  width: "75px",
                  height: "75px",
                }}
              >
                {/* <Image src="" alt="" fill objectFit="cover" /> */}
                <svg
                  width="75"
                  height="75"
                  viewBox="0 0 85 85"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <circle cx="42.5" cy="42.5" r="37.1875" fill="#1ED760" />
                  <path
                    d="M59.4053 57.436C58.77 58.4441 57.4146 58.7263 56.3557 58.1215C48.0116 53.2826 37.5497 52.1938 25.1819 54.8552C23.9959 55.0972 22.81 54.4117 22.5558 53.2826C22.3017 52.1535 23.0217 51.0244 24.2077 50.7825C37.7192 47.8388 49.3246 49.0889 58.6429 54.5326C59.7018 55.1375 60.0406 56.4279 59.4053 57.436ZM63.7256 48.2421C62.9208 49.4921 61.2266 49.855 59.9136 49.1292C50.3835 43.5242 35.8555 41.9112 24.5889 45.1774C23.1064 45.5807 21.5816 44.8145 21.1581 43.4435C20.7345 42.0322 21.5393 40.5805 23.0217 40.1773C35.8979 36.4674 51.9083 38.2417 62.8785 44.6532C64.1068 45.3791 64.5303 46.992 63.7256 48.2421ZM64.1068 38.6449C52.6707 32.1931 33.8224 31.5882 22.8947 34.7335C21.1581 35.2577 19.2944 34.3303 18.7438 32.6366C18.1932 30.9834 19.2097 29.2091 20.9463 28.6849C33.4836 25.0557 54.3226 25.7815 67.4529 33.2012C69.02 34.0883 69.5283 36.0239 68.5965 37.5159C67.707 39.0482 65.6739 39.5724 64.1068 38.6449Z"
                    fill="white"
                  />
                </svg>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
              }}
            >
              <Typography
                sx={{
                  color: "text.main",
                  fontSize: "25px",
                  fontWeight: "600",
                }}
              >
                درباره برند Spotify
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                اسپاتیفای
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* <Container>
        <Box
          sx={{
            width: "100%",
            height: { md: "400px", xs: "250px" },
            background: `url(/images/shopBanners.png),  linear-gradient(277.23deg, rgba(0, 0, 0, 0) 31.83%, rgba(0, 0, 0, 0.2) 79.07%), #ADFC42`,
            backgroundSize: "cover",
            borderRadius: "7px",
            position: "relative",
            //   overflow: "hidden",
=======
    <Container>
      <Box
        sx={{
          bgcolor: "background.element",
          borderRadius: "12px",
          p: { md: 3, xs: 2 },
        }}
      >
        <Box
          sx={{
            width: "75px",
            height: "75px",
            position: "relative",
            borderRadius: "8px",
            overflow: "hidden",
>>>>>>> a4b6314a07ceed8b1d1c7b1841eaeb87499526fd
          }}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_SERVER}/${brand?.icon}`}
            fill
            alt={brand?.icon}
          />
        </Box>
        <Typography
          sx={{ color: "text.content", fontSize: "29px", fontweight: "600",mt:1 }}
        >
          {`درباره برند ${brand?.title_en}`}
        </Typography>
        <Typography
          sx={{ color: "text.secondary", fontSize: "21px", fontweight: "500" }}
        >
          {brand?.title_fa}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
            width: "100%",
          }}
        >
          <Button
            onClick={() => setTab("description")}
            sx={{
<<<<<<< HEAD
              pt: { md: "38px", xs: "13px" },
              pr: { md: "38px", xs: "13px" },
            }}
          >
            <Typography
              sx={{
                fontSize: { md: "45px", xs: "18px" },
                fontWeight: "600",
                WebkitTextFillColor: "transparent",
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "#4D5356",
              }}
            >
              درباره...
            </Typography>
            <Typography
              sx={{
                color: "#4D5356",
                fontSize: { md: "29px", xs: "13px" },
                fontWeight: "600",
                pt: { md: 4, xs: 2 },
              }}
            >
              اسپاتیفای
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: { md: "start", xs: "center" },
                mt: 1.5,
              }}
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.14784 9.89383C4.49302 9.89383 4.77284 10.1737 4.77284 10.5188V17.3938H15.6062V10.5188C15.6062 10.1737 15.886 9.89383 16.2312 9.89383C16.5764 9.89383 16.8562 10.1737 16.8562 10.5188V18.6438H3.52284V10.5188C3.52284 10.1737 3.80266 9.89383 4.14784 9.89383Z"
                  fill="#4D5356"
                  fill-opacity="0.6"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.85619 18.0188C1.85619 17.6737 2.13601 17.3938 2.48119 17.3938H17.8979C18.243 17.3938 18.5229 17.6737 18.5229 18.0188C18.5229 18.364 18.243 18.6438 17.8979 18.6438H2.48119C2.13601 18.6438 1.85619 18.364 1.85619 18.0188Z"
                  fill="#4D5356"
                  fill-opacity="0.6"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.48119 13.8522C7.48119 13.0468 8.1341 12.3938 8.93952 12.3938H11.4395C12.2449 12.3938 12.8979 13.0468 12.8979 13.8522V18.0188C12.8979 18.364 12.618 18.6438 12.2729 18.6438C11.9277 18.6438 11.6479 18.364 11.6479 18.0188V13.8522C11.6479 13.7371 11.5546 13.6438 11.4395 13.6438H8.93952C8.82446 13.6438 8.73119 13.7371 8.73119 13.8522V18.0188C8.73119 18.364 8.45136 18.6438 8.10619 18.6438C7.76101 18.6438 7.48119 18.364 7.48119 18.0188V13.8522Z"
                  fill="#4D5356"
                  fill-opacity="0.6"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.98506 4.11396C3.41042 2.83789 4.6046 1.97717 5.9497 1.97717H14.4292C15.7743 1.97717 16.9685 2.83789 17.3939 4.11396L18.2272 6.61396C18.9017 8.63749 17.3956 10.7272 15.2626 10.7272C15.2503 10.7272 15.2381 10.7268 15.226 10.7261C15.214 10.7268 15.2018 10.7272 15.1895 10.7272C14.1673 10.7272 13.2597 10.2363 12.6895 9.47747C12.1194 10.2363 11.2118 10.7272 10.1895 10.7272C9.16727 10.7272 8.25967 10.2363 7.68952 9.47747C7.11938 10.2363 6.21177 10.7272 5.18952 10.7272C5.17724 10.7272 5.16505 10.7268 5.15294 10.7261C5.14084 10.7268 5.12864 10.7272 5.11636 10.7272C2.98337 10.7272 1.47722 8.63749 2.15173 6.61396L2.98506 4.11396ZM5.15294 9.47822C5.16505 9.47752 5.17724 9.47717 5.18952 9.47717C6.22505 9.47717 7.06452 8.6377 7.06452 7.60217V3.22717H5.9497C5.14264 3.22717 4.42613 3.7436 4.17092 4.50924L3.33758 7.00924C2.93288 8.22336 3.83657 9.47717 5.11636 9.47717C5.12864 9.47717 5.14084 9.47752 5.15294 9.47822ZM8.31452 3.22717V7.60217C8.31452 8.6377 9.15399 9.47717 10.1895 9.47717C11.2251 9.47717 12.0645 8.6377 12.0645 7.60217V3.22717H8.31452ZM13.3145 3.22717V7.60217C13.3145 8.6377 14.154 9.47717 15.1895 9.47717C15.2018 9.47717 15.214 9.47752 15.226 9.47822C15.2381 9.47752 15.2503 9.47717 15.2626 9.47717C16.5424 9.47717 17.4461 8.22336 17.0413 7.00924L16.208 4.50924C15.9528 3.7436 15.2363 3.22717 14.4292 3.22717H13.3145Z"
                  fill="#4D5356"
                  fill-opacity="0.6"
                />
              </svg>
              <Typography
                sx={{
                  color: "rgba(77, 83, 86, 0.6)",
                  fontSize: { md: "16px", xs: "13px" },
                  fontWeight: "500",
                  mr: 0.5,
                }}
              >
                237
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "0px",
              left: "0px",
              borderTop: "150px solid transparent",
              borderLeftWidth: { md: "1150px", xs: "840px" },
              borderLeftStyle: "solid",
              borderLeftColor: "background.main",
            }}
          ></Box>
          <Box
            sx={{
              position: "absolute",
              left: "10%",
              borderRadius: "7px",
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(2px)",
              border: "1px solid",
              borderColor: "#848686",
              width: { md: "240px", xs: "85px" },
              height: { md: "240px", xs: "85px" },
              // px: "42px",
              top: { md: "30%", xs: "25%" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: { md: "168px", xs: "55px" },
                height: { md: "168px", xs: "55px" },
                position: "relative",
              }}
            >
              <Image src="/images/spotify.png" fill alt="brand" />
            </Box>
          </Box>
        </Box>
      </Container> */}
    </>
=======
              px: 3,
              fontWeight: "600",
              bgcolor:
                tab === "description" ? "button.main" : "background.secondary",
              color: tab === "description" ? "white" : "text.content",
              py: 1,
              ":hover": {
                bgcolor:
                  tab === "description"
                    ? "button.main"
                    : "background.secondary",
              },
            }}
          >
            توضیحات برند
          </Button>
          <Button
            onClick={() => setTab("faq")}
            sx={{
              px: 3,
              fontWeight: "600",
              bgcolor: tab === "faq" ? "button.main" : "background.secondary",
              color: tab === "faq" ? "white" : "text.content",
              py: 1,
              ":hover": {
                bgcolor: tab === "faq" ? "button.main" : "background.secondary",
              },
            }}
          >
            سوالات متداول
          </Button>
          <Button
            onClick={() => setTab("guide")}
            sx={{
              px: 3,
              fontWeight: "600",
              bgcolor: tab === "guide" ? "button.main" : "background.secondary",
              color: tab === "guide" ? "white" : "text.content",
              py: 1,
              ":hover": {
                bgcolor:
                  tab === "guide" ? "button.main" : "background.secondary",
              },
            }}
          >
            راهنمای استفاده
          </Button>
        </Box>
        {tab === "description" && (
          <Box
            sx={{
              fontSize: { md: "16px", xs: "13px" },
              lineHeight: 2,
              pt:6,
              pb:3,
              px:10,
              color: "text.main",
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: brand?.text }} />
          </Box>
        )}
        {tab === "faq" && <CategoryAccordions faqs={brand?.faqs} />}
        {tab === "guide" && (
          <Box
          sx={{
            fontSize: { md: "16px", xs: "13px" },
            lineHeight: 2,
            pt:6,
            pb:3,
            px:10,
            color: "text.main",
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: brand?.giude }} />
          </Box>
        )}
      </Box>
    </Container>
>>>>>>> a4b6314a07ceed8b1d1c7b1841eaeb87499526fd
  );
};

export default AboutCategory;
