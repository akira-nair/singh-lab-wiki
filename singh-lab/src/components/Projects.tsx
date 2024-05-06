import { Box, Center, Heading, VStack, Text } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ProjectProps {
    title: string;
    description: string;
    href: string;
}

export default function Projects() {
    const [projectsData, setProjectsData] = useState<ProjectProps[]>([]);
    useEffect(() => {
        const fetchProjectsData = async () => {
            try {
                const response = await fetch('/data/projects.json');
                const data = await response.json();
                setProjectsData(data);
            } catch (error) {
                console.error('Error fetching projects data:', error);
            }
        };

        fetchProjectsData();
    }, []);
    return (
        <Box>
            <Heading padding={'50px'} color={'white'}>
                Current Projects
            </Heading>
            <Center>
                <motion.div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10 }} variants={{
                    hidden: { opacity: 0, y: -10 },
                    show: { opacity: 1, y: 0 },
                }} initial='hidden' whileInView={'show'} transition={{ duration: 1, staggerChildren: 0.5}}>
                    {projectsData.map((item, index) => (
                        <motion.div variants={{
                            hidden: { opacity: 0, y: -10 },
                            show: { opacity: 1, y: 0 },
                        }} style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', width: '100%' }}>
                            <ProjectCard
                                key={index}
                                title={item.title}
                                description={item.description}
                                href={item.href}
                            /> 
                        </motion.div>
                    ))}
                </motion.div>
            </Center>
        </Box>
    )

}