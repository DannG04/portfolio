'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                    I build full-stack systems end to end — from REST APIs in
                    Spring Boot and FastAPI to Vue and Angular frontends, native
                    Android apps in Kotlin, and desktop tools with Tauri and
                    Java.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    This is me.
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            Hi, I&apos;m Daniel.
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[450px]">
                            <p className="slide-up-and-fade">
                                I&apos;m a Computer Science student based in
                                Oaxaca, Mexico, focused on full-stack
                                development. I&apos;ve built institutional
                                platforms with Vue.js, Spring Boot, and
                                PostgreSQL (with PostGIS for geospatial data),
                                and real-time management systems using FastAPI,
                                Angular, and WebSockets.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                Beyond the web, I ship native Android apps with
                                Kotlin and Jetpack Compose, and cross-platform
                                desktop applications with Tauri + SQLite and
                                Java + Swing. I also handle deployments on
                                Ubuntu servers using Docker, write automation
                                scripts, and care about clean database design
                                and delivering software that works in real-world
                                environments.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
