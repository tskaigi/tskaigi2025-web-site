"use client";

import { useCallback, useEffect, useRef } from "react";

export function HeroSectionWithMotion() {
  const rightRippleSvg = useRef<SVGSVGElement>(null);
  const rightRippleSvgCircle1 = useRef<SVGCircleElement>(null);
  const rightRippleSvgCircle2 = useRef<SVGCircleElement>(null);
  const rightRippleSvgCircle3 = useRef<SVGCircleElement>(null);

  const leftRippleSvg = useRef<SVGSVGElement>(null);
  const leftRippleSvgCircle1 = useRef<SVGCircleElement>(null);
  const leftRippleSvgCircle2 = useRef<SVGCircleElement>(null);
  const leftRippleSvgCircle3 = useRef<SVGCircleElement>(null);

  const mvWrapperRef = useRef<HTMLDivElement>(null);
  const updateLeftRipples = useCallback(() => {
    if (
      !mvWrapperRef ||
      !leftRippleSvg.current ||
      !leftRippleSvgCircle1.current ||
      !leftRippleSvgCircle2.current ||
      !leftRippleSvgCircle3.current
    )
      return;

    const scrollY = window.scrollY;
    if (scrollY >= window.innerHeight) return;

    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(scrollY / maxScroll, 1);

    const baseWidth = 880;
    const currentWidth = window.innerWidth;
    const scaleFactor = baseWidth / currentWidth;
    const adjustedScaleFactor = Math.min(Math.max(scaleFactor, 0.3), 1.6);

    const easingInner = progress ** 2.6;
    const easingMiddle = progress ** 2.1;
    const easingOuter = progress ** 1.96;

    leftRippleSvgCircle1.current.setAttribute(
      "r",
      (386 + easingOuter * 1.5 * adjustedScaleFactor * maxScroll).toString(),
    );
    leftRippleSvgCircle2.current.setAttribute(
      "r",
      (264 + easingMiddle * 1.35 * adjustedScaleFactor * maxScroll).toString(),
    );
    leftRippleSvgCircle3.current.setAttribute(
      "r",
      (144 + easingInner * 1.2 * adjustedScaleFactor * maxScroll).toString(),
    );

    const opacityProgress = Math.min(
      scrollY /
        (mvWrapperRef.current?.clientHeight ?? window.innerHeight) /
        1.4,
      1,
    );
    const opacity = 1 - opacityProgress;
    leftRippleSvg.current.style.opacity = opacity.toString();
  }, []);

  const updateRightRipples = useCallback(() => {
    if (
      !mvWrapperRef ||
      !rightRippleSvg.current ||
      !rightRippleSvgCircle1.current ||
      !rightRippleSvgCircle2.current ||
      !rightRippleSvgCircle3.current
    )
      return;

    const scrollY = window.scrollY;
    if (scrollY >= window.innerHeight) return;

    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(scrollY / maxScroll, 1);

    const baseWidth = 1280;
    const currentWidth = window.innerWidth;
    const scaleFactor = baseWidth / currentWidth;
    const adjustedScaleFactor = Math.min(Math.max(scaleFactor, 0.3), 1.6);

    const easingInner = progress ** 2.9;
    const easingMiddle = progress ** 2.5;
    const easingOuter = progress ** 2.3;

    rightRippleSvgCircle1.current.setAttribute(
      "r",
      (390 + easingOuter * 1.5 * adjustedScaleFactor * maxScroll).toString(),
    );
    rightRippleSvgCircle2.current.setAttribute(
      "r",
      (268 + easingMiddle * 1.35 * adjustedScaleFactor * maxScroll).toString(),
    );
    rightRippleSvgCircle3.current.setAttribute(
      "r",
      (148 + easingInner * 1 * adjustedScaleFactor * maxScroll).toString(),
    );

    const opacityProgress = Math.min(
      scrollY /
        (mvWrapperRef.current?.clientHeight ?? window.innerHeight) /
        1.2,
      1,
    );
    const opacity = 1 - opacityProgress;
    rightRippleSvg.current.style.opacity = opacity.toString();
  }, []);

  const onChangeResizeOrScroll = useCallback(() => {
    updateLeftRipples();
    updateRightRipples();
  }, [updateLeftRipples, updateRightRipples]);

  useEffect(() => {
    window.addEventListener("scroll", onChangeResizeOrScroll);
    window.addEventListener("resize", onChangeResizeOrScroll);

    setTimeout(() => {
      // 初期状態を設定
      onChangeResizeOrScroll();
    }, 1600);

    return () => {
      window.removeEventListener("scroll", onChangeResizeOrScroll);
      window.removeEventListener("resize", onChangeResizeOrScroll);
    };
  }, [onChangeResizeOrScroll]);

  return (
    <div
      ref={mvWrapperRef}
      className="relative max-w-[1280px] mx-auto aspect-[32/15]"
    >
      <img
        className="fadein absolute top-[20.4%] left-[87.95%] w-[11.5%] h-auto origin-bottom-left"
        src="/purple.svg"
        alt="Purple fish"
      />
      <img
        className="fadein absolute top-[59.7%] left-[17.4%] w-[14.3%] h-auto origin-top-left"
        src="/green.svg"
        alt="Green fish"
      />
      <img
        className="fadein absolute top-[22%] left-[49.6%] w-[21.3%] h-auto origin-top-left"
        src="/red.svg"
        alt="Red fish"
      />
      <img
        className="fadein absolute top-[21.6%] left-[7.8%] w-[19.7%] h-auto origin-bottom-left"
        src="/yellow.svg"
        alt="Yellow fish"
      />
      <img
        className="fadein absolute top-[53%] left-[70.2%] w-[12.8%] h-auto origin-bottom-left"
        src="/blue.svg"
        alt="Blue fish"
      />
      <img
        className="fadein absolute top-[43.3%] left-[26.25%] w-[25.85%] h-auto origin-center"
        src="/logo.png"
        alt="Logo"
      />
      <div className="absolute top-[52%] left-[-10%] w-[33%] pt-[33%] origin-center">
        <svg
          className="w-full h-full absolute top-0 left-0 overflow-visible"
          ref={leftRippleSvg}
          viewBox="0 0 800 800"
          aria-hidden={true}
        >
          <defs>
            <linearGradient
              id="leftRippleGradient"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(800,0,0,800,0,0)"
            >
              <stop
                offset="0"
                style={{ stopColor: "rgb(99,208,255)", stopOpacity: 1 }}
              />
              <stop offset="1" style={{ stopColor: "white", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle
            className="left-circle-1 fill-none stroke-[2.8%]"
            ref={leftRippleSvgCircle1}
            cx="400"
            cy="400"
            r="386"
            stroke="url(#leftRippleGradient)"
          />
          <circle
            className="left-circle-2 fill-none stroke-[2.8%]"
            ref={leftRippleSvgCircle2}
            cx="400"
            cy="400"
            r="265"
            stroke="url(#leftRippleGradient)"
          />
          <circle
            className="left-circle-3 fill-none stroke-[2.8%]"
            ref={leftRippleSvgCircle3}
            cx="400"
            cy="400"
            r="144"
            stroke="url(#leftRippleGradient)"
          />
        </svg>
      </div>

      <div className="absolute top-0 left-[53%] w-[53%] pt-[53%] origin-center ">
        <svg
          className="w-full h-full absolute top-0 left-0 overflow-visible"
          ref={rightRippleSvg}
          viewBox="0 0 800 800"
          aria-hidden={true}
        >
          <defs>
            <linearGradient
              id="rightRippleGradient"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(-903.893,-490.044,490.044,-903.893,933.214,537.661)"
            >
              <stop
                offset="0"
                style={{ stopColor: "rgb(99,208,255)", stopOpacity: 1 }}
              />
              <stop offset="1" style={{ stopColor: "white", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle
            className="right-circle-1 fill-none stroke-[1.8%]"
            ref={rightRippleSvgCircle1}
            cx="400"
            cy="400"
            r="390"
            stroke="url(#rightRippleGradient)"
          />
          <circle
            className="right-circle-2 fill-none stroke-[1.8%]"
            ref={rightRippleSvgCircle2}
            cx="400"
            cy="400"
            r="268"
            stroke="url(#rightRippleGradient)"
          />
          <circle
            className="right-circle-3 fill-none stroke-[1.8%]"
            ref={rightRippleSvgCircle3}
            cx="400"
            cy="400"
            r="148"
            stroke="url(#rightRippleGradient)"
          />
        </svg>
      </div>
    </div>
  );
}
