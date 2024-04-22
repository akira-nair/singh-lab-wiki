import { Box, Center, Heading, VStack } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return(
        <Box>
            
            <Heading padding={'50px'} color={'white'}>
                Current Projects
            </Heading>
            <Center>
            <VStack>
                <ProjectCard title="scNODE" description="Generative Model  that integrates a variational autoencoder (VAE) with neural ordinary differential equations (ODEs) to predict gene expression in a continuous and non-linear latent space" />
                <ProjectCard title="One-Versus-Others Attention" description="A new domain-neutral attention mechanism, One-Versus-Others (OvO) attention, that scales linearly with the number of modalities and requires only n attention operations, thus offering a significant reduction in computational complexity compared to existing cross-modal attention algorithms" />
            </VStack>
            </Center>
        </Box>
    )
    
}