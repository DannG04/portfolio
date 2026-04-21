'use client';
import SectionTitle from '@/components/SectionTitle';
import { PROJECTS } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React, { useRef, useState, MouseEvent } from 'react';
import Project from './Project';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ProjectList = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const projectListRef = useRef<HTMLDivElement>(null);
    const imageContainer = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const [selectedProject, setSelectedProject] = useState<string | null>(
        PROJECTS[0].slug,
    );

    // update imageRef.current href based on the cursor hover position
    // also update image position
    useGSAP(
        (context, contextSafe) => {
            // show image on hover
            if (window.innerWidth < 768) {
                setSelectedProject(null);
                return;
            }

            const handleMouseMove = contextSafe?.((e: MouseEvent) => {
                if (!containerRef.current) return;
                if (!imageContainer.current) return;

                if (window.innerWidth < 768) {
                    setSelectedProject(null);
                    return;
                }

                const containerRect =
                    containerRef.current?.getBoundingClientRect();
                const imageRect =
                    imageContainer.current.getBoundingClientRect();
                const offsetTop = e.clientY - containerRect.y;

                // if cursor is outside the container, hide the image
                if (
                    containerRect.y > e.clientY ||
                    containerRect.bottom < e.clientY ||
                    containerRect.x > e.clientX ||
                    containerRect.right < e.clientX
                ) {
                    return gsap.to(imageContainer.current, {
                        duration: 0.3,
                        opacity: 0,
                    });
                }

                gsap.to(imageContainer.current, {
                    y: offsetTop - imageRect.height / 2,
                    duration: 1,
                    opacity: 1,
                });
            }) as any;

            window.addEventListener('mousemove', handleMouseMove);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        },
        { scope: containerRef, dependencies: [containerRef.current] },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'top 80%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from(containerRef.current, {
                y: 150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    const handleMouseEnter = (slug: string) => {
        if (window.innerWidth < 768) {
            setSelectedProject(null);
            return;
        }

        setSelectedProject(slug);
    };

    const selectedProjectData = PROJECTS.find(
        (p) => p.slug === selectedProject,
    );
    const isPortraitPreview =
        selectedProjectData?.imageOrientation === 'portrait';

    return (
        <section className="pb-section" id="selected-projects">
            <div className="container">
                <SectionTitle title="SELECTED PROJECTS" />

                <div className="group/projects relative" ref={containerRef}>
                    {selectedProject !== null && (
                        <div
                            className={cn(
                                'max-md:hidden absolute right-0 top-0 z-[1] pointer-events-none overflow-hidden opacity-0 rounded-md shadow-2xl bg-background-light',
                                isPortraitPreview
                                    ? 'w-[160px] xl:w-[220px] aspect-[9/19.5]'
                                    : 'w-[360px] xl:w-[480px] aspect-[16/10]',
                            )}
                            ref={imageContainer}
                        >
                            {PROJECTS.map((project) => (
                                <Image
                                    src={project.thumbnail}
                                    alt="Project"
                                    width="720"
                                    height="450"
                                    className={cn(
                                        'absolute inset-0 transition-all duration-500 w-full h-full object-cover object-top',
                                        {
                                            'opacity-0':
                                                project.slug !==
                                                selectedProject,
                                        },
                                    )}
                                    ref={imageRef}
                                    key={project.slug}
                                />
                            ))}
                        </div>
                    )}

                    <div
                        className="flex flex-col max-md:gap-10"
                        ref={projectListRef}
                    >
                        {PROJECTS.map((project, index) => (
                            <Project
                                index={index}
                                project={project}
                                selectedProject={selectedProject}
                                onMouseEnter={handleMouseEnter}
                                key={project.slug}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectList;
