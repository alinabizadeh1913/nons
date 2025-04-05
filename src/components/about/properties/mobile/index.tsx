"use client";
import { Box, Typography } from "@mui/material";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const MobileProperties = () => {
  return (
    <Box>
      <Swiper
        pagination={{
          clickable: true,
          el: ".platform-swiper-custom-pagination",
        }}
        modules={[Pagination]}
        autoplay={{
          delay: 1000,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween: "20px !important",
          },
          600: {
            slidesPerView: 2.4,
            spaceBetween: "20px !important",
          },
          900: {
            slidesPerView: 1.7,
            spaceBetween: "40px",
          },
          1200: {
            slidesPerView: 2.2,
            spaceBetween: "40px",
          },
        }}
        style={{
          paddingBottom: "20px",
          paddingTop: "10px",
        }}
      >
        <SwiperSlide>
          <Box
            sx={{
              width: "100%",
              bgcolor: "background.element",
              borderRadius: "5px",
              p: 3,
              minHeight: "196px",
            }}
          >
            <Box
              sx={{
                width: { md: "32px", xs: "24px" },
                height: { md: "32px", xs: "24px" },
              }}
            >
              <svg
                width="inherit"
                height="inherit"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.12581 14.9716C8.04293 14.4375 7.99994 13.8903 7.99994 13.3332C7.99994 7.44213 12.807 2.6665 18.7368 2.6665C24.6666 2.6665 29.4736 7.44213 29.4736 13.3332C29.4736 14.6639 29.2283 15.9378 28.7802 17.1125C28.6871 17.3565 28.6406 17.4785 28.6195 17.5737C28.5985 17.6681 28.5904 17.7345 28.5882 17.8311C28.5859 17.9286 28.5991 18.0361 28.6255 18.2509L29.1623 22.6112C29.2204 23.0832 29.2495 23.3192 29.171 23.4908C29.1022 23.6411 28.98 23.7605 28.8281 23.8258C28.6548 23.9004 28.4195 23.8659 27.9489 23.7969L23.7019 23.1744C23.4802 23.1419 23.3693 23.1256 23.2683 23.1262C23.1684 23.1268 23.0993 23.1341 23.0015 23.1547C22.9027 23.1755 22.7765 23.2228 22.524 23.3173C21.3462 23.7585 20.0699 23.9998 18.7368 23.9998C18.1792 23.9998 17.6315 23.9576 17.0969 23.8762M10.1754 29.3332C14.1286 29.3332 17.3333 26.0499 17.3333 21.9998C17.3333 17.9497 14.1286 14.6665 10.1754 14.6665C6.22223 14.6665 3.01753 17.9497 3.01753 21.9998C3.01753 22.814 3.14702 23.5971 3.38606 24.3288C3.4871 24.6381 3.53762 24.7928 3.5542 24.8984C3.57151 25.0087 3.57454 25.0707 3.5681 25.1821C3.56192 25.2889 3.53521 25.4096 3.48178 25.6509L2.66666 29.3332L6.65973 28.7878C6.87768 28.7581 6.98665 28.7432 7.08181 28.7438C7.18202 28.7445 7.2352 28.7499 7.33347 28.7695C7.4268 28.7881 7.56554 28.8371 7.84302 28.935C8.57411 29.1931 9.3588 29.3332 10.1754 29.3332Z"
                  stroke="#9FE870"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            <Typography
              sx={{
                color: "white",
                fintSize: { md: "18px", xs: "14px" },
                fontWeight: 700,
                my: 1,
              }}
            >
              ارتباط مستقیم
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontWeight: 400,
                fontSize: { md: "16px", xs: "14px" },
                lineHeight: 2,
              }}
            >
              سیستم معاملاتی مبتنی برچت با امکان ارتباط مستقیم با فروشندگان، پیش
              از خرید
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              width: "100%",
              bgcolor: "background.element",
              borderRadius: "5px",
              p: 3,
              minHeight: "196px",
            }}
          >
            <Box
              sx={{
                width: { md: "32px", xs: "24px" },
                height: { md: "32px", xs: "24px" },
              }}
            >
              <svg
                width="inherit"
                height="inherit"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1817 12.1815L6.57193 6.57178M6.57193 25.428L12.224 19.7759M19.8148 19.8182L25.4246 25.428M25.4246 6.57178L19.7717 12.2247M29.3334 15.9998C29.3334 23.3636 23.3638 29.3332 16 29.3332C8.63622 29.3332 2.66669 23.3636 2.66669 15.9998C2.66669 8.63604 8.63622 2.6665 16 2.6665C23.3638 2.6665 29.3334 8.63604 29.3334 15.9998ZM21.3334 15.9998C21.3334 18.9454 18.9455 21.3332 16 21.3332C13.0545 21.3332 10.6667 18.9454 10.6667 15.9998C10.6667 13.0543 13.0545 10.6665 16 10.6665C18.9455 10.6665 21.3334 13.0543 21.3334 15.9998Z"
                  stroke="#9FE870"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            <Typography
              sx={{
                color: "white",
                fintSize: { md: "18px", xs: "14px" },
                fontWeight: 700,
                my: 1,
              }}
            >
              پشتیبانی 24 ساعته
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontWeight: 400,
                fontSize: { md: "16px", xs: "14px" },
                lineHeight: 2,
                textAlign: "justify",
              }}
            >
              تیم پشتیبانی ما به صورت 24 ساعته آماده است تا به هر سوال یا مشکلی
              که ممکن است داشته باشید، پاسخ دهد
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              width: "100%",
              bgcolor: "background.element",
              borderRadius: "5px",
              p: 3,
              minHeight: "196px",
            }}
          >
            <Box
              sx={{
                width: { md: "32px", xs: "24px" },
                height: { md: "32px", xs: "24px" },
              }}
            >
              <svg
                width="inherit"
                height="inherit"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 15.3333L14.6667 18L20.6667 12M26.6667 16C26.6667 22.5446 19.5281 27.3045 16.9307 28.8198C16.6355 28.992 16.4879 29.0781 16.2796 29.1228C16.118 29.1575 15.8821 29.1575 15.7205 29.1228C15.5122 29.0781 15.3646 28.992 15.0694 28.8198C12.472 27.3045 5.33337 22.5446 5.33337 16V9.62346C5.33337 8.55744 5.33337 8.02444 5.50772 7.56626C5.66174 7.16151 5.91202 6.80036 6.23692 6.51403C6.6047 6.18991 7.10377 6.00276 8.10191 5.62845L15.251 2.94756C15.5282 2.84361 15.6668 2.79163 15.8094 2.77103C15.9358 2.75276 16.0643 2.75276 16.1907 2.77103C16.3333 2.79163 16.4719 2.84361 16.7491 2.94756L23.8982 5.62845C24.8963 6.00276 25.3954 6.18991 25.7632 6.51403C26.0881 6.80036 26.3383 7.16151 26.4924 7.56626C26.6667 8.02444 26.6667 8.55744 26.6667 9.62346V16Z"
                  stroke="#9FE870"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            <Typography
              sx={{
                color: "white",
                fintSize: { md: "18px", xs: "14px" },
                fontWeight: 700,
                my: 1,
              }}
            >
              امنیت
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontWeight: 400,
                fontSize: { md: "16px", xs: "14px" },
                lineHeight: 2,
                textAlign: "justify",
              }}
            >
              ما از کاربران در مقابل کلاهبرداری ها و فریب ها محافظت میکنیم تا
              انها بدون نگرانی به تجارت خود متمرکز باشند
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              width: "100%",
              bgcolor: "background.element",
              borderRadius: "5px",
              p: 3,
              minHeight: "196px",
            }}
          >
            <Box
              sx={{
                width: { md: "32px", xs: "24px" },
                height: { md: "32px", xs: "24px" },
              }}
            >
              <svg
                width="inherit"
                height="inherit"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.66666 15.9998C2.66666 23.3636 8.63619 29.3332 16 29.3332C18.2091 29.3332 20 27.5423 20 25.3332V24.6665C20 24.0473 20 23.7377 20.0342 23.4777C20.2705 21.6828 21.683 20.2704 23.4779 20.0341C23.7378 19.9998 24.0474 19.9998 24.6667 19.9998H25.3333C27.5425 19.9998 29.3333 18.209 29.3333 15.9998C29.3333 8.63604 23.3638 2.6665 16 2.6665C8.63619 2.6665 2.66666 8.63604 2.66666 15.9998Z"
                  stroke="#9FE870"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.33332 17.3332C10.0697 17.3332 10.6667 16.7362 10.6667 15.9998C10.6667 15.2635 10.0697 14.6665 9.33332 14.6665C8.59694 14.6665 7.99999 15.2635 7.99999 15.9998C7.99999 16.7362 8.59694 17.3332 9.33332 17.3332Z"
                  stroke="#9FE870"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.3333 11.9998C22.0697 11.9998 22.6667 11.4029 22.6667 10.6665C22.6667 9.93012 22.0697 9.33317 21.3333 9.33317C20.5969 9.33317 20 9.93012 20 10.6665C20 11.4029 20.5969 11.9998 21.3333 11.9998Z"
                  stroke="#9FE870"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3333 10.6665C14.0697 10.6665 14.6667 10.0696 14.6667 9.33317C14.6667 8.59679 14.0697 7.99984 13.3333 7.99984C12.5969 7.99984 12 8.59679 12 9.33317C12 10.0696 12.5969 10.6665 13.3333 10.6665Z"
                  stroke="#9FE870"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            <Typography
              sx={{
                color: "white",
                fintSize: { md: "18px", xs: "14px" },
                fontWeight: 700,
                my: 1,
              }}
            >
              رابط کاربری ساده
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontWeight: 400,
                fontSize: { md: "16px", xs: "14px" },
                lineHeight: 2,
                textAlign: "justify",
              }}
            >
              رابط کاربری بهینه برای تجربه‌ای سریع و بی‌دردسر برای انجام معاملات
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              width: "100%",
              bgcolor: "background.element",
              borderRadius: "5px",
              p: 3,
              minHeight: "196px",
            }}
          >
            <Box
              sx={{
                width: { md: "32px", xs: "24px" },
                height: { md: "32px", xs: "24px" },
              }}
            >
              <svg
                width="inherit"
                height="inherit"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.6667 19.3331V15.3257C22.6667 15.0864 22.6667 14.9667 22.6303 14.8611C22.598 14.7677 22.5454 14.6826 22.4763 14.612C22.3981 14.5321 22.2911 14.4786 22.077 14.3716L16 11.3331M5.33335 12.6664V21.7419C5.33335 22.2378 5.33335 22.4857 5.41071 22.7028C5.4791 22.8947 5.59056 23.0684 5.73652 23.2106C5.90164 23.3713 6.12705 23.4746 6.57782 23.6813L15.1112 27.5924C15.4381 27.7422 15.6016 27.8172 15.7719 27.8467C15.9229 27.8729 16.0772 27.8729 16.2281 27.8467C16.3984 27.8172 16.5619 27.7422 16.8889 27.5924L25.4222 23.6813C25.873 23.4746 26.0984 23.3713 26.2635 23.2106C26.4095 23.0684 26.5209 22.8947 26.5893 22.7028C26.6667 22.4857 26.6667 22.2378 26.6667 21.7419V12.6664M2.66669 11.3331L15.523 4.90494C15.6979 4.81749 15.7854 4.77376 15.8771 4.75655C15.9583 4.74131 16.0417 4.74131 16.123 4.75655C16.2147 4.77376 16.3021 4.81749 16.477 4.90494L29.3334 11.3331L16.477 17.7612C16.3021 17.8487 16.2147 17.8924 16.123 17.9096C16.0417 17.9249 15.9583 17.9249 15.8771 17.9096C15.7854 17.8924 15.6979 17.8487 15.523 17.7612L2.66669 11.3331Z"
                  stroke="#9FE870"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            <Typography
              sx={{
                color: "white",
                fintSize: { md: "18px", xs: "14px" },
                fontWeight: 700,
                my: 1,
              }}
            >
              توانمندسازی
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontWeight: 400,
                fontSize: { md: "16px", xs: "14px" },
                lineHeight: 2,
                textAlign: "justify",
              }}
            >
              ما با ارائه آموزش های رایگان و ابزارهای قدرتمند امکانات لازم را
              برای رشد و موفقیت در معاملات فراهم می‌کنیم
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              width: "100%",
              bgcolor: "background.element",
              borderRadius: "5px",
              p: 3,
              minHeight: "196px",
            }}
          >
            <Box
              sx={{
                width: { md: "32px", xs: "24px" },
                height: { md: "32px", xs: "24px" },
              }}
            >
              <svg
                width="inherit"
                height="inherit"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.3333 6.6665L6.66663 25.3332M12 9.33317C12 10.8059 10.8061 11.9998 9.33329 11.9998C7.86053 11.9998 6.66663 10.8059 6.66663 9.33317C6.66663 7.86041 7.86053 6.6665 9.33329 6.6665C10.8061 6.6665 12 7.86041 12 9.33317ZM25.3333 22.6665C25.3333 24.1393 24.1394 25.3332 22.6666 25.3332C21.1939 25.3332 20 24.1393 20 22.6665C20 21.1937 21.1939 19.9998 22.6666 19.9998C24.1394 19.9998 25.3333 21.1937 25.3333 22.6665Z"
                  stroke="#9FE870"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            <Typography
              sx={{
                color: "white",
                fintSize: { md: "18px", xs: "14px" },
                fontWeight: 700,
                my: 1,
              }}
            >
              کارمزد پایین
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontWeight: 400,
                fontSize: { md: "16px", xs: "14px" },
                lineHeight: 2,
                textAlign: "justify",
              }}
            >
              با ارائه نرخ‌های رقابتی، هدف ما کاهش هزینه‌های اضافی و ایجاد ارزش
              بیشتر در معاملات شماست
            </Typography>
          </Box>
        </SwiperSlide>
      </Swiper>
      <Box
        sx={{
          width: "100%",
          height: { md: "49px", xs: "20px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: { md: "8px", xs: "10px" },
          mt: { md: "10px", xs: "0px" },
        }}
        className="platform-swiper-custom-pagination"
      ></Box>
    </Box>
  );
};

export default MobileProperties;
